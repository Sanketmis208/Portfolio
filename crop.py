from PIL import Image

img = Image.open('public/Portfolio_website_logo.png')
# crop(left, upper, right, lower)
cropped = img.crop((450, 480, 2450, 850))
cropped.save('public/logo_cropped.png')
print("Cropped saved.")
