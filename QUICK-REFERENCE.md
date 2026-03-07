# ⚡ Quick Reference: Common Edits (Copy-Paste This!)

**Bookmark this page!** Here are the most common things you'll need to change, with exact examples.

---

## 🎯 5 Things You'll Actually Edit

### 1. YOUR NAME (in header)

**Find this line (around line 12):**
```html
<h1>dan bauman | photography</h1>
```

**Change to:**
```html
<h1>YOUR NAME | photography</h1>
```

---

### 2. PHOTO SOURCES (your actual images)

**Find lines like this (there are 8 of them):**
```html
<img src="data:image/svg+xml,%3Csvg..." alt="Photography 1">
```

**Change to:**
```html
<img src="images/beach-sunset.jpg" alt="Beach Sunset">
```

**Remember:**
- Create `images` folder first
- Put your photos in it
- Name them simple (no spaces): `beach-sunset.jpg` not `Beach Sunset Photo.jpg`
- Update the path: `images/your-photo-name.jpg`

---

### 3. PHOTO TITLES (hover overlay text)

**Find lines like this (there are 8):**
```html
<h3 class="photo-title">Photo Title 1</h3>
```

**Change to:**
```html
<h3 class="photo-title">Golden Hour at the Beach</h3>
```

---

### 4. PAGE TITLE (browser tab)

**Find this line (around line 6):**
```html
<title>Dan Bauman | Photography</title>
```

**Change to:**
```html
<title>Your Name | Photography Portfolio</title>
```

---

### 5. STYLE THEME (optional)

**Open `styles.css` and find line ~30:**

**Current (Dark Charcoal + White):**
```css
:root {
    --bg-color: #242424;
    --frame-border: 8px solid #ffffff;
    --frame-bg: transparent;
    --frame-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
```

**To switch to Metallic Gold frames:**
1. Add `/*` before `:root` and `*/` after the closing `}`
2. Find "COMBINATION 3: Dark Charcoal + Metallic Gold Frames"
3. Remove the `/*` and `*/` around that section
4. Save

---

## 📋 Copy-Paste Template: Adding One Photo

Copy this entire block and paste it before the final `</div></div>` tags:

```html
<div class="gallery-item">
    <img src="images/your-photo.jpg" alt="Your Photo Description">
    <div class="overlay">
        <h3 class="photo-title">Your Photo Title</h3>
    </div>
</div>
```

Then change:
- `your-photo.jpg` → your actual filename
- `Your Photo Description` → brief description
- `Your Photo Title` → what shows on hover

---

## 🔍 How to Find Stuff

**Press `Ctrl+F` in your editor and search for:**

| Want to change... | Search for... |
|-------------------|---------------|
| Your name in header | `dan bauman` |
| Page title | `<title>` |
| First photo | `Photo 1` |
| Photo titles | `photo-title` |
| All images | `<img src` |

---

## 🚀 Upload & Deploy (GitHub Pages)

**After editing your files:**

1. **Go to GitHub:**
   - https://github.com/Dauman998/macro-gallery

2. **Upload your changes:**
   - Click "Add file" → "Upload files"
   - Drag `index.html` (and `images` folder if you have photos)
   - Scroll down, click "Commit changes"

3. **Enable Pages (first time only):**
   - Click "Settings" (gear icon)
   - Click "Pages" on left sidebar
   - Under "Source", select branch: `main`
   - Click "Save"

4. **View your site:**
   - Wait 1-2 minutes
   - Go to: `https://Dauman998.github.io/macro-gallery/`
   - Done! 🎉

**To update later:** Just upload files again (step 2). Changes go live in ~1 minute.

---

## 📸 Image Checklist

Before adding photos:

- [ ] Photos are `.jpg` or `.png` format
- [ ] Photos are square-ish (1:1 ratio looks best)
- [ ] Photos are under 1 MB each (compress at tinyjpg.com if needed)
- [ ] Filenames are simple: `photo1.jpg`, `sunset.jpg` (no spaces!)
- [ ] Photos are in `images/` folder
- [ ] Updated all `<img src="images/...">` paths in index.html

---

## 🎨 Quick Color Changes (styles.css)

**Change background:**
```css
--bg-color: #242424;  (current dark gray)
--bg-color: #1a1a1a;  (darker)
--bg-color: #2e2e2e;  (lighter)
--bg-color: #1e2936;  (dark blue)
--bg-color: #2a2520;  (dark brown)
```

**Google "color picker"** to find color codes you like!

---

## ⚠️ Things NOT to Delete

**Don't delete these or your site breaks:**

- `<!DOCTYPE html>` at the very top
- `<html>` opening or `</html>` closing tags
- `<head>` and `</head>` section
- `<link rel="stylesheet" href="styles.css">` (loads your styling)
- `<body>` and `</body>` tags

**Safe to change:**
- Text between `>` and `<` tags
- File paths in `src=""` or `href=""`
- Text in `alt=""` attributes

**When in doubt:** Press `Ctrl+Z` to undo!

---

## 🔧 Troubleshooting Fast Fixes

| Problem | Quick Fix |
|---------|-----------|
| Photo doesn't show | Check filename spelling, make sure it's in `images/` folder |
| Changed text doesn't show | Did you save? (Ctrl+S). Did you refresh browser? (F5) |
| Site looks broken | Press Ctrl+Z to undo. Or get fresh copy from GitHub |
| Can't find what to edit | Press Ctrl+F and search for the text you see on website |
| Title doesn't change | Make sure you saved index.html, not just looked at it |

---

## 📱 Test Your Site Checklist

Before deploying, check:

- [ ] Open `index.html` by double-clicking (opens in browser)
- [ ] Check: Your name shows in header
- [ ] Check: All 8 photos load
- [ ] Check: Hover over photos - titles appear
- [ ] Check: Page title in browser tab is correct
- [ ] Press F12 → Click phone icon → Test mobile view
- [ ] Everything looks good? Deploy it!

---

## 💾 Backup Your Work

**Before making big changes:**

1. Right-click your `macro-gallery` folder
2. Click "Copy"
3. Right-click on Desktop
4. Click "Paste"
5. Rename to `macro-gallery-backup`

Now you can experiment without worry!

---

## ⏱️ Time Estimates

| Task | Time Needed |
|------|-------------|
| Change your name | 2 minutes |
| Add 8 photos | 15 minutes |
| Update all titles | 10 minutes |
| Pick new color theme | 5 minutes |
| Deploy to GitHub Pages | 5 minutes |
| **Total first setup** | **~40 minutes** |

After that, updating one photo = 2 minutes!

---

## 🎓 You Only Need to Know 3 Things

1. **How to open a file** (right-click → Open with → Notepad)
2. **How to find text** (Ctrl+F)
3. **How to save** (Ctrl+S)

That's literally it! Everything else is just changing text and saving.

---

## 🆘 Still Confused?

**Try This Learning Path:**

1. **Day 1:** Just change your name. That's it. Save, preview, done.
2. **Day 2:** Add ONE photo. Just one. Get that working.
3. **Day 3:** Add the rest of your photos.
4. **Day 4:** Update titles.
5. **Day 5:** Deploy to GitHub Pages.

**Baby steps!** You don't need to do everything at once.

---

## ✅ Success = These 5 Edits

You'll know you're successful when:

1. ✅ Header shows YOUR name
2. ✅ All 8 photos are YOUR photos
3. ✅ Titles describe YOUR photos
4. ✅ Browser tab shows your name
5. ✅ Site is live on the internet

**That's it!** Then you're done and have a professional portfolio for $0/month!

---

**Print this page or bookmark it.** You'll refer back to it often! 📌
