const phrases = [
  "Redes de computadores",
  "Administração de sistemas",
  "Infraestrutura e segurança",
  "Suporte técnico"
];

const typedText = document.getElementById("typed-text");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const current = phrases[phraseIndex];
  typedText.textContent = current.substring(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 85);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeEffect, 1450);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 42);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeEffect, 350);
  }
}
typeEffect();

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

if (window.lucide) {
  lucide.createIcons();
}
