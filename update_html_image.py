import base64
import re

# Read the transparent image
with open("farmador_nobg.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read()).decode('utf-8')

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Pattern to replace the img tag containing the base64 avatar
pattern = r'<img src="data:image/png;base64,[^"]+"[^>]*style="[^"]*"[^>]*>'

new_img_tag = f'<img src="data:image/png;base64,{encoded_string}" style="position: absolute; right: 40px; top: 120px; width: 160px; opacity: 0.95; filter: drop-shadow(0px 0px 15px rgba(184, 134, 11, 0.4));">'

html_new = re.sub(pattern, new_img_tag, html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html_new)

print("HTML updated with transparent image and new layout.")
