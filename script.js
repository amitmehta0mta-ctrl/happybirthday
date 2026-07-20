function showWish(){

document.getElementById("wish").innerHTML=
"🎂 May your life be filled with happiness, success, love and endless smiles! Happy Birthday! ❤️🎉";

confetti();

}

function confetti(){

for(let i=0;i<120;i++){

let conf=document.createElement("div");

conf.innerHTML="🎊";

conf.style.position="fixed";
conf.style.left=Math.random()*100+"vw";
conf.style.top="-20px";
conf.style.fontSize=(20+Math.random()*20)+"px";

conf.style.animation=`fall ${3+Math.random()*2}s linear`;

document.body.appendChild(conf);

setTimeout(()=>{
conf.remove();
},5000);

}

}

let style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
to{
transform:translateY(110vh) rotate(720deg);
}
}
`;

document.head.appendChild(style);