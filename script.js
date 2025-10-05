// Typing Effect
const text = "Your Fitness, Your Fight!";
let index = 0;
const heroText = document.getElementById("hero-text");

function typeEffect() {
  if (index < text.length) {
    heroText.innerHTML = text.slice(0, index + 1);
    index++;
    setTimeout(typeEffect, 100); // speed adjust (100 = 0.1s per letter)
  }
}
typeEffect();

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".main-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Button Hover Effect (glow)
const btn = document.querySelector(".cta-button");
btn.addEventListener("mouseover", () => {
  btn.style.boxShadow = "0 0 20px yellow";
});
btn.addEventListener("mouseout", () => {
  btn.style.boxShadow = "none";
});

