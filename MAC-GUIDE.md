# 🍎 Mac User Guide: Edit Your Portfolio

**Good news!** Everything works the same on Mac, just with different keyboard shortcuts and tools.

---

## 🛠️ Tools for Mac Users

### Option 1: TextEdit (Already on Your Mac!)
1. Click Spotlight (🔍 in top-right)
2. Type "TextEdit"
3. Press Enter
4. Done!

**Important:** Set TextEdit to Plain Text mode:
1. Open TextEdit
2. Click "TextEdit" menu → "Preferences"
3. Under "Format", select "Plain text"
4. Close Preferences

### Option 2: VS Code (Recommended - Free!)
1. Download from: https://code.visualstudio.com
2. Open the downloaded file
3. Drag VS Code to Applications folder
4. Done!

**Why VS Code?** Color-codes your text, making it easier to see what you're editing.

---

## ⌨️ Mac Keyboard Shortcuts

| Windows | Mac | What it does |
|---------|-----|--------------|
| Ctrl+F | **Cmd+F** | Find text |
| Ctrl+S | **Cmd+S** | Save file |
| Ctrl+Z | **Cmd+Z** | Undo |
| Ctrl+C | **Cmd+C** | Copy |
| Ctrl+V | **Cmd+V** | Paste |
| Ctrl+A | **Cmd+A** | Select all |
| F5 | **Cmd+R** | Refresh browser |

**Remember: It's Cmd (⌘), not Ctrl!**

---

## 🚀 Quick Start: Your First Edit (5 Minutes)

### Step 1: Find the File
1. Open Finder
2. Navigate to your `macro-gallery` folder
3. Find `index.html`
4. Right-click (or Control+click)
5. Choose "Open With" → TextEdit (or VS Code)

### Step 2: Find What to Change
Press **Cmd+F** (Find) and search for:
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
- Press **Cmd+S** or click File → Save
- Done! ✅

### Step 5: See Your Change
- Find `index.html` in Finder
- Double-click it (opens in Safari or your default browser)
- See your name in the header!

**🎉 You just edited your website on Mac!**

---

## 📸 Adding Photos on Mac

### Create Images Folder
1. Open Finder
2. Navigate to `macro-gallery` folder
3. Right-click in the folder
4. Select "New Folder"
5. Name it `images` (all lowercase!)
6. Drag your photos into this folder

### Recommended: Optimize Photos
**Use Preview (built into Mac):**
1. Right-click your photo
2. Choose "Open with" → Preview
3. Click "Tools" → "Adjust Size"
4. Set width to 1200 pixels
5. Check "Scale proportionally"
6. Save
7. To compress: File → Export → Reduce "Quality" slider to 70%

**Or use online:** https://squoosh.app (drag, compress, download)

---

## 📝 Editing with TextEdit (Mac)

### Opening Files
**Method 1: Right-click**
1. Right-click `index.html`
2. Choose "Open With" → TextEdit

**Method 2: From TextEdit**
1. Open TextEdit
2. Click File → Open
3. Navigate to `index.html`
4. Click Open

### Making Sure It's Plain Text
If you see fonts and formatting buttons, you're in Rich Text mode!

**Switch to Plain Text:**
1. Click "Format" menu
2. Select "Make Plain Text"
3. Now you can edit!

---

## 🎨 Editing with VS Code (Recommended)

### Opening Your Project
1. Open VS Code
2. Click File → Open Folder
3. Select your `macro-gallery` folder
4. Click "Open"

Now you see all files in the left sidebar!

### Features You'll Love
- **Color coding** - HTML tags are colored differently
- **Auto-complete** - Suggests code as you type
- **Preview** - Install "Live Server" extension for instant preview
- **Multiple files** - Edit index.html and styles.css side-by-side

### Installing Live Server Extension
1. Click Extensions icon (4 squares) in left sidebar
2. Search "Live Server"
3. Click "Install" on the one by Ritwick Dey
4. Right-click `index.html` → "Open with Live Server"
5. Your site opens automatically and refreshes when you save!

---

## 🌐 Preview Your Site (Mac)

### Method 1: Double-Click
1. Find `index.html` in Finder
2. Double-click it
3. Opens in Safari (or your default browser)

### Method 2: Right-Click Browser
1. Right-click `index.html`
2. Choose "Open With" → Safari (or Chrome, Firefox)

### Method 3: Drag & Drop
1. Open Safari (or any browser)
2. Drag `index.html` from Finder into the browser window
3. Boom! Your site appears

**To refresh after changes:** Press **Cmd+R** in the browser

---

## 📤 Upload to GitHub (Mac)

### Method 1: GitHub Desktop (Easiest)
1. Download GitHub Desktop: https://desktop.github.com
2. Install and sign in
3. Click "Add" → "Add Existing Repository"
4. Navigate to your `macro-gallery` folder
5. Make your edits to files
6. GitHub Desktop shows changes automatically
7. Type commit message: "Updated my photos"
8. Click "Commit to main"
9. Click "Push origin"
10. Done!

### Method 2: GitHub Web Interface
1. Go to: https://github.com/Dauman998/macro-gallery
2. Click "Add file" → "Upload files"
3. Drag your edited `index.html` (and `images` folder)
4. Scroll down, click "Commit changes"

### Method 3: Terminal (Advanced)
```bash
cd ~/Desktop/macro-gallery  # Navigate to folder
git add .                     # Stage all changes
git commit -m "Updated photos" # Commit changes
git push                      # Push to GitHub
```

---

## 🎯 Mac-Specific Tips

### File Extensions
Mac hides file extensions by default. To see them:
1. Open Finder
2. Click Finder menu → Preferences
3. Click "Advanced"
4. Check "Show all filename extensions"

Now you'll see `.html`, `.css`, `.jpg` clearly!

### Taking Screenshots
- **Full screen:** Cmd+Shift+3
- **Selected area:** Cmd+Shift+4
- Screenshots save to Desktop

Great for showing your work!

### Quick Look
Select `index.html` in Finder and press **Spacebar** to preview it!

---

## 🔍 Finding Files Quickly (Spotlight)

Press **Cmd+Space** and type:
- "index.html" → Jump to file
- "TextEdit" → Open app
- "macro-gallery" → Find folder

Fastest way to open files on Mac!

---

## 🚨 Troubleshooting (Mac)

### "Can't Edit the File"
**Problem:** File opens in Safari, not TextEdit
**Fix:** Right-click → "Open With" → TextEdit

### "Weird Characters Appear"
**Problem:** TextEdit is in Rich Text mode
**Fix:** Format → Make Plain Text

### "Changes Don't Show in Browser"
**Problem:** Browser cached old version
**Fix:** Press **Cmd+Shift+R** (hard refresh)

### "Can't Find the File"
**Problem:** File is somewhere else
**Fix:** Use Spotlight (Cmd+Space) to search for it

---

## ⌨️ Quick Reference Card

**Print or screenshot this:**

```
🍎 MAC SHORTCUTS FOR EDITING

Find:        Cmd+F
Save:        Cmd+S
Undo:        Cmd+Z
Copy:        Cmd+C
Paste:       Cmd+V
Select All:  Cmd+A
Refresh:     Cmd+R
Hard Refresh: Cmd+Shift+R
Spotlight:   Cmd+Space

WHAT TO CHANGE:
1. Your name:     Line 12
2. Page title:    Line 6
3. Photo sources: Lines 24, 30, 36, etc.
4. Photo titles:  Lines 26, 32, 38, etc.

TOOLS:
- TextEdit (built-in)
- VS Code (download)
- GitHub Desktop (optional)
```

---

## 📁 Organizing on Mac

### Recommended Setup
```
~/Desktop/macro-gallery/
├── index.html
├── styles.css
├── images/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
└── (your guide files)
```

### Backup Strategy
1. Select `macro-gallery` folder
2. Press **Cmd+D** (duplicate)
3. Rename to `macro-gallery-backup`
4. Store on Desktop or iCloud Drive

---

## ☁️ iCloud Drive (Optional)

Want to edit on multiple devices?

1. Move `macro-gallery` to iCloud Drive folder
2. Edit on Mac
3. Access from iPhone/iPad (view only)
4. Sync across devices automatically

---

## 🎓 Learning Path for Mac Users

**Week 1:** Use TextEdit
- Get comfortable with Plain Text mode
- Make small edits
- Save and preview

**Week 2:** Try VS Code
- Download and install
- Open your project
- Enjoy color coding!

**Week 3:** Install GitHub Desktop
- Easier than Terminal
- Visual interface
- Push changes with one click

**Week 4:** Master it!
- Edit confidently
- Deploy instantly
- Update anytime

---

## 🌟 Mac Advantages

**Built-in Tools:**
- Preview (image editing)
- TextEdit (code editing)
- Terminal (if you want it)
- Spotlight (find anything fast)

**Design Focus:**
- Retina displays (see details clearly)
- Great typography (easy to read code)
- Trackpad gestures (smooth navigation)

**Perfect for Creatives:**
- You're a photographer with a Mac
- Your workflow is already optimized
- This fits right in!

---

## ✅ Mac User Checklist

- [ ] Set TextEdit to Plain Text mode
- [ ] Show file extensions in Finder
- [ ] Open index.html in TextEdit
- [ ] Change your name (Cmd+F to find it)
- [ ] Save (Cmd+S)
- [ ] Preview in browser (double-click)
- [ ] Create images folder
- [ ] Add photos
- [ ] Edit image sources
- [ ] Deploy to GitHub

---

## 🆘 Mac-Specific Questions?

**"Should I use TextEdit or VS Code?"**
→ Start with TextEdit. If you like editing, upgrade to VS Code later.

**"Can I use Pages?"**
→ No! Pages is for documents. Use TextEdit in Plain Text mode or VS Code.

**"What about Xcode?"**
→ Too heavy for this simple task. TextEdit or VS Code is perfect.

**"Can I edit on my iPhone?"**
→ You can view files, but editing is easier on Mac. Use Working Copy app if you must.

---

## 🎉 You're Ready!

All the guides apply to you, just remember:
- **Ctrl** → **Cmd** 
- **Notepad** → **TextEdit** (Plain Text mode)
- **F5** → **Cmd+R**

Everything else is exactly the same!

**Now go to `BEGINNER-GUIDE.md` and start editing!** 🚀

Just substitute Cmd for Ctrl as you follow along. You've got this! 💪
