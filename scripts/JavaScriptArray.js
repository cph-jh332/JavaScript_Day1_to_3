var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls);

console.log("\tconcat arrays");
for (i = 0; i < all.length; i++){
    console.log(all[i]);
}

console.log("\n\t all join");
console.log(all.join(","));
console.log(all.join("-"));


console.log("\n\t Push and Unshift");
all.push("Lone", "Gitte");
all.unshift("Hans", "Kurt");

for(i = 0; i < all.length; i++){
    console.log(all[i]);
}

console.log("\n\t Remove from all");
all.shift();
all.pop();

for(i = 0; i < all.length; i++){
    console.log(all[i]);
}

console.log("\n\t Splice");
all.splice(3, 2);

for(i = 0; i < all.length; i++){
    console.log(all[i]);
}

console.log("\n\t Reverse");
all.reverse();

for(i = 0; i < all.length; i++){
    console.log(all[i]);
}

console.log("\n\t Sort Array");
all.sort();

for(i = 0; i < all.length; i++){
    console.log(all[i]);
}

console.log("\n\t Map and filter array");
var mapped = all.map(function(name){return name.toUpperCase()});
var filtered = mapped.filter(function(name){if(name.startsWith("I") || name.startsWith("L")){return name}});

filtered.forEach(
    function(name){
        console.log(name);
    }
);