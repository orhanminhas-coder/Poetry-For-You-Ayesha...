let num = 3;

let counter = document.getElementById("count");

let timer = setInterval(()=>{

num--;

counter.innerText = num;

if(num==0){

clearInterval(timer);

document.getElementById("count").style.display="none";

document.getElementById("openBtn").style.display="inline-block";

}

},1000);


document.getElementById("openBtn").onclick=function(){

document.getElementById("countdownPage").style.display="none";

document.getElementById("secondPage").classList.remove("hidden");

document.getElementById("music").play();

}