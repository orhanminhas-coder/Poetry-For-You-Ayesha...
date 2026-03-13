let num = 3;
let counter = document.getElementById("count");

let timer = setInterval(function(){

counter.innerText = num;

num--;

if(num < 0){

clearInterval(timer);

counter.style.display="none";

document.getElementById("openBtn").style.display="inline-block";

}

},1000);


document.getElementById("openBtn").onclick=function(){

document.getElementById("page1").style.display="none";

document.getElementById("page2").classList.remove("hidden");

document.getElementById("music").play();

startStars();

typePoetry();

}


/* star generator */

function startStars(){

for(let i=0;i<120;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.animationDuration=(3+Math.random()*5)+"s";

star.style.opacity=Math.random();

document.body.appendChild(star);

}

}


/* poetry typing effect */

function typePoetry(){

let poetry=document.querySelector(".poetry");

let text=poetry.innerText;

poetry.innerText="";

let i=0;

function typing(){

if(i<text.length){

poetry.innerText+=text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

}
