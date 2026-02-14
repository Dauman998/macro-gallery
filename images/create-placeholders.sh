#!/bin/bash

# Create SVG placeholder images for the portfolio

# Featured images (16:9 aspect ratio, 1600x900)
for i in 1 2 3; do
  cat > "featured${i}.jpg" << EOF
<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(50,50,60);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(30,30,40);stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#grad${i})"/>
  <text x="50%" y="50%" font-family="Arial" font-size="60" fill="#cccccc" text-anchor="middle" dy=".3em">
    Featured Image ${i}
  </text>
  <text x="50%" y="55%" font-family="Arial" font-size="30" fill="#999999" text-anchor="middle" dy=".3em">
    Macro Photography Placeholder
  </text>
</svg>
EOF
done

# Portfolio images (square, 800x800)
for i in 1 2 3 4 5 6 7 8; do
  cat > "macro${i}.jpg" << EOF
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradm${i}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(45,45,55);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(25,25,35);stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#gradm${i})"/>
  <text x="50%" y="50%" font-family="Arial" font-size="50" fill="#cccccc" text-anchor="middle" dy=".3em">
    Macro ${i}
  </text>
  <text x="50%" y="55%" font-family="Arial" font-size="25" fill="#999999" text-anchor="middle" dy=".3em">
    Portfolio Image
  </text>
</svg>
EOF
done

# Profile image (2:3 aspect ratio, 600x900)
cat > "profile-full.jpg" << EOF
<svg width="600" height="900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(40,40,50);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(20,20,30);stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="900" fill="url(#gradp)"/>
  <text x="50%" y="50%" font-family="Arial" font-size="40" fill="#cccccc" text-anchor="middle" dy=".3em">
    Profile Photo
  </text>
  <text x="50%" y="55%" font-family="Arial" font-size="22" fill="#999999" text-anchor="middle" dy=".3em">
    Full Body Portrait
  </text>
</svg>
EOF

echo "Placeholder images created successfully"
