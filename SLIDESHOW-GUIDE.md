# 📸 How to Add Photos to Your Slideshow

## What You Have Now

Your **home page** now shows a beautiful **full-screen slideshow** that automatically fades between images!

**Features:**
- ✅ One large image fills the entire screen
- ✅ Automatically fades to the next image every 5 seconds
- ✅ 4 images rotate in a loop
- ✅ Clickable dots at bottom to jump to any image
- ✅ Text overlay with your name and tagline
- ✅ Works on phones, tablets, and computers

---

## 🎨 How to Add Your Own Photos

### Step 1: Prepare Your Photos

**Recommended:**
- **Size:** 1920 x 1080 pixels (landscape) or larger
- **Format:** JPG or PNG
- **File size:** Under 500KB each (compress if needed)
- **Number:** 4-6 photos work best (currently set up for 4)

**Tips:**
- Choose your BEST photos
- Mix of subjects/scenes keeps it interesting
- Horizontal (landscape) photos work best
- Make sure photos are bright enough to read white text over them

### Step 2: Put Photos in Folder

1. Open your `macro-gallery` folder
2. Create a new folder called `images` (if you haven't already)
3. Put your photos inside the `images` folder
4. Name them something simple:
   - `slideshow1.jpg`
   - `slideshow2.jpg`
   - `slideshow3.jpg`
   - `slideshow4.jpg`

### Step 3: Edit index.html

1. Open `index.html` in TextEdit
2. Press **Cmd+F** to search
3. Search for: `Slide 1`

You'll find this code:

```html
<!-- Slide 1 -->
<div class="slide fade-slide active">
    <img src="data:image/svg+xml..." alt="Slideshow image 1">
</div>
```

**Change it to:**

```html
<!-- Slide 1 -->
<div class="slide fade-slide active">
    <img src="images/slideshow1.jpg" alt="Beautiful sunset photo">
</div>
```

4. Do the same for Slide 2, 3, and 4:

**Slide 2:**
```html
<!-- Slide 2 -->
<div class="slide fade-slide">
    <img src="images/slideshow2.jpg" alt="Mountain landscape">
</div>
```

**Slide 3:**
```html
<!-- Slide 3 -->
<div class="slide fade-slide">
    <img src="images/slideshow3.jpg" alt="Ocean waves">
</div>
```

**Slide 4:**
```html
<!-- Slide 4 -->
<div class="slide fade-slide">
    <img src="images/slideshow4.jpg" alt="Forest path">
</div>
```

5. **Save** (Cmd+S)
6. **Refresh** browser (Cmd+R)
7. See your photos!

---

## ✏️ Change the Text Overlay

The text that appears over your slideshow can be customized:

### Find This in index.html:

```html
<div class="slideshow-overlay">
    <h2 class="overlay-title">dan bauman photography</h2>
    <p class="overlay-subtitle">Capturing Life's Beautiful Moments</p>
</div>
```

### Change To Your Text:

```html
<div class="slideshow-overlay">
    <h2 class="overlay-title">your name photography</h2>
    <p class="overlay-subtitle">Your personal tagline here</p>
</div>
```

**Examples of taglines:**
- "Moments That Matter"
- "Through My Lens"
- "Photography with Heart"
- "Telling Stories Through Images"
- "Your Special Moments, Preserved"

---

## ⚙️ Customize Slideshow Speed

Want images to change faster or slower?

### Find This in index.html (near the bottom):

```javascript
setTimeout(showSlides, 5000);
```

The number `5000` is milliseconds (5 seconds).

**Change it:**
- `3000` = 3 seconds (faster)
- `7000` = 7 seconds (slower)
- `10000` = 10 seconds (much slower)

**Example:**
```javascript
setTimeout(showSlides, 7000);  // Now changes every 7 seconds
```

---

## ➕ Add More Photos (5th, 6th, etc.)

Want more than 4 photos?

### Step 1: Add Another Slide in HTML

Find the last slide and copy it. Add this BEFORE the closing `</div>`:

```html
<!-- Slide 5 -->
<div class="slide fade-slide">
    <img src="images/slideshow5.jpg" alt="Your 5th photo">
</div>
```

### Step 2: Add Another Dot

Find the dots section:

```html
<div class="slideshow-dots">
    <span class="dot active" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
    <!-- ADD THIS: -->
    <span class="dot" onclick="currentSlide(5)"></span>
</div>
```

That's it! Now you have 5 photos in the slideshow.

---

## 🎭 Hide or Show the Text Overlay

Don't want text over your photos?

### Option 1: Delete the Text (Keep Overlay Hidden)

Find this section and delete it entirely:

```html
<div class="slideshow-overlay">
    <h2 class="overlay-title">dan bauman photography</h2>
    <p class="overlay-subtitle">Capturing Life's Beautiful Moments</p>
</div>
```

### Option 2: Make Text Transparent

Or change the opacity in `styles.css`:

Find:
```css
.slideshow-overlay {
    ...
    opacity: 1;  /* Change this */
}
```

Change to:
```css
.slideshow-overlay {
    ...
    opacity: 0;  /* Now invisible */
}
```

---

## 📍 Hide the Navigation Dots

Don't want the clickable dots?

Find this in index.html:

```html
<div class="slideshow-dots">
    <span class="dot active" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
</div>
```

**Delete the entire section** or just add `style="display: none;"`:

```html
<div class="slideshow-dots" style="display: none;">
    ...
</div>
```

---

## 📐 Adjust Text Position

Want text higher or lower on the image?

In `styles.css`, find:

```css
.slideshow-overlay {
    top: 50%;  /* Middle of screen */
    left: 50%;
    ...
}
```

**Change the top value:**
- `top: 30%;` - Higher up
- `top: 70%;` - Lower down
- `top: 20%;` - Near top
- `top: 80%;` - Near bottom

---

## 🎨 Change Text Color

Want different colored text?

In `styles.css`, find:

```css
.overlay-title {
    color: #ffffff;  /* White */
}

.overlay-subtitle {
    color: #ffffff;  /* White */
}
```

**Change to:**
- `color: #000000;` - Black
- `color: #FFD700;` - Gold
- `color: #FF69B4;` - Hot Pink
- `color: rgba(255, 255, 255, 0.5);` - Semi-transparent white

---

## 🔤 Change Text Size

In `styles.css`, find:

```css
.overlay-title {
    font-size: 4rem;  /* Large */
}

.overlay-subtitle {
    font-size: 1.5rem;  /* Medium */
}
```

**Make it bigger or smaller:**
- `font-size: 3rem;` - Smaller
- `font-size: 5rem;` - Bigger
- `font-size: 2rem;` - Much smaller

---

## 🖼️ Using Portrait (Vertical) Photos

The slideshow works best with landscape (horizontal) photos, but you CAN use portrait photos:

In `styles.css`, find:

```css
.slide img {
    object-fit: cover;  /* Crops to fill screen */
}
```

**Options:**
- `object-fit: cover;` - Fills screen, may crop edges (default)
- `object-fit: contain;` - Shows whole photo, may have black bars
- `object-fit: fill;` - Stretches to fill (can distort)

---

## ✅ Quick Checklist

To add your slideshow photos:

- [ ] Prepare 4 photos (1920x1080, under 500KB each)
- [ ] Create `images` folder
- [ ] Name photos: slideshow1.jpg, slideshow2.jpg, etc.
- [ ] Put photos in `images` folder
- [ ] Open index.html in TextEdit
- [ ] Search for "Slide 1"
- [ ] Change `src="data:image..."` to `src="images/slideshow1.jpg"`
- [ ] Repeat for slides 2, 3, 4
- [ ] Save file (Cmd+S)
- [ ] Refresh browser (Cmd+R)
- [ ] See your beautiful slideshow!

---

## 🎉 You're Done!

Your home page now has a professional, automatic slideshow!

**What you got:**
- Full-screen images
- Smooth fade transitions
- Automatic rotation every 5 seconds
- Optional manual navigation (dots)
- Beautiful text overlay
- Works on all devices

**No monthly fees. No platform lock-in. All yours!**

---

## 🆘 Troubleshooting

**Photos don't appear:**
- Check file names match exactly (case-sensitive!)
- Make sure photos are in `images` folder
- Check folder structure: `macro-gallery/images/slideshow1.jpg`

**Slideshow doesn't fade:**
- Hard refresh: Cmd+Shift+R
- Check if JavaScript is enabled in browser

**Text hard to read:**
- Choose darker photos for background
- Increase text shadow in styles.css
- Change text color to contrast with photos

**Slideshow too fast/slow:**
- Change `setTimeout(showSlides, 5000);` number
- Higher = slower, lower = faster

---

**See MULTI-PAGE-GUIDE.md for editing other pages!**
