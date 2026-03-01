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

for(let i=0; i<80; i++) { // Fewer stars for better mobile performance
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: Math.random() * 0.5
    });
}

function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1, 0, Math.PI*2);
        ctx.fill();
        star.y += star.s;
        if(star.y > canvas.height) star.y = 0;
    });
    requestAnimationFrame(draw);
}
draw();

// Smooth feedback on tap
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if(window.navigator.vibrate) window.navigator.vibrate(10);
    });
});
