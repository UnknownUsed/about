// Random pulsing lights
function createPulse() {
  const pulse = document.createElement("div");
  pulse.className = "pulse";

  const size = Math.random() * 300 + 200;
  pulse.style.width = `${size}px`;
  pulse.style.height = `${size}px`;

  pulse.style.left = `${Math.random() * window.innerWidth}px`;
  pulse.style.top = `${Math.random() * window.innerHeight}px`;

  pulse.style.background = Math.random() > 0.5 ? "lime" : "blue";

  document.getElementById("background").appendChild(pulse);

  setTimeout(() => pulse.remove(), 8000); // cleanup
}
setInterval(createPulse, 2000);

// Cursor trail
document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  document.body.appendChild(trail);

  setTimeout(() => trail.remove(), 600);
});
