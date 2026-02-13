# Dan Bauman | Photography Portfolio

A professional, minimalist photography portfolio website featuring a customizable style system with 12 different background and frame combinations.

## 🎨 Features

- **Clean, minimalist design** with professional header
- **8-image gallery** in a responsive 4-4 grid layout (2 rows, 4 columns)
- **12 style combinations** using CSS variables for easy switching
  - 3 background colors (Dark Charcoal, Deep Navy, Warm Dark Brown)
  - 4 frame styles (Classic White, Metallic Silver, Metallic Gold, Metallic Bronze)
- **Responsive design** that works on desktop, tablet, and mobile
- **Smooth hover effects** with subtle zoom and overlay animations
- **Easy customization** for images and titles

## 🚀 Quick Start

### Preview Locally

1. **Download the files**
   - Download or clone this repository to your computer
   - You should have: `index.html`, `styles.css`, and `README.md`

2. **Open in browser**
   - Simply double-click `index.html` to open it in your default browser
   - Or right-click → "Open with" → Choose your preferred browser

3. **View the gallery**
   - The website will open with the default style (Dark Charcoal background + White frames)
   - Hover over images to see the smooth zoom and title overlay effects

### Using a Local Server (Optional but Recommended)

For the best preview experience, use a local development server:

**Option 1: Using Python (if installed)**
```bash
# Navigate to the project folder
cd path/to/macro-gallery

# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

**Option 2: Using Node.js (if installed)**
```bash
# Install live-server globally
npm install -g live-server

# Navigate to the project folder
cd path/to/macro-gallery

# Start the server
live-server

# Browser will open automatically
```

**Option 3: Using VS Code**
- Install the "Live Server" extension by Ritwick Dey
- Right-click on `index.html`
- Select "Open with Live Server"

## 🎨 How to Switch Between the 12 Style Combinations

The website comes with 12 pre-configured style combinations. Here's how to switch between them:

### Step-by-Step Instructions

1. **Open `styles.css` in a text editor**
   - Use any text editor (Notepad, VS Code, Sublime Text, etc.)

2. **Find the "ACTIVE STYLE CONFIGURATION" section**
   - It's near the top of the file, after the introductory comments
   - Look for the large comment block explaining the 12 combinations

3. **Comment out the current active style**
   - Find the active `:root { ... }` block (the one NOT surrounded by `/* */`)
   - Add `/*` before `:root` and `*/` after the closing `}`
   - Example:
     ```css
     /* COMBINATION 1: Dark Charcoal + White Frames (DEFAULT) */
     /*
     :root {
         --bg-color: #242424;
         --frame-border: 8px solid #ffffff;
         --frame-bg: transparent;
         --frame-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
     }
     */
     ```

4. **Uncomment your desired style**
   - Find the combination you want to use
   - Remove the `/*` and `*/` around that `:root { ... }` block
   - Example for Metallic Gold:
     ```css
     /* COMBINATION 3: Dark Charcoal + Metallic Gold Frames */
     :root {
         --bg-color: #242424;
         --frame-border: 2px solid #d4af37;
         --frame-bg: linear-gradient(135deg, #b8860b 0%, #ffd700 25%, #daa520 50%, #ffd700 75%, #b8860b 100%);
         --frame-shadow: 
             0 4px 15px rgba(0, 0, 0, 0.4),
             inset 0 1px 3px rgba(255, 235, 145, 0.8),
             inset 0 -1px 3px rgba(139, 90, 0, 0.4);
     }
     ```

5. **Save the file**
   - Press `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac)

6. **Refresh your browser**
   - Press `F5` or `Ctrl+R` (Windows/Linux) or `Cmd+R` (Mac)
   - You should see the new style instantly!

### Available Combinations

**Dark Charcoal Background (`#242424`):**
1. Classic White Frames (DEFAULT)
2. Metallic Silver Frames
3. Metallic Gold Frames
4. Metallic Bronze Frames

**Deep Navy Background (`#1e2936`):**
5. Classic White Frames
6. Metallic Silver Frames
7. Metallic Gold Frames
8. Metallic Bronze Frames

**Warm Dark Brown Background (`#2a2520`):**
9. Classic White Frames
10. Metallic Silver Frames
11. Metallic Gold Frames
12. Metallic Bronze Frames

### Important Notes

- Only ONE `:root` block should be uncommented at a time
- All other combinations must be commented out (wrapped in `/* */`)
- The metallic frames use CSS gradients and shadows to create realistic effects

## 📸 How to Add Your Own Images

Replace the placeholder images with your actual photography:

### Method 1: Local Images

1. **Create an images folder**
   ```
   macro-gallery/
   ├── images/
   │   ├── photo1.jpg
   │   ├── photo2.jpg
   │   ├── ...
   │   └── photo8.jpg
   ├── index.html
   ├── styles.css
   └── README.md
   ```

2. **Update image sources in `index.html`**
   - Find each `<img>` tag
   - Replace the `src` attribute:
     ```html
     <!-- Before -->
     <img src="https://placehold.co/400x400/555/fff?text=Photo+1" alt="Photography 1">
     
     <!-- After -->
     <img src="images/photo1.jpg" alt="Photography 1">
     ```

3. **Update all 8 images** following the same pattern

### Method 2: External URLs

If your images are hosted online (Imgur, Cloudinary, etc.):

```html
<img src="https://your-image-host.com/photo1.jpg" alt="Photography 1">
```

### Image Recommendations

- **Format**: JPEG for photographs
- **Size**: 800-1200px square works well
- **Aspect ratio**: Square (1:1) looks best with the current layout
- **Optimization**: Compress images to 200-500KB for faster loading
- **Naming**: Use descriptive names like `sunset-beach.jpg`

## ✏️ How to Customize Photo Titles

Update the overlay titles that appear on hover:

1. **Open `index.html`**

2. **Find the photo titles**
   - Look for `<h3 class="photo-title">` elements
   - There's one inside each gallery item

3. **Replace placeholder text**
   ```html
   <!-- Before -->
   <h3 class="photo-title">Photo Title 1</h3>
   
   <!-- After -->
   <h3 class="photo-title">Golden Hour at the Beach</h3>
   ```

4. **Update all 8 titles** with your actual photo descriptions

## 🌐 How to Set Up GitHub Pages

Host your portfolio website for free on GitHub:

### Step 1: Create a GitHub Account
- Go to [github.com](https://github.com) and sign up (if you don't have an account)

### Step 2: Create a New Repository
1. Click the "+" icon in the top-right → "New repository"
2. Name it `photography-portfolio` (or any name you prefer)
3. Make it **Public**
4. Click "Create repository"

### Step 3: Upload Your Files
1. On your new repository page, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `README.md`
   - Your `images` folder (if using local images)
3. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to your repository Settings (gear icon)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
4. Click "Save"

### Step 5: Access Your Live Site
- After 1-2 minutes, your site will be live at:
  ```
  https://yourusername.github.io/photography-portfolio/
  ```
- The exact URL will be shown in the GitHub Pages settings

### Step 6: Update Your Site
- Simply edit files directly on GitHub, or
- Upload new files to update your portfolio
- Changes go live within a few minutes

## 🎨 Customization Tips

### Change Header Text
In `index.html`, find:
```html
<h1>dan bauman | photography</h1>
```
Replace with your name and style.

### Adjust Gallery Grid
In `styles.css`, find `.gallery` and modify:
```css
.gallery {
    grid-template-columns: repeat(4, 1fr); /* Change 4 to your desired columns */
    gap: 2rem; /* Adjust spacing */
}
```

### Add More Images
1. Copy an existing `.gallery-item` div in `index.html`
2. Update the image source and title
3. The grid will automatically adjust

### Customize Colors
Create your own color combination:
1. In `styles.css`, find any `:root` block
2. Modify these variables:
   - `--bg-color`: Background color
   - `--frame-border`: Frame border style
   - `--frame-bg`: Frame gradient (or `transparent`)
   - `--frame-shadow`: Shadow effects

### Adjust Hover Effects
In `styles.css`, find `.gallery-item:hover`:
```css
.gallery-item:hover {
    transform: translateY(-8px) scale(1.02); /* Adjust lift and scale */
}

.gallery-item:hover img {
    transform: scale(1.1); /* Adjust zoom level */
}
```

## 📱 Browser Compatibility

This website works on:
- ✅ Chrome, Edge, Safari, Firefox (latest versions)
- ✅ Mobile browsers (iOS Safari, Chrome Android)
- ✅ Tablets and desktop computers

## 🛠️ Technical Details

- **Pure HTML/CSS/Vanilla JavaScript** - No frameworks required
- **CSS Grid** for responsive layout
- **CSS Custom Properties** (variables) for easy theme switching
- **CSS Gradients & Shadows** for metallic frame effects
- **Mobile-first responsive design**

## 📝 File Structure

```
macro-gallery/
├── index.html          # Main HTML structure
├── styles.css          # All styles and 12 combinations
├── README.md           # This file
└── images/             # Your photos (create this folder)
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

## 🆘 Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure image files are in the right folder
- Check file extensions match (`.jpg` vs `.jpeg`)

**Styles not changing?**
- Make sure you saved `styles.css`
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Check only ONE `:root` block is uncommented

**GitHub Pages not working?**
- Wait 5-10 minutes for initial deployment
- Check repository is Public (not Private)
- Ensure `index.html` is in the root folder

## 📄 License

This portfolio template is free to use for personal and commercial projects.

## 🙏 Credits

Created for Dan Bauman's photography portfolio.

---

**Need help?** Open an issue on GitHub or check the troubleshooting section above.

**Enjoy your portfolio! 📸**
