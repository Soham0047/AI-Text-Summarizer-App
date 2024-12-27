// Create the background animation
const container = document.createElement('div');
container.className = 'lines-container';
document.getElementById('animated-background').appendChild(container);

// Generate vertical lines
for (let i = 0; i < 50; i++) {
  const line = document.createElement('div');
  line.className = 'line';
  line.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  line.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random speed
  container.appendChild(line);
}
