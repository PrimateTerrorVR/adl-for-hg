// Begin by writing the HTML structure
document.write(`
  <div id="container">
    <h1 id="title">Why You Should Vote for ADL for Hidden Gem</h1>
    <p id="description">ADL consistently gives back to the community, supports growth, and helps others shine.</p>
    <button id="voteButton" onclick="window.open('https://x.com/StreamerAwards/status/1850976469083963497', '_blank')">Vote Now</button>
  </div>
  <style>
    /* Container styles */
    #container {
      position: relative;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: #1e1e1e;
      color: #ffffff;
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    /* Title and Description styles */
    #title {
      color: #4caf50;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2em;
    }
    #description {
      max-width: 600px;
      text-align: center;
      margin-bottom: 20px;
      font-size: 1.2em;
    }
    /* Button styles */
    #voteButton {
      padding: 10px 20px;
      background-color: #4caf50;
      border: none;
      color: #ffffff;
      cursor: pointer;
      font-size: 18px;
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    #voteButton:hover {
      background-color: #388e3c;
    }
    /* Particle styles */
    .particle {
      position: absolute;
      top: -10px;
      width: 5px;
      height: 5px;
      background-color: #ffffff;
      border-radius: 50%;
      pointer-events: none;
      opacity: 0.7;
    }
  </style>
`);

// Falling Particles Effect in JavaScript
function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = Math.random() * window.innerWidth + 'px';

  // Random falling speed and horizontal drift
  const fallSpeed = Math.random() * 3 + 1;
  const drift = Math.random() * 2 - 1;

  document.body.appendChild(particle);

  // Falling animation
  const fallInterval = setInterval(() => {
    const top = parseFloat(particle.style.top) || 0;
    const left = parseFloat(particle.style.left);
    particle.style.top = top + fallSpeed + 'px';
    particle.style.left = left + drift + 'px';

    // Remove particle if it falls out of view
    if (top > window.innerHeight) {
      clearInterval(fallInterval);
      document.body.removeChild(particle);
    }
  }, 16);
}

// Generate particles continuously
setInterval(createParticle, 100);

// Resize container to fit the viewport on resize
window.onresize = () => {
  document.getElementById('container').style.width = '100vw';
  document.getElementById('container').style.height = '100vh';
};
