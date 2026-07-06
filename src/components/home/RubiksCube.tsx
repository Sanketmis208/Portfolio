'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Edges, RoundedBox, Outlines } from '@react-three/drei';
import * as THREE from 'three';

const CUBE_SIZE = 1;
const SPACING = 1.01; // Tighter gap between cubes so they look flush when resting
const OFFSET = CUBE_SIZE * SPACING;

// Global constants for the 2D sticker shapes
const stickerSize = CUBE_SIZE - 0.06; 
const stickerOffset = CUBE_SIZE / 2 + 0.005; 

const roundedRectShape = new THREE.Shape();
const _radius = 0.06;
const _width = stickerSize;
const _height = stickerSize;
const _x = -_width / 2;
const _y = -_height / 2;
roundedRectShape.moveTo(_x, _y + _radius);
roundedRectShape.lineTo(_x, _y + _height - _radius);
roundedRectShape.quadraticCurveTo(_x, _y + _height, _x + _radius, _y + _height);
roundedRectShape.lineTo(_x + _width - _radius, _y + _height);
roundedRectShape.quadraticCurveTo(_x + _width, _y + _height, _x + _width, _y + _height - _radius);
roundedRectShape.lineTo(_x + _width, _y + _radius);
roundedRectShape.quadraticCurveTo(_x + _width, _y, _x + _width - _radius, _y);
roundedRectShape.lineTo(_x + _radius, _y);
roundedRectShape.quadraticCurveTo(_x, _y, _x, _y + _radius);

// Helper component to render a face with a perfect 2D outline
const Sticker = ({ pos, rot, isOuter, isHovered }: { pos: [number, number, number], rot: [number, number, number], isOuter: boolean, isHovered: boolean }) => {
  const baseColor = isOuter ? '#FFFFFF' : '#E9D5FF';
  const finalColor = isHovered ? '#C0FF73' : baseColor;
  return (
    <mesh position={pos} rotation={rot}>
      <shapeGeometry args={[roundedRectShape]} />
      <meshBasicMaterial color={finalColor} />
      <Edges color="#171717" />
    </mesh>
  );
};

// Positions for a 3x3x3 grid
const initialPositions: [number, number, number][] = [];
for (let x = -1; x <= 1; x++) {
  for (let y = -1; y <= 1; y++) {
    for (let z = -1; z <= 1; z++) {
      initialPositions.push([x * OFFSET, y * OFFSET, z * OFFSET]);
    }
  }
}

export interface CubeState {
  currentPos: THREE.Vector3;
  targetPos: THREE.Vector3;
  currentQuat: THREE.Quaternion;
  targetQuat: THREE.Quaternion;
  scatterPos: THREE.Vector3;
  scatterQuat: THREE.Quaternion;
}

interface CubeProps {
  position: [number, number, number];
  cubeState: CubeState;
  isHovered: boolean;
  isAdjacent: boolean;
  isContainerHovered: boolean;
  setHoveredCubeIndex: (index: number | null) => void;
  index: number;
}

const Cube = React.memo(function Cube({ position, cubeState, isHovered, isAdjacent, isContainerHovered, setHoveredCubeIndex, index }: CubeProps) {
  // wrapperRef handles the stable position and scroll rotation
  const wrapperRef = useRef<THREE.Group>(null);
  // visualRef handles the dynamic bulging and scaling
  const visualRef = useRef<THREE.Group>(null);
  
  const [baseX, baseY, baseZ] = position;

  // Cache the local offset direction to move outwards from the center
  const localOffsetDir = React.useMemo(() => {
    const dir = new THREE.Vector3(baseX, baseY, baseZ);
    if (dir.lengthSq() > 0) dir.normalize();
    return dir;
  }, [baseX, baseY, baseZ]);

  useFrame(() => {
    if (!wrapperRef.current || !visualRef.current) return;

    // 1. ROTATION LOGIC (Applied to wrapperRef)
    // Smoothly animate to target physical state (The Rubik's scramble)
    cubeState.currentPos.lerp(cubeState.targetPos, 0.1);
    cubeState.currentQuat.slerp(cubeState.targetQuat, 0.1);

    // Add playful scroll-based twisting on top of the physical state!
    const scrollY = window.scrollY;
    // The hero section is 300vh tall, so 200vh is the scrollable distance
    const maxScroll = window.innerHeight * 2; 
    const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

    // Phase 1: Massive 4x Rotation (0.0 to 0.7)
    const rotProgress = Math.min(1, progress / 0.7);
    // Smooth ease in-out
    const rotEase = rotProgress < 0.5 ? 4 * rotProgress * rotProgress * rotProgress : 1 - Math.pow(-2 * rotProgress + 2, 3) / 2;

    const globalRotY = rotEase * Math.PI * 2 * 4; // 4 full 360 rotations
    const globalRotX = rotEase * Math.PI * 2; // 1 full tumble

    let layerRotY = 0;
    if (cubeState.currentPos.y > 0.1) layerRotY = rotEase * Math.PI * 2;
    if (cubeState.currentPos.y < -0.1) layerRotY = -rotEase * Math.PI * 2;

    const scrollQuat = new THREE.Quaternion();
    const qGlobalY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), globalRotY);
    const qGlobalX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), globalRotX);
    const qLayer = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), layerRotY);
    
    scrollQuat.multiplyQuaternions(qGlobalY, qGlobalX).multiply(qLayer);

    let finalQuat = scrollQuat.clone().multiply(cubeState.currentQuat);
    let finalPos = cubeState.currentPos.clone().applyQuaternion(scrollQuat);

    // Phase 2: Break / Scatter Explosion (0.7 to 1.0)
    if (progress > 0.7) {
      const scatterProgress = (progress - 0.7) / 0.3;
      const scatterEase = 1 - Math.pow(1 - scatterProgress, 3);

      finalPos.lerp(cubeState.scatterPos, scatterEase);
      finalQuat.slerp(cubeState.scatterQuat, scatterEase);
    }

    wrapperRef.current.position.copy(finalPos);
    wrapperRef.current.quaternion.copy(finalQuat);

    // 2. EXPLODE / BULGE LOGIC (Applied LOCALLY to visualRef)
    let targetOffset = 0;
    let targetScale = 1.0;

    // Only apply the 3D bulge (zoom) effect when the cube is assembled (not scattering)
    if (progress <= 0.7) {
      if (isHovered) {
        // Pop-out ONLY the hovered cube slightly
        targetOffset = 0.5;
        targetScale = 1.1;
      }
    }

    const targetLocalPos = localOffsetDir.clone().multiplyScalar(targetOffset);
    
    // Smoothly interpolate local position and scale inside the wrapper
    visualRef.current.position.lerp(targetLocalPos, 0.15);
    
    const currentScale = visualRef.current.scale.x;
    const newScale = currentScale + (targetScale - currentScale) * 0.15;
    visualRef.current.scale.set(newScale, newScale, newScale);
  });

  const isLeft = baseX < -0.1;
  const isRight = baseX > 0.1;
  const isBottom = baseY < -0.1;
  const isTop = baseY > 0.1;
  const isBack = baseZ < -0.1;
  const isFront = baseZ > 0.1;

  return (
    <group 
      ref={wrapperRef}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHoveredCubeIndex(index);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setHoveredCubeIndex(null);
      }}
    >
      {/* Generous invisible hitbox that stays stationary during the bulge animation.
          Made 10% larger than the cube so it reliably catches the mouse even if they move fast,
          preventing the 'escape' jitter loop. */}
      <mesh>
        <boxGeometry args={[CUBE_SIZE * 1.1, CUBE_SIZE * 1.1, CUBE_SIZE * 1.1]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      <group ref={visualRef}>
        <RoundedBox args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} radius={0.08} smoothness={2}>
          <meshBasicMaterial color={isHovered ? '#C0FF73' : '#E9D5FF'} />
        </RoundedBox>

        {/* Render the mathematically perfect 2D sticker shape on ALL 6 faces.
            Internal faces get the base purple color, outer faces get white.
            This perfectly recreates the outline border on EVERY edge exactly like the reference image. */}
        <Sticker pos={[0, 0, stickerOffset]} rot={[0, 0, 0]} isOuter={isFront} isHovered={isHovered} />
        <Sticker pos={[0, 0, -stickerOffset]} rot={[0, Math.PI, 0]} isOuter={isBack} isHovered={isHovered} />
        <Sticker pos={[stickerOffset, 0, 0]} rot={[0, Math.PI/2, 0]} isOuter={isRight} isHovered={isHovered} />
        <Sticker pos={[-stickerOffset, 0, 0]} rot={[0, -Math.PI/2, 0]} isOuter={isLeft} isHovered={isHovered} />
        <Sticker pos={[0, stickerOffset, 0]} rot={[-Math.PI/2, 0, 0]} isOuter={isTop} isHovered={isHovered} />
        <Sticker pos={[0, -stickerOffset, 0]} rot={[Math.PI/2, 0, 0]} isOuter={isBottom} isHovered={isHovered} />
      </group>
    </group>
  );
});

export default function RubiksCube() {
  const [containerHovered, setContainerHovered] = useState(false);
  const [hoveredCubeIndex, setHoveredCubeIndex] = useState<number | null>(null);
  
  // Create a stable ref for the physical state of all 27 cubes
  const cubeStates = useRef<CubeState[]>(
    initialPositions.map(pos => {
      const scatterOffset = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 20
      );
      if (scatterOffset.lengthSq() < 36) scatterOffset.setLength(6 + Math.random() * 5);
      
      const scatterQuat = new THREE.Quaternion().random();

      return {
        currentPos: new THREE.Vector3(...pos),
        targetPos: new THREE.Vector3(...pos),
        currentQuat: new THREE.Quaternion(),
        targetQuat: new THREE.Quaternion(),
        scatterPos: new THREE.Vector3(...pos).add(scatterOffset),
        scatterQuat: scatterQuat,
      };
    })
  );
  const isAnimating = useRef(false);

  useEffect(() => {
    // Auto-solve random scrambler sequence
    const interval = setInterval(() => {
      if (containerHovered) return;
      if (isAnimating.current) return;
      
      const axes = [new THREE.Vector3(1,0,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,1)];
      const axisIdx = Math.floor(Math.random() * 3);
      const axis = axes[axisIdx];
      
      const sliceVals = [-OFFSET, 0, OFFSET];
      const sliceVal = sliceVals[Math.floor(Math.random() * 3)];
      
      const angle = (Math.random() > 0.5 ? 1 : -1) * Math.PI / 2;
      const rotQuat = new THREE.Quaternion().setFromAxisAngle(axis, angle);
      
      isAnimating.current = true;
      
      const snap = (val: number) => Math.round(val / OFFSET) * OFFSET;

      cubeStates.current.forEach(state => {
        // Check if this cube is in the rotating slice based on its CURRENT target position
        const val = axisIdx === 0 ? state.targetPos.x : (axisIdx === 1 ? state.targetPos.y : state.targetPos.z);
        if (Math.abs(val - sliceVal) < 0.1) {
          // Rotate position around origin
          state.targetPos.applyQuaternion(rotQuat);
          state.targetPos.x = snap(state.targetPos.x);
          state.targetPos.y = snap(state.targetPos.y);
          state.targetPos.z = snap(state.targetPos.z);
          
          // Rotate quaternion (prepend rotation)
          const newQuat = rotQuat.clone().multiply(state.targetQuat);
          state.targetQuat.copy(newQuat);
        }
      });
      
      // Allow next move after 800ms
      setTimeout(() => {
        isAnimating.current = false;
      }, 800);
      
    }, 1500); // Trigger a move every 1.5 seconds
    
    return () => clearInterval(interval);
  }, [containerHovered]);

  useEffect(() => {
    if (!containerHovered) {
      setHoveredCubeIndex(null);
    }
  }, [containerHovered]);

  const handleSetHoveredCubeIndex = useCallback((idx: number | null) => {
    setHoveredCubeIndex(idx);
  }, []);

  // Helper to check if two cubes are adjacent based on their CURRENT scrambled positions
  const isAdjacent = (idx1: number, idx2: number) => {
    if (idx1 === null || idx2 === null) return false;
    const pos1 = cubeStates.current[idx1].targetPos;
    const pos2 = cubeStates.current[idx2].targetPos;
    const dx = Math.abs(pos1.x - pos2.x);
    const dy = Math.abs(pos1.y - pos2.y);
    const dz = Math.abs(pos1.z - pos2.z);
    const dist = dx + dy + dz;
    return dist > 0.1 && dist < 1.1 * OFFSET;
  };

  const [basePosition, setBasePosition] = useState<[number, number, number]>([0, 0.5, 0]);

  useEffect(() => {
    const handleResize = () => {
      // Offset to the right side of the screen on desktop so it doesn't block text
      if (window.innerWidth >= 1024) {
        setBasePosition([3.5, 0.5, 0]);
      } else {
        setBasePosition([0, 0.5, 0]);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className="w-full h-full relative"
      onPointerEnter={() => setContainerHovered(true)}
      onPointerLeave={() => setContainerHovered(false)}
    >
      <Canvas camera={{ position: [5.0, 4.0, 6.0], fov: 45 }}>
        <PresentationControls
          global
          snap
          cursor={false}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          {/* Group wrapper to handle overall scaling and positioning */}
          <group scale={0.55} position={basePosition} rotation={[0, -Math.PI / 4, 0]}>
            {/* The central giant purple core is REMOVED! */}
            {/* The purple color now comes organically from the internal faces of the small cubes themselves. */}
            
            {/* The 27 cubes */}
            {initialPositions.map((pos, i) => (
              <Cube 
                key={i} 
                index={i}
                position={pos} 
                cubeState={cubeStates.current[i]}
                isHovered={hoveredCubeIndex === i}
                isAdjacent={hoveredCubeIndex !== null && isAdjacent(i, hoveredCubeIndex)}
                isContainerHovered={containerHovered}
                setHoveredCubeIndex={handleSetHoveredCubeIndex}
              />
            ))}
          </group>
        </PresentationControls>
      </Canvas>

      <div 
        className={`absolute right-[5%] lg:right-[22%] top-[15%] lg:top-[20%] pointer-events-none transition-opacity duration-500 ${containerHovered ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="flex flex-col items-end gap-1">
          <span className="font-[family-name:var(--font-accent)] italic text-[var(--color-text-muted)] whitespace-nowrap pr-4">Hover to play</span>
          <svg width="70" height="70" viewBox="0 0 100 100" fill="none" className="text-[var(--color-text-muted)] -mt-2">
            <path d="M80 10 C80 60, 50 80, 10 90" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M10 90 L30 85 M10 90 L20 70" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
