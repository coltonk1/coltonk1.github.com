different_texts = ["I love you.", "You are the sweetest", "You are amazing", "Ugh you're so perfect", "I love your hair <3",
    "I am so glad we are dating.", "I miss you :(", "I love you so much", "You are smokin", "Hey gorgeous <3",
    "Most beautifulest girl in the whole wide world", "I am so glad we met", "You are the cutest", "I love you lots",
    "I love you bunches", "I love you most", "I love you to mars and back", "I will love you forever", "I love you",
    "You are so funny"];
    document.getElementById("wrapper").onclick = function(){
    document.getElementById("wrapper").style.opacity = 0;
    document.getElementById("background").style.filter = "brightness(40%)";
    setTimeout(function(){
        document.getElementById("background").style.filter = "brightness(400%)";
    }, 2500)
    document.getElementById("clicked").style.opacity = "100%";
    document.getElementById("heart").style.opacity = "100%";

    remove_text();
}

function remove_text(){
    if(document.getElementById("text").textContent.length > 0){
        remove = setInterval(function(){
            if(document.getElementById("text").textContent.length == 0){
                clearInterval(remove);
                setTimeout(function(){
                    console.log("a")
                    set_text();
                }, 500)
            }
            document.getElementById("text").textContent = document.getElementById("text").textContent.slice(0, document.getElementById("text").textContent.length-1);
        }, 125)
    }
    else{
        set_text();
    }
}

function set_text(){
    text = different_texts[Math.floor(Math.random()*different_texts.length)]
    interval = 0;
    setTimeout(function(){
        write = setInterval(function(){
            if(interval < text.length)
                document.getElementById("text").textContent += text[interval];
            else{
                clearInterval(write);
                setTimeout(function(){
                    console.log("i");
                    remove_text();
                }, 1250);
            }
            interval++;
        }, 125)
    }, 3750)
}