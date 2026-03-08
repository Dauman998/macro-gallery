// Navigation Menu Toggle (robust + no duplicate overlays)
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

function getOrCreateOverlay() {
  let overlay = document.getElementById("menuOverlay");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    overlay.id = "menuOverlay";
    document.body.appendChild(overlay);
  }

  return overlay;
}

function isMenuOpen() {
  return hamburger?.classList.contains("active") && mainNav?.classList.contains("active");
}

function openMenu(overlay) {
  hamburger.classList.add("active");
  mainNav.classList.add("active");
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
}

function closeMenu(overlay) {
  hamburger.classList.remove("active");
  mainNav.classList.remove("active");
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
}

if (hamburger && mainNav) {
  const overlay = getOrCreateOverlay();
  overlay.setAttribute("aria-hidden", "true");

  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isMenuOpen()) closeMenu(overlay);
    else openMenu(overlay);
  });

  // Close menu when clicking overlay
  overlay.addEventListener("click", () => closeMenu(overlay));

  // Close when clicking a link
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu(overlay));
  });

  // Close when clicking outside menu/hamburger
  document.addEventListener("click", (e) => {
    if (!isMenuOpen()) return;

    const clickedInsideNav = mainNav.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);

    if (!clickedInsideNav && !clickedHamburger) closeMenu(overlay);
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen()) closeMenu(overlay);
  });
}
