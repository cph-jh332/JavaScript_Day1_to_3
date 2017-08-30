//Simple Dom Manipulation
//a
var div = document.getElementsByTagName("div");
for(var i = 0; i < div.length; i++){
    div[i].style.backgroundColor = "red";
}

//b
function changeColors() {
    var div1 = document.getElementById("1");
    var div2 = document.getElementById("2");
    var div3 = document.getElementById("3");

    div1.style.backgroundColor = "green";
    div2.style.backgroundColor = "yellow";
    div3.style.backgroundColor = "purple";
}

//Event Bubbling and event arguments
