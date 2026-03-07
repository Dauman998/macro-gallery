# 🎯 Beginner's Guide: Edit Your Portfolio Without Coding Skills

**Don't panic!** This guide will show you EXACTLY what to do, step-by-step. No coding knowledge needed!

Think of editing your website like this:
- **Wix/Drag-and-drop**: Click, drag, type in boxes
- **Your portfolio**: Open file, find text, change it, save

It's just **one extra step** (opening the file), but you save **$192-1,908/year**!

---

## 📋 What You Need (Free Tools)

### Option 1: Just Windows Notepad (Easiest!)
- Already on your computer
- Click Start → Search "Notepad"
- That's it!

### Option 2: VS Code (Recommended - Still Free!)
1. Download from: https://code.visualstudio.com
2. Install it (click Next, Next, Next)
3. Done!

**Why VS Code?** It color-codes your text so it's easier to see what you're editing.

---

## 🚀 Quick Start: Make Your First Edit (5 Minutes)

Let's change the header text from "dan bauman | photography" to YOUR name!

### Step 1: Find the File
1. Open your `macro-gallery` folder
2. Find `index.html`
3. Right-click it
4. Choose "Open with" → Notepad (or VS Code)

### Step 2: Find What to Change
Press `Ctrl+F` (Find) and search for:
```
dan bauman | photography
```

You'll see this line:
```html
<h1>dan bauman | photography</h1>
```

### Step 3: Change It
Replace with your name:
```html
<h1>john smith | photography</h1>
```

### Step 4: Save It
- Press `Ctrl+S` or click File → Save
- Done! ✅

### Step 5: See Your Change
- Find `index.html` in your folder
- Double-click it
- It opens in your browser
- See your name in the header!

**🎉 You just edited your website!** That wasn't so bad, right?

---

## 📸 Most Common Edits (Copy-Paste Ready!)

### ✏️ Edit #1: Add Your Photos

**What you see in the code:**
```html
<img src="data:image/svg+xml,..." alt="Photography 1">
```

**What to change it to:**
```html
<img src="images/my-photo.jpg" alt="Sunset at Beach">
```

**Steps:**
1. Create a folder called `images` next to index.html
2. Put your photo in it (name it something simple like `photo1.jpg`)
3. Find the `<img src=` line in index.html
4. Replace the long `data:image/svg+xml...` part with `images/photo1.jpg`
5. Save!

**Full example - Before:**
```html
<img src="data:image/svg+xml,%3Csvg..." alt="Photography 1">
```

**Full example - After:**
```html
<img src="images/sunset-beach.jpg" alt="Sunset at Beach">
```

Do this for all 8 photos!

---

### ✏️ Edit #2: Change Photo Titles

**What you see:**
```html
<h3 class="photo-title">Photo Title 1</h3>
```

**What to change it to:**
```html
<h3 class="photo-title">Golden Hour at the Beach</h3>
```

**Steps:**
1. Press `Ctrl+F` and search for `Photo Title 1`
2. Change the text between `>` and `</h3>`
3. Save!

---

### ✏️ Edit #3: Change Page Title (Browser Tab)

**What you see:**
```html
<title>Dan Bauman | Photography</title>
```

**What to change it to:**
```html
<title>Your Name | Photography</title>
```

This shows up in the browser tab at the top!

---

### ✏️ Edit #4: Add More Photos

Want more than 8 photos? Just copy and paste!

**Steps:**
1. Find one complete photo section (from `<div class="gallery-item">` to `</div>`)
2. Copy it (Ctrl+C)
3. Paste it below the last one (Ctrl+V)
4. Change the image source and title
5. Save!

**What to copy:**
```html
<div class="gallery-item">
    <img src="images/photo9.jpg" alt="Photography 9">
    <div class="overlay">
        <h3 class="photo-title">New Photo Title</h3>
    </div>
</div>
```

The 2-column layout automatically adjusts!

---

## 🎨 Change Colors/Styles (Advanced)

Open `styles.css` instead of `index.html`.

### Change Background Color

**Find this (around line 30):**
```css
--bg-color: #242424;
```

**Change the color code:**
```css
--bg-color: #1a1a1a;  (darker)
--bg-color: #2e2e2e;  (lighter)
```

**How to pick colors:**
1. Google "color picker"
2. Choose a color you like
3. Copy the code (like `#2e2e2e`)
4. Paste it in your CSS

---

## 🔍 Understanding the Code Structure

Think of HTML like this:

```
<TAG>Content goes here</TAG>
  ↑                      ↑
Opening tag        Closing tag
```

**Common patterns you'll see:**

| Code | What it means |
|------|---------------|
| `<h1>Text</h1>` | Big heading (your name) |
| `<h3>Text</h3>` | Small heading (photo titles) |
| `<img src="...">` | Image (your photo) |
| `<div>...</div>` | Container (groups things together) |

**Rules:**
- Text between `>` and `<` is what shows on the website
- Text inside `""` quotes is usually a file path or setting
- Don't delete the `<` and `>` symbols
- Every opening tag `<div>` needs a closing tag `</div>`

---

## 🚨 "Help! I Broke Something!"

**Don't worry!** Here's how to fix it:

### Undo Your Last Change
1. Press `Ctrl+Z` (undo)
2. Keep pressing until it looks right
3. Save again

### Start Over
1. Go to GitHub: https://github.com/Dauman998/macro-gallery
2. Click on `index.html`
3. Click "Raw" button
4. Press `Ctrl+A` (select all)
5. Press `Ctrl+C` (copy)
6. Paste into your local file
7. Save

### Common Mistakes

**Problem:** Website looks weird after editing
- **Check:** Did you delete a `<` or `>` by accident?
- **Fix:** Press Ctrl+Z to undo

**Problem:** Photo doesn't show
- **Check:** Is the image in the `images` folder?
- **Check:** Did you spell the filename exactly right? (case-sensitive!)
- **Fix:** Make sure `<img src="images/photo1.jpg">` matches your actual filename

**Problem:** Can't find what to edit
- **Tip:** Press `Ctrl+F` and search for the text you see on the website
- It will jump right to that line!

---

## 📤 Deploying Your Site (Publishing Online)

Once you've edited your site, here's how to put it online:

### Method 1: GitHub Pages (Easiest)

**Step 1: Upload your edited files to GitHub**
1. Go to: https://github.com/Dauman998/macro-gallery
2. Click "Add file" → "Upload files"
3. Drag your edited `index.html` (and `images` folder if you added photos)
4. Click "Commit changes"

**Step 2: Enable GitHub Pages**
1. Go to Settings (gear icon)
2. Click "Pages" on the left
3. Under "Source": Select `main` branch
4. Click "Save"
5. Wait 2 minutes
6. Your site is live at: `https://Dauman998.github.io/macro-gallery/`

### Method 2: Netlify Drop (Even Easier!)

1. Go to: https://app.netlify.com/drop
2. Drag your entire `macro-gallery` folder to the page
3. Done! You get a URL instantly
4. Optionally: Click "Domain settings" to use a custom domain

---

## 📚 Learning Resources (Optional)

Want to understand more? These are beginner-friendly:

- **HTML in 30 minutes**: https://www.youtube.com/results?search_query=html+for+beginners
- **W3Schools**: https://www.w3schools.com/html/ (interactive tutorials)
- **FreeCodeCamp**: https://www.freecodecamp.org (free, structured course)

But honestly? **You don't need to learn coding!** Just follow this guide and copy-paste the examples.

---

## ✅ Your Action Checklist

Use this to track your progress:

- [ ] Download Notepad or VS Code
- [ ] Open `index.html` in your editor
- [ ] Change header to your name
- [ ] Save and preview in browser (double-click index.html)
- [ ] Create `images` folder
- [ ] Add your 8 photos to the folder
- [ ] Update all 8 image sources in index.html
- [ ] Update all 8 photo titles
- [ ] Change page title in `<title>` tag
- [ ] Save everything
- [ ] Preview one more time
- [ ] Deploy to GitHub Pages or Netlify
- [ ] Share your portfolio URL!

---

## 💡 Remember

**Wix is like a restaurant:** They cook for you, but you pay $16-159/month forever.

**Your portfolio is like cooking at home:** A bit more effort, but:
- It's FREE forever
- You own the recipe (code)
- You can customize everything
- No monthly bills

And with this guide, the "effort" is just:
1. Open file
2. Change text
3. Save
4. Upload

**That's it!** You can do this! 🚀

---

## 🆘 Still Stuck?

**Common Questions:**

**Q: "This still seems complicated!"**  
A: Try changing just ONE thing first. Your name. That's it. Then save and look at it. Baby steps!

**Q: "What if I mess up the code?"**  
A: You can't break your computer! Worst case, you download a fresh copy from GitHub. No big deal!

**Q: "Can you just do it for me?"**  
A: I'll help guide you, but YOU need to do the edits because:
1. You'll need to update your portfolio with new photos
2. You'll learn a valuable skill
3. It's easier than you think!

**Q: "Is there a video tutorial?"**  
A: Search YouTube for "how to edit HTML for beginners" - lots of great 10-minute videos!

**Ready to try?** Start with changing your name. Just that one thing. You got this! 💪
