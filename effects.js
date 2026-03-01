// Initialize Lucide Icons
lucide.createIcons();

// Starfield Generator
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

for(let i=0; i<150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.2
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.speed;
        if(s.y > canvas.height) s.y = 0;
    });
    requestAnimationFrame(drawStars);
}
drawStars();

// 3D Tilt Effect
document.addEventListener("mousemove", (e) => {
    const panels = document.querySelectorAll(".hud-panel");
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    
    panels.forEach(p => {
        p.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
    });
});

// Sound simulation (Console log for fun)
console.log("%c ANVESHAN 2026: Systems Nominal ", "background: #00f0ff; color: #000; font-weight: bold;");
