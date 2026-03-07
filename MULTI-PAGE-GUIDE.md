# 🌐 Multi-Page Website Guide

## 🎉 Your Website Now Has Multiple Pages!

Your portfolio now includes:
- **Home Page** (`index.html`) - Welcome page with hero section
- **Portfolio** (`gallery.html`) - Your photography gallery
- **About** (`about.html`) - Your bio and story
- **Contact** (`contact.html`) - Contact form and info
- **Navigation Menu** - Working on all pages

---

## 📁 File Structure

```
macro-gallery/
├── index.html          ← Home page (main landing page)
├── gallery.html        ← Portfolio/Gallery page
├── about.html          ← About page
├── contact.html        ← Contact page
├── navigation.js       ← Menu functionality
├── styles.css          ← All styling
└── images/             ← Your photos folder (create this)
```

---

## ✏️ How to Edit Each Page

### 🏠 HOME PAGE (index.html)

**1. Change the Hero Title:**
```html
<!-- Find around line 28 -->
<h2 class="hero-title">Capturing Moments,<br>Creating Memories</h2>

<!-- Change to: -->
<h2 class="hero-title">Your New Title<br>Your Subtitle</h2>
```

**2. Change the Hero Subtitle:**
```html
<!-- Find around line 29 -->
<p class="hero-subtitle">Professional photography that tells your story</p>

<!-- Change to: -->
<p class="hero-subtitle">Your new tagline here</p>
```

**3. Change Featured Photos:**
- Find the `featured-grid` section (around line 36)
- Replace the `src` attributes with your image paths
- Same as gallery: `src="images/your-photo.jpg"`

---

### 📸 PORTFOLIO/GALLERY PAGE (gallery.html)

**This is your original gallery!**

**To edit:**
- Change photos: Update `<img src="images/photo.jpg">`
- Change titles: Update `<h3 class="photo-title">Your Title</h3>`
- Same process as before!

---

### 👤 ABOUT PAGE (about.html)

**1. Add Your Photo:**
```html
<!-- Find around line 28 -->
<img src="data:image/svg+xml,..." alt="Dan Bauman">

<!-- Change to: -->
<img src="images/your-headshot.jpg" alt="Your Name">
```

**2. Change Your Name:**
```html
<!-- Find around line 32 -->
<h2>About Dan Bauman</h2>

<!-- Change to: -->
<h2>About Your Name</h2>
```

**3. Update Your Bio:**
- Find the paragraphs in the `about-content` section
- Replace ALL the placeholder text with your story:
  - How long you've been photographing
  - What you specialize in
  - When you started
  - Your hobbies/interests
  - Your photography philosophy

**Example:**
```html
<!-- Before -->
<p>
    With over [X years] of experience...
</p>

<!-- After -->
<p>
    With over 10 years of experience in photography, I specialize in 
    portrait and landscape photography. My approach combines...
</p>
```

**4. Update Your Expertise:**
```html
<!-- Find around line 59 -->
<ul class="expertise-list">
    <li>Professional-grade camera equipment</li>
    <li>Advanced lighting techniques</li>
    <li>[Add your specialties]</li>
</ul>

<!-- Change to your actual skills! -->
```

---

### 📧 CONTACT PAGE (contact.html)

**1. Update Your Email:**
```html
<!-- Find around line 36 -->
<p><a href="mailto:your.email@example.com">your.email@example.com</a></p>

<!-- Change to: -->
<p><a href="mailto:dan@danbaumanphotography.com">dan@danbaumanphotography.com</a></p>
```

**2. Update Your Phone:**
```html
<!-- Find around line 41 -->
<p><a href="tel:+1234567890">(123) 456-7890</a></p>

<!-- Change to your real phone: -->
<p><a href="tel:+15551234567">(555) 123-4567</a></p>
```

**3. Update Your Location:**
```html
<!-- Find around line 46 -->
<p>Your City, State</p>

<!-- Change to: -->
<p>San Francisco, CA</p>
```

**4. Update Social Media Links:**
```html
<!-- Find around line 51 -->
<a href="https://instagram.com/yourhandle" target="_blank">Instagram</a>

<!-- Change to your actual links: -->
<a href="https://instagram.com/danbaumanphoto" target="_blank">Instagram</a>
```

**5. About the Contact Form:**

⚠️ **Important:** The contact form currently shows an alert but doesn't actually send email.

**To make it work, you need to:**

**Option 1: Use Formspree (Easiest - Free)**
1. Go to https://formspree.io
2. Sign up (free account)
3. Create a new form
4. Copy your form endpoint
5. In `contact.html`, find the `<form>` tag (around line 58)
6. Change it to:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
7. Remove the JavaScript at the bottom (lines 95-101)

**Option 2: Use EmailJS (Free)**
1. Go to https://www.emailjs.com
2. Sign up and create an email service
3. Follow their setup guide
4. Update the JavaScript to use their API

**Option 3: Use Netlify Forms (If hosting on Netlify)**
1. Add `netlify` attribute to form:
```html
<form class="contact-form" name="contact" netlify>
```
2. That's it! Netlify handles the rest

---

## 🧭 Navigation Menu

### How It Works:

**Desktop (wider than 768px):**
- Menu shows horizontally at top
- Always visible
- Click links to navigate

**Mobile (768px or smaller):**
- Hamburger menu (☰) in top-right
- Click to open menu
- Click link or outside to close

### To Edit Navigation Links:

```html
<!-- Find in the <nav> section of any page -->
<li><a href="index.html">Home</a></li>
<li><a href="gallery.html">Portfolio</a></li>
<li><a href="about.html">About</a></li>
<li><a href="contact.html">Contact</a></li>
```

**To add a new page:**
1. Create new HTML file (e.g., `services.html`)
2. Copy structure from any existing page
3. Add link to navigation in ALL pages:
```html
<li><a href="services.html">Services</a></li>
```

---

## 🎨 Changing Your Name (Site-Wide)

Your name appears in the header on **all pages**. To change it everywhere:

**1. In index.html (line 12):**
```html
<h1><a href="index.html" class="logo-link">dan bauman | photography</a></h1>
```

**2. In gallery.html (line 12):**
```html
<h1><a href="index.html" class="logo-link">dan bauman | photography</a></h1>
```

**3. In about.html (line 12):**
```html
<h1><a href="index.html" class="logo-link">dan bauman | photography</a></h1>
```

**4. In contact.html (line 12):**
```html
<h1><a href="index.html" class="logo-link">dan bauman | photography</a></h1>
```

**Change all 4 instances to your name!**

**Pro Tip:** Use Cmd+F to "Find and Replace All" in VS Code:
1. Open VS Code
2. Press Cmd+Shift+H (Find and Replace)
3. Find: `dan bauman | photography`
4. Replace: `your name | photography`
5. Click "Replace All in All Files"

---

## 📄 Page Titles (Browser Tabs)

Each page has a title that shows in the browser tab:

**index.html:**
```html
<title>Dan Bauman | Photography</title>
```

**gallery.html:**
```html
<title>Portfolio | Dan Bauman Photography</title>
```

**about.html:**
```html
<title>About | Dan Bauman Photography</title>
```

**contact.html:**
```html
<title>Contact | Dan Bauman Photography</title>
```

**Change these to match your name!**

---

## 🖼️ Adding Images

### For ALL Pages:

1. **Create images folder** (if you haven't):
   ```
   macro-gallery/
   └── images/
       ├── photo1.jpg
       ├── photo2.jpg
       ├── headshot.jpg
       └── featured1.jpg
   ```

2. **Replace image sources:**
   ```html
   <!-- Before -->
   <img src="data:image/svg+xml,..." alt="...">
   
   <!-- After -->
   <img src="images/your-photo.jpg" alt="Description">
   ```

### Image Recommendations:

**Home Page Featured Images:**
- Size: 600x400px (landscape)
- Format: JPG
- 3 images total

**About Page Photo:**
- Size: 400x500px (portrait)
- Your headshot or studio photo
- Professional look

**Gallery Page:**
- Size: 800-1200px (square)
- Your portfolio work
- 8 images (or more if you add them)

---

## 🚀 Deploying Your Multi-Page Site

### GitHub Pages:

1. **Upload ALL files:**
   - index.html
   - gallery.html
   - about.html
   - contact.html
   - navigation.js
   - styles.css
   - images/ folder (with your photos)

2. **Enable GitHub Pages** (same as before)

3. **Your URLs will be:**
   - Home: `https://Dauman998.github.io/macro-gallery/`
   - Portfolio: `https://Dauman998.github.io/macro-gallery/gallery.html`
   - About: `https://Dauman998.github.io/macro-gallery/about.html`
   - Contact: `https://Dauman998.github.io/macro-gallery/contact.html`

### With Your Custom Domain:

After connecting `danbaumanphotography.com`:
- Home: `https://danbaumanphotography.com/`
- Portfolio: `https://danbaumanphotography.com/gallery.html`
- About: `https://danbaumanphotography.com/about.html`
- Contact: `https://danbaumanphotography.com/contact.html`

---

## ✅ Quick Edit Checklist

Use this to track your customization:

### Site-Wide:
- [ ] Change "dan bauman" to your name (all 4 pages)
- [ ] Update page titles (browser tabs)
- [ ] Add your logo/branding (optional)

### Home Page:
- [ ] Update hero title
- [ ] Update hero subtitle
- [ ] Add 3 featured photos
- [ ] Test "View Portfolio" button
- [ ] Test "Get in Touch" button

### Gallery Page:
- [ ] Add your 8+ portfolio photos
- [ ] Update all photo titles
- [ ] Test navigation menu

### About Page:
- [ ] Add your headshot photo
- [ ] Write your bio (all paragraphs)
- [ ] Update years of experience
- [ ] Add your specialties
- [ ] List your expertise
- [ ] Update philosophy section

### Contact Page:
- [ ] Add your real email
- [ ] Add your phone number
- [ ] Add your location
- [ ] Update social media links
- [ ] Set up contact form (Formspree/EmailJS)

---

## 🔍 Testing Your Site

**Before deploying, test everything:**

1. **Open each page locally:**
   - Double-click each HTML file
   - Check it looks good

2. **Test navigation:**
   - Click each menu link
   - Make sure pages load
   - Test on mobile (browser dev tools)

3. **Test hamburger menu:**
   - Resize browser to mobile size
   - Click hamburger icon
   - Menu should open/close

4. **Test all links:**
   - Email links
   - Phone links
   - Social media links
   - Button links

5. **Test images:**
   - All images load?
   - No broken placeholders?

---

## 🎨 Customization Ideas

### Want to add more pages?

**Easy additions:**
- Services page (pricing, packages)
- Blog page (photography tips)
- Testimonials page (client reviews)
- FAQ page (common questions)

**Just copy any existing page and modify the content!**

### Want to change colors?

See the original `styles.css` guide - the 12 theme combinations still work for all pages!

---

## 🆘 Troubleshooting

### "Navigation menu doesn't work"
- Make sure `navigation.js` is uploaded
- Check that each page has `<script src="navigation.js"></script>`

### "Links go to wrong pages"
- Check spelling: `gallery.html` not `Gallery.html`
- Make sure files are in same folder

### "Page looks broken"
- Make sure `styles.css` is uploaded
- Check that `<link rel="stylesheet" href="styles.css">` is in `<head>`

### "Contact form doesn't send"
- Normal! You need to set up Formspree or EmailJS
- See "Contact Page" section above

---

## 💡 Pro Tips

**1. Edit in order:**
- Start with site-wide changes (your name)
- Then do Home page
- Then About
- Then Contact
- Finally Gallery

**2. Save often:**
- Edit → Cmd+S → Preview
- Get in this rhythm!

**3. Preview before deploying:**
- Test all pages locally first
- Fix any issues
- Then upload to GitHub

**4. Keep it simple:**
- You don't need to use every feature
- Start basic, add more later
- Focus on great photos!

---

## 📚 Next Steps

1. **Today:** Edit site-wide name and titles
2. **This week:** Customize each page content
3. **Next week:** Add your real photos
4. **Deploy:** Upload to GitHub Pages
5. **Share:** Tell the world!

---

**You now have a complete, professional photography website!** 🎉

Just edit the text, add your photos, and deploy. You've got this! 💪
