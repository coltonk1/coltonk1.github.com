async function start(){
    let images = document.querySelectorAll("img");
    for(i = 0; i < images.length; i++){
        await new Promise((r) => setTimeout(r, 75));
        images[i].style.display = "block";
        let x = Math.random()*(window.innerWidth-images[i].clientWidth);
        images[i].style.left = `${x}px`;
        let y = Math.random()*(window.innerHeight-images[i].clientHeight);
        images[i].style.top = `${y}px`;
    }
    await new Promise((r) => setTimeout(r, 500));
    for(i = 0; i < images.length; i++){
        images[i].style.opacity = "0";
    }
    let overlay = document.getElementById("overlay_text");
    overlay.style.display = "block";
    await new Promise((r) => setTimeout(r, 500));
    while(overlay.textContent.length > 0){
        overlay.textContent = overlay.textContent.slice(0, overlay.textContent.length-1);
        await new Promise((r) => setTimeout(r, Math.random()*15+70));
    }
    await new Promise((r) => setTimeout(r, 500));
    let target = "You're Great :)";
    while(overlay.textContent.length != target.length){
        overlay.textContent = target.slice(0, overlay.textContent.length+1);
        await new Promise((r) => setTimeout(r, Math.random()*25+70));
    }
    typing();
    await new Promise((r) => setTimeout(r, 1000));
    while(overlay.textContent.length > 0){
        overlay.textContent = overlay.textContent.slice(0, overlay.textContent.length-1);
        await new Promise((r) => setTimeout(r, Math.random()*15+55));
    }
}

async function typing(){
    let main = document.getElementById("main_text");
    let target = "Hey Carly. You are absolutely stunning in every single way possible. I never knew what perfect was until I met you. You literally are 1 in 8,042,140,839 and yet you are the only one that is this great. Everything about you is so so so pretty and beautiful. I know you probably think I believe you are stupid, but I do not. I think you are talented and really smart. After all, you can't know everything until you've learned the subject. Your hair is so gorgeous, I honestly get lost looking at it similar to how I get lost in your eyes. BUT then sometimes you're like 'my hair is messy oh its so bad' and I just cannot see what you see. I must be blind or crazy because it always looks so great to me. You have been extremely kind and have been sweet to me. Although you may not think you do much, talking to you everyday makes me feel that little bit happier. You are very funny and you make me laugh a lot. The way you act is great, although you seem to think it's annoying sometimes. I have never been annoyed by you. I promise, I haven't lied to you either. Also, while I appreciate the thought, I will fight over paying for Waffle House. This whole thing is probably cringe idrk. Anyways, back on topic, you, I really enjoy seeing your smile. It's a nice one. So nice, in fact, that if you were on one of those magazines smiling like that, I would definitely think that you are some famous model. Like, if you're secretly an actual princess, I would love to know, but I would not be surprised in the slightest. If I could vote you for prettiest girl of the year, I would, not kidding. Anywho, it is quite late while making this and I am tired, so if you read this far, thanks.";
    while(main.textContent.length != target.length){
        if(target.charAt(main.textContent.length-1) == ".")
            await new Promise((r) => setTimeout(r, 250));
        else if(target.charAt(main.textContent.length-1) == ","){
            await new Promise((r) => setTimeout(r, 200));
        }
        main.textContent = target.slice(0, main.textContent.length+1);
        await new Promise((r) => setTimeout(r, Math.random()*25+60));
    }
}

document.addEventListener('load', start());