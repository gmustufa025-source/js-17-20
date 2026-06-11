// 1. Declare and initialize an empty multidimensional array
var multiArray = [[], [], []];

// 2. Multidimensional array representing matrix
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// 3. Print numeric counting 1 to 10
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}
document.write("<br>");

// 4. Print multiplication table using for loop
var tableNum = prompt("Enter a number to show its multiplication table");
var tableLen = prompt("Enter length of multiplication table");
document.write("Multiplication table of " + tableNum + " Length " + tableLen + "<br><br>");
for (var i = 1; i <= tableLen; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
document.write("<br>");

// 5. Print items of the following array using for loop
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
document.write("<br>");
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}
document.write("<br>");

// 6. Generate series
document.write("<b>Counting:</b><br>1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,<br><br>");
document.write("<b>Reverse counting:</b><br>10, 9, 8, 7, 6, 5, 4, 3, 2, 1,<br><br>");
document.write("<b>Even:</b><br>0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,<br><br>");
document.write("<b>Odd:</b><br>1, 3, 5, 7, 9, 11, 13, 15, 17, 19,<br><br>");
document.write("<b>Series:</b><br>2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k<br><br>");

// 7. Search by user input
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var matchFound = false;
var matchIndex;
for (var i = 0; i < A.length; i++) {
    if (userInput.toLowerCase() === A[i]) {
        matchFound = true;
        matchIndex = i;
        break;
    }
}
if (matchFound) {
    document.write(userInput + " is <b>available</b> at index " + matchIndex + " in our bakery<br><br>");
} else {
    document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery<br><br>");
}

// 8. Identify the largest number in the given array
var arr = [24, 53, 78, 91, 12];
document.write("Array items: " + arr.join(",") + "<br>");
document.write("The largest number is " + Math.max(...arr) + "<br><br>");

// 9. Identify the smallest number in the given array
document.write("Array items: " + arr.join(",") + "<br>");
document.write("The smallest number is " + Math.min(...arr) + "<br><br>");

// 10. Print multiples of 5 ranging 1 to 100
for (var i = 5; i <= 100; i += 5) {
    document.write(i + ", ");
}