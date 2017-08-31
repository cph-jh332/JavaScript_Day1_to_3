function helloFromDiv(target){
    var id = target.id;
    if(id === "outer"){
        return;
    }
    document.getElementById("addHere").innerText += "Hi from " + id +"\n";
}