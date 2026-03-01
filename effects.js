/* STARFIELD */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0;i<150;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*1.5,
        s:Math.random()*0.7
    });
}

function animateStars(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    stars.forEach(star=>{
        star.y+=star.s;
        if(star.y>canvas.height){
            star.y=0;
            star.x=Math.random()*canvas.width;
        }
        ctx.beginPath();
        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
        ctx.fill();
    });
    requestAnimationFrame(animateStars);
}
animateStars();

/* RESIZE FIX */
window.addEventListener("resize",()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
});

/* LOADER */
window.addEventListener("load",()=>{
    setTimeout(()=>{
        document.getElementById("loader").style.opacity="0";
        document.getElementById("loader").style.transition="0.8s";
        setTimeout(()=>{
            document.getElementById("loader").style.display="none";
        },800);
    },1500);
});

/* HOVER SOUND */
const sound = document.getElementById("hoverSound");
document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("mouseenter",()=>{
        sound.currentTime=0;
        sound.play();
    });
});

/* MAGNETIC EFFECT */
document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("mousemove",(e)=>{
        const rect=btn.getBoundingClientRect();
        const x=e.clientX-rect.left-rect.width/2;
        const y=e.clientY-rect.top-rect.height/2;
        btn.style.transform=`translate(${x*0.08}px,${y*0.08}px)`;
    });
    btn.addEventListener("mouseleave",()=>{
        btn.style.transform="translate(0,0)";
    });
});
