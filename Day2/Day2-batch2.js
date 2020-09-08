* Program to find character of string
let cha = "ravishah";
console.log(cha.indexOf("i"));

//*Program to convert minute to seconds
let min = prompt("Enter minute which give value in second");
let res = min * 60;
console.log(`The conversion of min to sec is ${res} sec`);

//* Program to search element in an array of string
var array = [-1, -2, -10, 5, -22];
var found = array.find(function (element) {
  return element > 0;
});
console.log(found);

//*Print an array in reverse order
let arr = ["Ravi", "Smriti", "Manju"];
let rev = arr.reverse();
console.log(rev);

//*
var arry = ["Apple", "Ant", "Animal", "banana", "cat"];
for (var i in arry) {
  console.log("row " + arry);
  for (var j in arry) {
    console.log(" " + arry[i][j]);
  }
}


