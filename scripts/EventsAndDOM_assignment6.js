var display = document.getElementById("display");

var calculatorFunc = function (event) {
    var target = event.target;
    if(target.id === "buttons"){
        return;
    }
    if (target.innerHTML !== "=") {
        display.innerHTML += target.innerHTML;
    }else{
        var str = display.innerHTML;
        if(str.indexOf("+") > 0){
            var nr1 = str.split("+", 1);
            var nr2 = str.split("+").pop();
            nr1 = Number(nr1);
            nr2 = Number(nr2);
            console.log(nr1 + "+" + nr2);
            var res = nr1+nr2;
            display.innerHTML = res;
        }else if(str.indexOf("-") > 0){
            var nr1 = str.split("-", 1);
            console.log(nr1);
            var nr2 = str.split("-").pop();
            console.log(nr1 + "-" + nr2);
            nr1 = Number(nr1);
            nr2 = Number(nr2);
            var res = nr1-nr2;
            display.innerHTML = res;
        }else if(str.indexOf("*") > 0){
            var nr1 = str.split("*", 1);
            var nr2 = str.split("*").pop();
            nr1 = Number(nr1);
            nr2 = Number(nr2);
            console.log(nr1 + "*" + nr2);
            var res = nr1*nr2;
            display.innerHTML = res;
        }else if(str.indexOf("/") > 0){
            var nr1 = str.split("/", 1);
            var nr2 = str.split("/").pop();
            nr1 = Number(nr1);
            nr2 = Number(nr2);
            console.log(nr1 + "/" + nr2);
            var res = nr1/nr2;
            display.innerHTML = res;
        }
    }
};
