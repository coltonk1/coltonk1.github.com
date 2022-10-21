
//Get element
const _name = document.getElementById("name");
_name.textContent = " ";
const _shadow = document.getElementById('shadow');
_shadow.textContent = " ";

//Set my visible name
const myName = "Colton Karaffa";

//Interval to type name
var i = 0;
var create_name = setInterval(function(){
    _name.textContent += myName.charAt(i);
    _shadow.textContent = _name.textContent;
    i++;
    //If all letters are used, stop.
    if(_name.textContent === myName)
        clearInterval(create_name);
}, 85)


var open = false;
document.getElementById("open_button").onclick = function(){
    if(!open){
        document.getElementById("open").style.width = "125vh";
        document.getElementById("open").style.height = "125vh";
        document.getElementById("open").style.borderRadius = "0 0 100% 0";
        document.getElementById("open").style.transition = "width 2s, height 2s, border-radius .5s";
        document.getElementById("open_button").textContent = "x";
    }
    else{
        document.getElementById("open").style.width = "1.5em";
        document.getElementById("open").style.height = "1.5em";
        document.getElementById("open").style.borderRadius = "0 0 .5em 0";
        document.getElementById("open").style.transition = "width 1s, height 1s, border-radius 2s";
        document.getElementById("open_button").textContent = "=";
    }

    open = !open;
}

