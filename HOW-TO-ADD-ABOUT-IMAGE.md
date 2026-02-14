# How to Add Your Photo to About Page

## 3 Simple Steps

### Step 1: Rename Your Photo
- Name it: `about-photo.jpg` (or `about-photo.png`)

### Step 2: Put in Images Folder
1. Go to your website folder
2. Create `images` folder (if it doesn't exist)
3. Drag your photo into the images folder

### Step 3: Edit about.html
1. Open `about.html` in TextEdit
2. Find line 32 (search for `<img src=`)
3. Change from: `<img src="placeholder.jpg" alt="Your Name">`
4. Change to: `<img src="images/about-photo.jpg" alt="Dan Bauman">`
5. Save the file

**Done! Double-click about.html to see your photo!**

---

## Folder Structure

```
your-website-folder/
  ├── about.html
  ├── index.html
  ├── gallery.html
  ├── contact.html
  ├── images/
      ├── about-photo.jpg  ← Your photo goes here!
      ├── photo1.jpg       (gallery photos)
      ├── photo2.jpg
      └── ...
```

---

## Exact Code to Change

**Find this (around line 32 in about.html):**
```html
<img src="placeholder.jpg" alt="Your Name">
```

**Change to this:**
```html
<img src="images/about-photo.jpg" alt="Dan Bauman">
```

---

## Alternative: Use Existing Gallery Photo

If you already uploaded gallery photos, you can use one of those!

```html
<img src="images/photo1.jpg" alt="Dan Bauman">
```

No need to upload twice!

---

## Photo Recommendations

**Size:**
- 800-1200 pixels wide
- Portrait or square orientation
- 100-300KB file size

**Style:**
- Professional headshot
- Good lighting
- Neutral background
- Shows your personality

**Export:**
- Same Lightroom settings as gallery photos
- 80% JPEG quality
- sRGB color space

---

## Testing

1. Save about.html
2. Double-click about.html (opens in browser)
3. Your photo should appear on the left side
4. Bio text should be on the right

---

## Troubleshooting

**Photo doesn't appear?**
- ✓ Check file name matches exactly: `about-photo.jpg`
- ✓ Check photo is in `images` folder
- ✓ Check HTML has correct path: `images/about-photo.jpg`
- ✓ Try refreshing browser (Cmd+R)
- ✓ Check file extension (.jpg or .png)

**Photo looks weird?**
- CSS automatically sizes it to ~400px wide
- Maintains aspect ratio
- Should look good with portrait or square photos

**Can't find the line to edit?**
- Press Cmd+F in TextEdit
- Search for: `<img src=`
- Should be around line 30-35

---

## That's It!

Just 3 simple steps:
1. Rename to `about-photo.jpg`
2. Put in `images` folder
3. Edit about.html line 32

**Your photo appears on the About page!** 📸✨
