// Initialize Lucide Icons
lucide.createIcons();

// Optimized Starfield
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Reduced star count for better mobile CPU performance
for(let i=0; i<60; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: Math.random() * 0.4 + 0.1,
        o: Math.random()
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.o})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 0.8, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.s;
        if(star.y > canvas.height) star.y = 0;
    });
    requestAnimationFrame(draw);
}
draw();

// Smooth tap feedback
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('touchstart', function() {
        this.style.opacity = "0.7";
    });
    link.addEventListener('touchend', function() {
        this.style.opacity = "1";
    });
});
