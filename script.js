// Countdown
let num=3;
let counter=document.getElementById("count");

let timer=setInterval(function(){
    counter.innerText=num;
    num--;
    if(num<0){
        clearInterval(timer);
        counter.style.display="none";
        document.getElementById("openBtn").style.display="inline-block";
        document.querySelector(".openMsg").style.display="block";
    }
},1000);

// Open button click
document.getElementById("openBtn").onclick=function(){
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").classList.remove("hidden");
    document.getElementById("music").play();

    startHearts();
    startTeddy();
    typePoetry();
}

// Hearts
function startHearts(){
    for(let i=0;i<80;i++){
        let heart=document.createElement("div");
        heart.className="heart";
        heart.innerHTML="💗";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top=Math.random()*100+"vh";
        heart.style.animationDuration=(4+Math.random()*4)+"s";
        document.body.appendChild(heart);
    }
}

// Teddy
function startTeddy(){
    for(let i=0;i<30;i++){
        let teddy=document.createElement("div");
        teddy.className="teddy";
        teddy.innerHTML="🧸";
        teddy.style.left=Math.random()*100+"vw";
        teddy.style.top=Math.random()*100+"vh";
        teddy.style.animationDuration=(5+Math.random()*5)+"s";
        document.body.appendChild(teddy);
    }
}

// Urdu line-by-line typing animation
function typePoetry(){
    let lines=document.querySelectorAll("#poetry span");
    let i=0;

    function showLine(){
        if(i<lines.length){
            lines[i].classList.add("show");
            i++;
            setTimeout(showLine,2000); // 2 sec per line
        }
    }

    showLine();
}
