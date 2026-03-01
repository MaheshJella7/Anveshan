const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];
for(let i=0;i<150;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.5,
s:Math.random()*0.7
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

window.addEventListener("resize",()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});

window.addEventListener("load",()=>{
document.body.classList.add("loaded");
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},1500);
});

const eventDate=new Date("March 15, 2026 00:00:00").getTime();
setInterval(()=>{
const now=new Date().getTime();
const distance=eventDate-now;
const d=Math.floor(distance/(1000*60*60*24));
const h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const m=Math.floor((distance%(1000*60*60))/(1000*60));
document.getElementById("countdown").innerHTML=`${d}D ${h}H ${m}M`;
},1000);

document.addEventListener("mousemove",e=>{
const dot=document.createElement("div");
dot.className="trail";
dot.style.left=e.pageX+"px";
dot.style.top=e.pageY+"px";
document.body.appendChild(dot);
setTimeout(()=>dot.remove(),300);
});
