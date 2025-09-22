// Multiple messages to cycle through
const messages = [
  "Hi, I’m your personal assistant, here to help you stay organized and focused.",
  "Stay on top of your daily tasks with ease.",
  "Boost your productivity and never miss a deadline.",
  "TaskFlow is here to guide you every step of the way!"
];

const typingText = document.getElementById("typing-text");

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentMessage = messages[messageIndex];

  if (!isDeleting) {
    typingText.textContent = currentMessage.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentMessage.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // pause before deleting
      return;
    }
  } else {
    typingText.textContent = currentMessage.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      messageIndex = (messageIndex + 1) % messages.length; // go to next message
    }
  }

  setTimeout(typeEffect, isDeleting ? 30 : 40); // typing & deleting speed
}

// Start typing effect on load
window.onload = typeEffect;


