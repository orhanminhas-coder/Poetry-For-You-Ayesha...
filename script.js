// Countdown Page1
let num = 3;
let counter = document.getElementById("count");
let timer = setInterval(function(){
    counter.innerText = num;
    num--;
    if(num < 0){
        clearInterval(timer);
        counter.style.display = "none";
        document.getElementById("openBtn").style.display = "inline-block";
        document.querySelector(".openMsg").style.display = "block";
    }
}, 1000);

// Page1 Open
document.getElementById("openBtn").onclick = function(){
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").classList.remove("hidden");

    let music1 = document.getElementById("music1");
    music1.play();
    startHearts();
    startTeddy();
    typePoetry();

    music1.onended = function(){
        document.getElementById("page2").style.display = "none";
        showPage3Open();
    }
}

// Page2 Hearts/Teddy
function startHearts(){
    for(let i=0;i<80;i++){
        let heart = document.createElement("div");
        heart.className="heart";
        heart.innerHTML="💗";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top=Math.random()*100+"vh";
        heart.style.animationDuration=(4+Math.random()*4)+"s";
        document.body.appendChild(heart);
    }
}
function startTeddy(){
    for(let i=0;i<30;i++){
        let teddy = document.createElement("div");
        teddy.className="teddy";
        teddy.innerHTML="🧸";
        teddy.style.left=Math.random()*100+"vw";
        teddy.style.top=Math.random()*100+"vh";
        teddy.style.animationDuration=(5+Math.random()*5)+"s";
        document.body.appendChild(teddy);
    }
}

// Page2 Poetry
function typePoetry(){
    let lines=document.querySelectorAll("#poetry span");
    let i=0;
    function showLine(){
        if(i<lines.length){
            lines[i].classList.add("show");
            i++;
            setTimeout(showLine,2000);
        }
    }
    showLine();
}

// Page3 Open button creation
function showPage3Open(){
    let page3Btn = document.createElement("button");
    page3Btn.innerText = "Open";
    page3Btn.style.cssText="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:15px 40px;font-size:24px;border:none;border-radius:15px;background:white;color:pink;font-weight:bold;cursor:pointer;z-index:100;";
    document.body.appendChild(page3Btn);

    page3Btn.onclick = function(){
        page3Btn.style.display="none";
        let page3 = document.getElementById("page3");
        page3.classList.remove("hidden");
        page3.style.display="block";

        let music2=document.getElementById("music2");
        music2.play();

        startScrollText();

        music2.onended=function(){
            showPage4Open();
        }
    }
}

// Page3 scrolling middle text
function startScrollText(){
    let textDiv = document.getElementById("middleText");
    let distance = textDiv.offsetHeight + window.innerHeight;
    textDiv.style.transform="translateY(-"+distance+"px)";
}

// Page4 Open button after Page3 music
function showPage4Open(){
    let page4Btn = document.createElement("button");
    page4Btn.innerText="Open";
    page4Btn.style.cssText="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:15px 40px;font-size:24px;border:none;border-radius:15px;background:white;color:pink;font-weight:bold;cursor:pointer;z-index:100;";
    document.body.appendChild(page4Btn);

    page4Btn.onclick = function(){
        page4Btn.style.display="none";
        let page3 = document.getElementById("page3");
        page3.style.display="none";

        let page4 = document.getElementById("page4");
        page4.classList.remove("hidden");
        page4.style.display="flex";

        startFinalHearts();
    }
}

// Page4 floating hearts
function startFinalHearts(){
    for(let i=0;i<50;i++){
        let heart = document.createElement("div");
        heart.className="finalHeart";
        heart.innerHTML="💗";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top=Math.random()*100+"vh";
        heart.style.animationDuration=(4+Math.random()*4)+"s";
        document.getElementById("finalHearts").appendChild(heart);
    }
}
