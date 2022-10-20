document.getElementById("wrapper").onclick = function(){
    document.getElementById("wrapper").style.opacity = 0;
    document.getElementById("background").style.filter = "brightness(40%)";
    setTimeout(function(){
        document.getElementById("background").style.filter = "brightness(400%)";
    }, 2500)
    document.getElementById("clicked").style.opacity = "100%";
    document.getElementById("heart").style.opacity = "100%";

    text = "I love you."
    interval = 0;
    setTimeout(function(){
        write = setInterval(function(){
        if(interval < text.length)
            document.getElementById("text").textContent += text[interval];
        else
            clearInterval(write);
        interval++;
        }, 125)
    }, 3750)
}