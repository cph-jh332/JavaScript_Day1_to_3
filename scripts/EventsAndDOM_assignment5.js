var tableHTML = document.getElementById("tableContainer");

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

var table = function (array) {
    var content = "<thead><tr>";
    for (item in array[0]) {
        content += "<th>" + item + "</th>"
    }
    content += "</tr></thead>";
    var mapped = array.map(
        function (items) {
            var list = "<tr>";
            for (key in items) {
                list += "<td>" + items[key] + "</td>"
            }
            list += "</tr>";
            return list;
        }
    );
    var joined = mapped.join("");
    return "<table>" + content + joined + "</table>";
};

tableHTML.innerHTML = table(cars);

document.getElementById("lessThanButton").addEventListener("click", function (event) {
    if (document.getElementById("lessThanPrice").value > 0) {
        var filteredArray = cars.filter(
            function (car) {
                return car.price < document.getElementById("lessThanPrice").value;
            }
        );
        tableHTML.innerHTML = table(filteredArray);
        event.preventDefault();
    } else {
        event.preventDefault();
    }
});