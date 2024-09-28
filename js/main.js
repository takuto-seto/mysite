const typingText = document.querySelector('.MainVisual');
const text = "My Portfolio Site";
let index = 1;

setTimeout(typeText, 1000);
function typeText() {
    typingText.textContent = text.slice(0, index);
    if (index < text.length) {
      index++;
      const randomInterval = Math.floor(Math.random() * 350) + 50;
      setTimeout(typeText, randomInterval);
    } else {
      setTimeout(eraseText, 1500);
    }
  }