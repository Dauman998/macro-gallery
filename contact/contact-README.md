# Contact Page — Dan Bauman Photography

## Image Setup

### Background image (full page)
1. Export from Lightroom: JPEG, Quality 80, Long Edge 2000px, Sharpen for Screen High
2. Place the file in the `contact/` folder
3. Open `contact/index.html` in VS Code
4. Find this line (Cmd+F to search): `url('2017.jpg')`
5. Replace `2017.jpg` with your filename

To reframe which part of the image shows as background:
- Find `background-position: center;`
- Change `center` to e.g. `top center` or `30% 60%`

To adjust how dark the overlay is:
- Find `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.78))`
- Raise the numbers (e.g. 0.80) to darken, lower (e.g. 0.45) to lighten

---

### Panel image (right column)
1. Export from Lightroom: JPEG, Quality 80, Long Edge 1200px, Sharpen for Screen High
2. Place the file in the `contact/` folder (can be the same image as background)
3. Open `contact/index.html` in VS Code
4. Find this line: `<img src="2017.jpg"`
5. Replace `2017.jpg` with your filename

To adjust panel image brightness (no re-export needed):
- Find `filter: brightness(0.65);`
- 1.0 = original brightness
- 0.7 = slightly darker
- 0.5 = quite dark
- This darkens on screen only — sharpness is fully preserved

To reframe the panel crop:
- Find `object-position: center center;`
- Change to e.g. `top center` or `30% 60%`

---

## Adjusting Colors and Text

### "Send a Message" heading size
- Find `font-size: clamp(1.2rem, 1.6vw, 1.6rem);`
- clamp(MIN, PREFERRED, MAX)
- Bigger: clamp(1.4rem, 1.8vw, 1.8rem)
- Smaller: clamp(1.0rem, 1.2vw, 1.2rem)

### Brightness of any text element
All text uses `rgba(255,255,255,X)` where X is opacity 0–1:
- Heading: 0.72
- Field labels: 0.48
- Typed text in fields: 0.78
- Send button text: 0.72
- Field borders: 0.22
Raise any number to brighten, lower to dim.

### Field and button corners
- `border-radius: 8px` = rounded (current)
- `border-radius: 0` = square corners
Change all instances to switch between the two styles.

### Social icon colors
Current: grayscale (`background: #3a3a3a`)
To restore brand colors, replace the background on `.social-icon`:
- Instagram: `background: radial-gradient(circle at 30% 110%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285aeb 90%);`
- Facebook: `background: #1877f2;`
Note: if you restore Instagram color, remove the border from `.social-icon` to avoid the white line at the top.

---

## GitHub Workflow (reminder)
1. Edit file in VS Code
2. Cmd+S to save
3. Switch to GitHub Desktop
4. Type a summary note (e.g. "update contact image")
5. Click Commit to main
6. Click Push origin
