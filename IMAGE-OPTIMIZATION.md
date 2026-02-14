# 📸 Image Optimization Guide

## Quick Answers

**Q: Do you automatically downscale images?**
**A: NO** - You upload exactly what you want. Full control over quality!

**Q: What's the max file size recommended?**
**A: 200-500KB per image** (perfect balance of quality and loading speed)

**Q: Why did Wix sharpening increase file size and lower quality?**
**A: Your site doesn't do that!** No auto-compression, no re-sharpening.

---

## Recommended Lightroom Export Settings

```
Image Format: JPEG
Quality: 80% (or 75-85% range)

Image Sizing:
  ✓ Resize to Fit: Long Edge
  ✓ 2000 pixels
  ✓ Resolution: 72 ppi

Output Sharpening:
  ✓ Sharpen For: Screen
  ✓ Amount: Standard

Metadata: None (or Copyright Only)
Color Space: sRGB
```

**Result:** 200-500KB per image, perfect web quality

---

## Why This is BETTER Than Wix

### Wix Workflow (Bad):
1. Export from Lightroom
2. Upload to Wix
3. **Wix auto-compresses** → Quality loss ❌
4. **Wix requires sharpening** → Artifacts ❌
5. **File size increases** → Bloat ❌
6. **Quality degrades** → Double compression ❌

### Your Workflow (Good):
1. Export from Lightroom with proper settings
2. Upload to your website
3. **Done!** → No re-compression ✅
4. **Perfect quality** → Maintains your vision ✅

---

## File Size Guidelines

### Portfolio Gallery Images:
- **Target:** 200-500KB each
- **Why:** 8 images × 400KB = 3.2MB total (fast loading)

### Lightbox (Enlarged) Images:
- **Can be larger:** 500KB-1MB
- **Higher quality for viewing**
- **Optional:** Use same files as gallery

### Total Page Weight:
- **Keep under 5MB total**
- Ensures fast loading on mobile
- Good user experience

---

## Step-by-Step Workflow

### 1. Select Photos in Lightroom
- Pick your 8 best images

### 2. Export with Settings Above
- File → Export
- Use JPEG 80%, 2000px long edge
- Sharpen for Screen, Standard amount

### 3. Check File Sizes
- Finder → Get Info (Cmd+I)
- Should be 200-500KB each
- If too large: re-export at 75%
- If too small: can use 85%

### 4. Upload to Website
- Add to `images` folder
- Update HTML references
- No further optimization needed!

### 5. Test
- View on website
- Check loading speed
- Quality should be perfect

---

## Quality Settings Explained

### JPEG Quality Scale:
- **100%** = 2-3MB (too large, overkill)
- **90%** = 800KB-1.2MB (large, minimal benefit)
- **80-85%** = 300-600KB ⭐ **PERFECT BALANCE**
- **75%** = 200-400KB (good, slight quality loss)
- **60%** = 150-250KB (visible artifacts, avoid)

**Sweet Spot: 75-85% quality**

---

## Pixel Size Recommendations

### For Web Display:
- **2000px long edge** = Perfect for most screens ⭐
- **1920×1280** = Standard HD resolution
- **2560×1440** = High-res option (larger files)

### Why 2000px?
- ✅ Covers 1080p and 1440p displays
- ✅ Looks sharp on Retina screens
- ✅ Small enough for fast loading
- ✅ Good for lightbox zoom

### Don't Need:
- ❌ Original 6000×4000 RAW (way too large)
- ❌ Full-res exports (slow loading, unnecessary)

---

## Sharpening Strategy

### In Lightroom (ONCE):
- **Output Sharpening:** Screen
- **Amount:** Standard
- This is optimized for web viewing ✅

### NOT in Wix (NEVER AGAIN):
- No need to sharpen after upload ✅
- Your site displays images as-is ✅
- No quality degradation ✅
- No file size increase ✅

### Advantage:
- Sharpen once, properly
- No double-sharpening artifacts
- Maintains quality exactly as you want

---

## Metadata Handling

### Include:
- Copyright notice (optional)
- Your name (optional)

### Remove:
- Camera settings (privacy)
- Location data (security)
- Edit history (file size)
- Keywords/ratings (unnecessary)

### Why Remove?
- **Smaller file sizes** (5-15% reduction)
- **Privacy protection**
- **Faster loading**

**Lightroom Setting:** Metadata → None (or Copyright Only)

---

## Color Space

### Use sRGB:
- ✅ Web standard
- ✅ Correct colors on all browsers
- ✅ Correct colors on all devices

### Don't Use:
- ❌ Adobe RGB (colors look dull on web)
- ❌ ProPhoto RGB (even worse)

**Lightroom Setting:** Color Space → sRGB

---

## Optional Optimization Tools

### ImageOptim (Mac, Free):
- Drag & drop exported images
- Removes extra metadata
- Lossless compression
- Can save 10-30% more

### Squoosh.app (Web, Free):
- Visual quality comparison
- Fine-tune compression
- Browser-based

### TinyPNG.com (Web, Free):
- Batch compression
- Simple drag & drop

**But honestly: Lightroom export alone is perfect!**

---

## Quick Reference Card

```
Size: 2000px long edge
Quality: 80%
Format: JPEG
Sharpen: Screen, Standard
Color: sRGB
Metadata: None
Target: 200-500KB
```

**Export → Upload → Done!**

---

## Troubleshooting

### "Files too large (>800KB)"
- Reduce quality to 75%
- Or resize to 1800px

### "Files look soft/blurry"
- Increase sharpening to High
- Or increase quality to 85%

### "Sharpening halos visible"
- Reduce sharpening to Low
- Check amount in Lightroom

### "Colors look different"
- Ensure sRGB color space
- Check display calibration

---

## Your Advantage

### Full Control:
- ✅ You decide quality level
- ✅ You decide file size
- ✅ You decide sharpening
- ✅ No platform forcing changes

### Better Quality:
- ✅ One-time compression (Lightroom)
- ✅ No re-compression
- ✅ No forced sharpening
- ✅ Maintains your vision

**This is why custom > Wix!**

---

## Summary

**You asked about Wix sharpening increasing file size and lowering quality.**

**Good news:** Your custom site doesn't do any of that!

- Export from Lightroom with proper settings (once)
- Upload to your website (no re-compression)
- Perfect quality maintained
- No sharpening artifacts
- Smaller file sizes than Wix
- Complete control over your work

**You're the photographer - you decide the quality!**
