document.getElementById("wrapper").onclick = function(){
    document.getElementById("wrapper").style.opacity = 0;
    document.getElementById("background").style.filter = "brightness(40%)";
    setTimeout(function(){
        document.getElementById("background").style.filter = "brightness(400%)";
    }, 2500)
    document.getElementById("clicked").style.opacity = "100%";
    document.getElementById("heart").style.opacity = "100%";


    different_texts = ["I love you.", "You are the sweetest", "You are amazing", "Ugh you're so perfect", "I love your hair <3",
    "I am so glad we are dating.", "I miss you :(", "I love you so much", "You are smokin", "Hey gorgeous <3", "Most beautifulest girl in the whole wide world"];
    text = different_texts[Math.floor(Math.random()*different_texts.length)]
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