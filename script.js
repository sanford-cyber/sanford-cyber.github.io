const messages = [
  'Initializing...',
  'Loading...',
  'Welcome, Hacker!',
];

let index = 0;
const terminal = document.querySelector('.terminal');

function typeMessage() {
  const message = messages[index];
  const p = document.createElement('p');
  terminal.appendChild(p);

  let charIndex = 0;
  function typeChar() {
    if (charIndex < message.length) {
      p.textContent += message.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 100);
    } else {
      index++;
      if (index < messages.length) {
        setTimeout(typeMessage, 500);
      }
    }
  }
  typeChar();
}

typeMessage();
