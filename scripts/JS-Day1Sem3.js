//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2
}

var mul = function (n1, n2){
    return n1 * n2;
}


var cb = function (n1, n2, callback) {
    if (typeof n1 === "number" && typeof  n2 === "number" && typeof callback === "function") {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    }else{
        return "An error happened";
    }
};

console.log(add(1, 2))     // What will this print?
console.log(add)          // What will it print and what does add represent?
console.log(add(1, 2, 3)); // What will it print
console.log(add(1));	  // What will it print
console.log(cb(3, 3, add)); // What will it print
console.log(cb(4, 3, sub())); // What will it print
console.log(cb(3, 3, add)); // What will it print (and what was the problem)
console.log(cb(3, "hh", add));// What will it print
console.log(cb(3, 3, mul));

//Exercise 5
console.log(cb(3, 3, function(){return arguments[0]/arguments[1]}));

//Callbacks (with map, filter and forEach)
//Exercise 1
var nonFilterArray = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
var filteredArray = nonFilterArray.filter(
    function(word){return word.length <= 3}
    ) ;

console.log("\tnonFilterArray");
nonFilterArray.forEach(
    function(element){console.log(element)}
    );
console.log("\tfilteredArray");
filteredArray.forEach(
    function(element){console.log(element)}
    );

//Exercise 2
var uppperCaseArray = nonFilterArray.map(
    function(name){return name.toUpperCase();}
    );
console.log("\n\t UpperCase array");
uppperCaseArray.forEach(
    function(name){console.log(name)}
    );

//Exercise 3
console.log("\n\t Addind tags to array");
var toList = function(array){
    var addingTags = array.map(
        function(name){return "<li>"+name+"</li>"}
    );
    var joining = addingTags.join("");
    return "<ul>"+joining+"</ul>";
};

console.log(toList(uppperCaseArray));

//Exercise 4
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 },
    //bare for test
    { id: 6, year: 1997, make: "Ford", model: "E350", price: 6000}
];

//a
var filteredCars = cars.filter(
    function(car){
        if(car.year >= 1999){
            return car;
        }else if(car.make === "Volvo"){
            return car;
        }else if(car.price < 5000){
            return car;
        }
    }
);

filteredCars.forEach(function(car){console.log(car.id + " " + car.model)});

//Exercise 4a + 4b
var sqlStatements = filteredCars.map(
    function(car){
        return "INSERT INTO cars (id, year, make, model, price) VALUES ("+ car.id + "," + car.year + "," + car.make + "," + car.model + "," + car.price + ")"
    }
);

console.log("\n\t Sql Statements");
sqlStatements.forEach(function(sql){console.log(sql)});

//Asynchronus Callbacks
//Excercise 1

//Jeg tror det er i denne rækkefølge - 1,3,5,4,2
console.log("\n\tAsynchronus Callbacks");

var msgPrinter = function(msg,delay){
    setTimeout(function(){
        console.log(msg);
    },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

//I was right

//This and constructor functions
//Exercise 1 & 3

console.log("\n\tThis and Constructor functions");

function Person(name){
    this.name = name;
    console.log("Name: "+ this.name);
    setTimeout(function(){
        console.log("Hi  "+this.name);  //Explain this
    }.bind(this),2000);
}

//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain this

//Exercise 2
var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: "+ name);  //What’s different ?

//Exercise 3
var greeter = function(){
    console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);

//JavaScript Objects
console.log("\n\tJavaScript Objects");

//Exercise 1 & 2
myObj = {name: "Joachim", age: 22, email: "mail@mail.dk"};
for(prop in myObj){
    console.log(prop,myObj[prop]);
}

var person = {firstName:"John", lastName:"Doe", age:50, allInfo: function(){return this.firstName + " "+ this.lastName + " " + this.age;}};