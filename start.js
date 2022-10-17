
//Get element
const _name = document.getElementById("name");
_name.textContent = "";
const _shadow = document.getElementById('shadow');
_shadow.textContent = "";

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

