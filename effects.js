/* STARFIELD */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars=[];
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

window.addEventListener("resize",()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
});

/* LOADER */
window.addEventListener("load",()=>{
    document.body.classList.add("loaded");
    setTimeout(()=>{
        document.getElementById("loader").style.display="none";
    },1500);
});

/* COUNTDOWN */
const eventDate = new Date("March 15, 2026 00:00:00").getTime();

setInterval(()=>{
    const now=new Date().getTime();
    const distance=eventDate-now;

    const days=Math.floor(distance/(1000*60*60*24));
    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    document.getElementById("countdown").innerHTML=
        `${days}D ${hours}H ${minutes}M`;
},1000);

/* SCROLL REVEAL */
const reveals=document.querySelectorAll(".reveal");

function revealOnScroll(){
    reveals.forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight-100){
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll",revealOnScroll);

/* PARALLAX */
document.addEventListener("mousemove",(e)=>{
    const x=(e.clientX/window.innerWidth-0.5)*30;
    const y=(e.clientY/window.innerHeight-0.5)*30;

    document.querySelector(".layer-back").style.transform=
        `translate(${x}px,${y}px)`;

    document.querySelector(".layer-mid").style.transform=
        `translate(${x*1.5}px,${y*1.5}px)`;
});

/* PAGE TRANSITION */
document.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",function(e){
        if(this.hostname===window.location.hostname){
            e.preventDefault();
            document.body.style.opacity="0";
            setTimeout(()=>{
                window.location=this.href;
            },600);
        }
    });
});

/* HOVER SOUND */
const sound=document.getElementById("hoverSound");
document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("mouseenter",()=>{
        sound.currentTime=0;
        sound.play();
    });
});

/* MAGNETIC */
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

/* MOUSE TRAIL */
document.addEventListener("mousemove",e=>{
    const dot=document.createElement("div");
    dot.className="trail";
    dot.style.left=e.pageX+"px";
    dot.style.top=e.pageY+"px";
    document.body.appendChild(dot);
    setTimeout(()=>dot.remove(),300);
});
