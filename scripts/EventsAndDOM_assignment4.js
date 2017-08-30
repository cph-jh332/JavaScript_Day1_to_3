var  names = ["Johm", "Ann", "Buller"];
var ul = document.getElementById("ulHere");
var button = document.getElementById("addButton");

var toList = function(array){
    var addingTags = array.map(
        function(name){return "<li>"+name+"</li>"}
    );
    var joining = addingTags.join("");
    return "<ul id='theUl'>"+joining+"</ul>";
};

ul.innerHTML = toList(names);

button.addEventListener("click", function(event){
    var name = document.getElementById("name");
    names.push(name.value);
    ul.innerHTML = toList(names);
    name.value = "";
    event.preventDefault();
});

document.getElementById("removeFirst").addEventListener("click", function(event){
   names.shift();
   ul.innerHTML = toList(names);
   event.preventDefault();
});

document.getElementById("removeLast").addEventListener("click", function(event){
   names.pop();
   ul.innerHTML = toList(names);
   event.preventDefault();
});