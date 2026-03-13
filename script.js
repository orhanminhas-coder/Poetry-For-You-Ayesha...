let num = 3;
let counter = document.getElementById("count");

let timer = setInterval(function(){

counter.innerText = num;

num--;

if(num < 0){

clearInterval(timer);

counter.style.display = "none";

document.getElementById("openBtn").style.display = "inline-block";

}

},1000);


document.getElementById("openBtn").onclick = function(){

document.getElementById("page1").style.display = "none";

document.getElementById("page2").classList.remove("hidden");

document.getElementById("music").play();

}
