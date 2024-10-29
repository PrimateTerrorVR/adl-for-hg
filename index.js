// Create main container and append to body
const container = document.createElement('div');
document.body.appendChild(container);

// Set up basic styles for container
container.style.position = 'relative';
container.style.width = '100vw';
container.style.height = '100vh';
container.style.overflow = 'hidden';
container.style.backgroundColor = '#1e1e1e';
container.style.color = '#ffffff';
container.style.fontFamily = 'Arial, sans-serif';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

// Title
const title = document.createElement('h1');
title.innerText = "Why You Should Vote for ADL for Hidden Gem";
title.style.color = '#4caf50';
title.style.marginBottom = '10px';
container.appendChild(title);

// Description
const description = document.createElement('p');
description.innerText = "ADL consistently gives back to the community, supports growth, and helps others shine.";
description.style.maxWidth = '600px';
description.style.textAlign = 'center';
description.style.marginBottom = '20px';
container.appendChild(description);

// Create Vote Button
const voteButton = document.createElement('button');
voteButton.innerText = "Vote Now";
voteButton.style.padding = '10px 20px';
voteButton.style.backgroundColor = '#4caf50';
voteButton.style.border = 'none';
voteButton.style.color = '#ffffff';
voteButton.style.cursor = 'pointer';
voteButton.style.fontSize = '18px';
voteButton.style.borderRadius = '5px';
voteButton.style.transition = 'background-color 0.3s';
voteButton.onmouseover = () => (voteButton.style.backgroundColor = '#388e3c');
voteButton.onmouseout = () => (voteButton.style.backgroundColor = '#4caf50');
voteButton.onclick = () => window.open('https://x.com/StreamerAwards/status/1850976469083963497', '_blank');
container.appendChild(voteButton);

// Falling Particles Effect
function createParticle() {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.top = '-10px';
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.width = '5px';
  particle.style.height = '5px';
  particle.style.backgroundColor = '#ffffff';
  particle.style.borderRadius = '50%';
  particle.style.opacity = Math.random();
  particle.style.pointerEvents = 'none';

  // Random falling speed and horizontal drift
  const fallSpeed = Math.random() * 3 + 1;
  const drift = Math.random() * 2 - 1;

  container.appendChild(particle);

  // Falling animation
  const fallInterval = setInterval(() => {
    const top = parseFloat(particle.style.top);
    const left = parseFloat(particle.style.left);
    particle.style.top = top + fallSpeed + 'px';
    particle.style.left = left + drift + 'px';

    if (top > window.innerHeight) {
      clearInterval(fallInterval);
      container.removeChild(particle);
    }
  }, 16);
}

// Generate particles continuously
setInterval(createParticle, 100);

// Resize container on window resize
window.onresize = () => {
  container.style.width = '100vw';
  container.style.height = '100vh';
};
