# Photography Portfolio Website - Requirements Document

## Project Overview
A sophisticated, professional 4-page photography portfolio website for macro photographer Dan Bauman. The site features a minimalist design with elegant transitions and interactive elements.

## Technical Stack
- **HTML5**: Semantic, accessible markup
- **CSS3**: Modern styling with CSS custom properties for theme switching
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **Font**: DM Serif Text Regular (Google Fonts)

## Page Structure

### 1. Home Page (index.html)
**Purpose**: First impression and featured work showcase

**Elements**:
- Header with site title and hamburger menu
- Featured image area with automatic crossfade slideshow
- Minimalist design with focus on imagery

**Features**:
- 3 featured images with smooth crossfade transition (5-second intervals)
- No carousel navigation (automatic cycling only)
- Responsive layout adapting to all screen sizes

### 2. Portfolio Page (portfolio.html)
**Purpose**: Display macro photography collection

**Elements**:
- Header with site title and hamburger menu
- Introduction text area (3-4 sentences about the work)
- 8 images in 4-4 grid layout (2 rows of 4 images)
- Back-to-top button (right side)

**Features**:
- Lightbox functionality for all images
- Image titles and descriptions in lightbox
- Images preserve aspect ratios (not forced to square)
- Hover effects on images
- Smooth scroll-to-top functionality

### 3. About Page (about.html)
**Purpose**: Photographer biography and background

**Elements**:
- Header with site title and hamburger menu
- Full-body portrait image (not headshot)
- Biography text (4 paragraphs)
- Two-column layout (image | text)

**Features**:
- Sticky image positioning on scroll
- Professional, readable text layout
- Responsive design collapsing to single column on mobile

### 4. Contact Page (contact.html)
**Purpose**: Contact form and contact information

**Elements**:
- Header with site title and hamburger menu
- Contact form with Name, Email, and Message fields
- Contact information with icons (email, phone, location)
- Form submission button

**Features**:
- Fully functional and visible form fields
- Proper label/input associations
- Icon sizing and positioning
- Form validation (HTML5)
- Professional styling matching site aesthetic

## Design Specifications

### Typography
- **Font Family**: DM Serif Text Regular
- **Header Name**: 26px ("dan bauman")
- **Header Tagline**: 18px ("photography")
- **Body Text**: 16-18px
- **Headings**: 22-32px

### Header Design
- Fixed position with auto-hide behavior
- Format: "dan bauman | photography" with vertical line separator
- Hides on scroll down, reappears when:
  - Scrolling stops
  - Scrolling up

### Navigation
- Hamburger menu icon (top right of header)
- Slide-in navigation panel from right
- Links: Home, Portfolio, About, Contact
- Click outside or on link closes menu
- Smooth transitions

### Color Schemes
12 pre-configured style combinations using CSS custom properties:

#### Background Options (3):
1. **Dark Charcoal**: `#2b2b2b` with accent `#1a1a1a` (DEFAULT)
2. **Deep Navy**: `#1a2332` with accent `#0f1823`
3. **Warm Brown**: `#3d2f2f` with accent `#2a1f1f`

#### Frame Styles (4):
1. **White Matte**: `#f5f5f5` (DEFAULT)
2. **Metallic Silver**: `#c0c0c0`
3. **Gold**: `#d4af37`
4. **Bronze**: `#cd7f32`

**Total Combinations**: 12 (3 backgrounds × 4 frames)

**Switching Method**: Comment/uncomment CSS custom property values in `:root`

### Spacing & Layout
- Maximum content width: 1400px
- Grid gaps: 2rem (desktop), 1.5rem (tablet), 1rem (mobile)
- Padding: 2rem (desktop), 1rem (mobile)
- Header padding: 1.5rem vertical, 2rem horizontal

## Interactive Features

### 1. Lightbox (lightbox.js)
**Trigger**: Click on any image with `.lightbox-trigger` class

**Functionality**:
- Opens image at actual aspect ratio (not forced to square)
- Displays image title (from `data-title` attribute)
- Displays image description (from `data-description` attribute)
- Smooth fade-in animation (0.4s)
- Scale-up effect on open

**Controls**:
- Click outside image to close
- Click close button (×) to close
- Press ESC key to close
- Prevents body scroll when open

### 2. Scroll Effects (scroll-effects.js)
**Header Auto-Hide**:
- Hides header when scrolling down past 100px
- Shows header when scrolling up
- Shows header when scrolling stops (150ms delay)
- Smooth slide transition (0.3s)

**Back-to-Top Button**:
- Appears when scrolled down 300px
- Fixed position on right side
- Smooth scroll to top on click
- Fade-in/fade-out animation

### 3. Slideshow (slideshow.js)
**Functionality**:
- Automatic crossfade between 3+ featured images
- 5-second interval between transitions
- Smooth opacity transition (1.5s)
- Continuous loop
- No manual controls

### 4. Navigation Menu (navigation.js)
**Functionality**:
- Hamburger icon toggles menu
- Menu slides in from right
- Click on link closes menu
- Click outside menu closes it
- Active page highlighted
- Smooth transitions (0.3s)

## Responsive Breakpoints

### Desktop (> 1200px)
- 4-column portfolio grid
- Full header title with separator
- All features enabled

### Tablet (900px - 1200px)
- 3-column portfolio grid
- Smaller header font sizes
- About page switches to single column

### Mobile (< 600px)
- 1-column portfolio grid
- Stacked header title (no separator)
- Reduced padding
- Smaller buttons
- Single column layouts

## File Structure
```
macro-gallery/
├── index.html
├── portfolio.html
├── about.html
├── contact.html
├── styles.css
├── navigation.js
├── slideshow.js
├── scroll-effects.js
├── lightbox.js
├── REQUIREMENTS.md
└── images/
    ├── featured1.jpg
    ├── featured2.jpg
    ├── featured3.jpg
    ├── macro1.jpg
    ├── macro2.jpg
    ├── macro3.jpg
    ├── macro4.jpg
    ├── macro5.jpg
    ├── macro6.jpg
    ├── macro7.jpg
    ├── macro8.jpg
    └── profile-full.jpg
```

## Accessibility Requirements
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text on all images
- Proper heading hierarchy
- Color contrast meeting WCAG AA standards

## Performance Requirements
- No external JavaScript dependencies
- Minimal CSS (single stylesheet)
- Optimized images (placeholder paths provided)
- Fast page load times
- Smooth 60fps animations

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- ES6 JavaScript features

## Future Enhancements (Not in Current Scope)
- Image lazy loading
- Progressive image loading
- Analytics integration
- Contact form backend
- Gallery categorization
- Image comments/likes
- Social media integration
- Blog section

## Success Criteria
✅ All 4 pages have consistent header with hamburger menu  
✅ Header hides on scroll down, reappears on scroll stop  
✅ Home page has elegant crossfade between featured images  
✅ Portfolio has text area, working lightbox, and back-to-top button  
✅ About page has full-body image placeholder and bio text  
✅ Contact page has fully functional, visible form  
✅ 12 style combinations clearly documented in CSS  
✅ All code is clean, commented, and professional  
✅ Site looks polished and sophisticated  
✅ Fully responsive on all screen sizes  
✅ All interactive elements work smoothly  

## Development Notes
- Use CSS custom properties for easy theme switching
- Keep JavaScript vanilla (no frameworks)
- Comment code clearly for future maintenance
- Use semantic class names
- Follow BEM-like naming conventions where appropriate
- Test on multiple devices and screen sizes
- Validate HTML and CSS
- Check accessibility with screen readers

## Maintenance
To change the color scheme:
1. Open `styles.css`
2. Find the `:root` section
3. Comment out current background and frame color
4. Uncomment desired combination
5. Save and refresh

## License
All rights reserved. Photography portfolio for Dan Bauman.
