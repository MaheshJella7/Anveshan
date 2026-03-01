/* Starfield */
const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];
for(let i=0;i<120;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.5,
s:Math.random()*0.6
});
}

function animate(){
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
requestAnimationFrame(animate);
}
animate();

/* Resize */
window.addEventListener("resize",()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});

/* Loader */
window.addEventListener("load",()=>{
document.body.classList.add("loaded");
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},1200);
});

/* Countdown */
const eventDate=new Date("March 15, 2026 00:00:00").getTime();
setInterval(()=>{
const now=new Date().getTime();
const distance=eventDate-now;
const d=Math.floor(distance/(1000*60*60*24));
const h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const m=Math.floor((distance%(1000*60*60))/(1000*60));
document.getElementById("countdown").innerHTML=`${d}D ${h}H ${m}M`;
},1000);

/* Scroll Reveal */
const reveals=document.querySelectorAll(".reveal");
function revealOnScroll(){
reveals.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("active");
}
});
}
window.addEventListener("scroll",revealOnScroll);

/* Parallax */
document.addEventListener("mousemove",(e)=>{
const x=(e.clientX/window.innerWidth-0.5)*20;
const y=(e.clientY/window.innerHeight-0.5)*20;
document.querySelector(".back").style.transform=`translate(${x}px,${y}px)`;
document.querySelector(".mid").style.transform=`translate(${x*1.5}px,${y*1.5}px)`;
});

/* Mouse Glow */
document.addEventListener("mousemove",e=>{
const dot=document.createElement("div");
dot.className="trail";
dot.style.left=e.pageX+"px";
dot.style.top=e.pageY+"px";
document.body.appendChild(dot);
setTimeout(()=>dot.remove(),250);
});
