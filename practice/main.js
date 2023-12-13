const log = console.log;
//JS Arrays
//An array is a special variable that can hold a number of values. And the values are accessed through index of an array.
//IN JS , arrays use numbered indexes and Objects use Named indexes;
/*const car = ["Volvo","Audi","Supra","Buggatti"];
//Array Methods and properties
log(car.sort()); //sorts in alphabetical order
log("Length of an array: "+car.length); //returns the  Length of an array
log(car.push("Suzuki")); //Adds the element in the last index
log(Array.isArray(car)) //returns true. this method is from ES6 which allows to check if the variable is object or array.
const num = [1,2,3,4,5];
log(car.concat(num)); //concatinates the one array with another array
log(car.constructor); //returns the function that created array object's prototype
log(car.copyWithin(0,4)); //copies the element within the array (which to be replaced,which to replace)
for(x of car.entries()){
    log(`${x[0]} ${x[1]}`) //the entries() method returns the key value pairs of an Array iterator object . it doesn't changes the orignal array.
}
log(num.every(nums)); //every() method returns a function that will be implemented on each of element of an array.
function nums(value){
    if(value > 54){
        return true;
    }
}
log(car.fill('Toyota')); //replaces all elements in the array with a specified value
log(num.filter(even)); //filter() method checks if each elements pass a test  like every() method but it also make an array of the elements who passed the test.  
function even(value){
    if(value % 2 ==0){
        return value;
    }
}

log(num.find(odd)); //find() method checks if every elements pass a test like every() & filter() method but it only returns the first passed element.
log(num.findIndex(odd)); //findIndex() method checks if every elements pass a test and returns the index of the first element that passes the test.
function odd(value){
    if(value % 2 == 1 && value > 1){
        return value;
    }
}
const subarr = [[0 , 0], [1 , 1], [2 , 2]];
log(subarr.flat()); //concatenates the sub-arrays in an array.
const numbers = [4, 9 ,16, 25]; 
log(numbers.flatMap(even)); //returns a new array with all elements that pass
log(num.flatMap((x)=> {return x * 2})); //ofcourse maps the array and returns the new flat array 
log(numbers.map((x)=>{return x *3})) //calls the function for each array elements and returns the new array.
let text = "QWERTY";
log(Array.from(text)); //creates an array from an object
log(numbers.includes(25)); //checks if an array includes a specific element.
log(numbers.indexOf(16)); //returns the first index of the element
log(Array.isArray(numbers));
log(numbers.join()); //joins all elements of an array into a string

log(numbers.keys());
//returns an iterator of an array's keys
const fruits = ["apple", "guava", "grapes", 'apple'];
log(fruits.lastIndexOf("apple")); //returns the last index of an element 
log(fruits.pop()); //removes the last element of an array and returns that element
Array.prototype.myUpperCase = function (){ //prototype adds the methods to an object 
    for(let i=0; i < this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}
fruits.myUpperCase();
log(fruits);
log(fruits.push("mango")); //adds the element at the last of an array and returns the current array length
log(fruits);
log(fruits.reduce((a,b)=> a + "\n" + b)); //Reduce the values of an array to a single value (going left-to-right)
log(fruits.reduceRight((a,b)=> a + "\n" +b)); //Reduce the values of an array to a single value (going right-to-left)
log(fruits.reverse()); //reverses the order of an element of an array  
log(fruits.shift()); //removes the first element and returns it
log(fruits.slice(0,-1)); //	Selects a part of an array, and returns the new array
const age = [14, 16, 18, 20 ,25];
log(age.some(isAdult)); //checks if any of the elements in an array pass a test
function isAdult(value){
    if(value > 18){
        return value;
    }
}
log(age.sort()); //sorts the element
log(age.splice(2,0,15,16)); //adds/removes the element
log(age);
const friends = ['bipin','Aekxer','luna'];
log(friends.splice(1,0,'sol'));
log(friends);
log(friends.toString()); //comverts an array into an string
log(friends.unshift('sugam'));
log(friends);
log(friends.valueOf());

// log(car[0]);
//We can also insert the value in array
/* car[4] = 'Lamborgini';
// log(car[4]);
//Changing the element of an array
car[2] = "Mercedes";

log("Length of an array: "+car.length);
log(car); //Access the full array
log(car[0]); //Access the first element of an array
log(car[car.length-1]); //Access the last element of an array 
log(car.toString()); //Converting an array into a string
log(typeof(car)) //Arrays in JS are Objects

*/
//if we add the element in the index higher than of the original array. the gaps between will result in undefined.

//loping through an Array
//1 ; for loop
// for(let i = 0; i < car.length;i++){
//     log(car[i]);
// }
// //2: forEach() fucntion
// car.forEach(function(value){
//     log(value);
// });

/* 
When to Use Arrays. When to use Objects.:
    JavaScript does not support associative arrays(hashes).
    You should use objects when you want the element names to be strings (text).
    You should use arrays when you want the element names to be numbers.
*/
 // a manual sorting method.
 const points = [12,2,36,4,55]
log(points.sort((a,b)=> a-b));
//Using sort function with compare function
//Sorting using built-in methods
//Multidimensional Arrays or Jagged Arrays :
const arr = [[1,2],[3,4],[5,6]];
log(arr)
log(arr[1][1]) //row , column
//Nested loops
for(let i=0;i<arr.length;i++) {
    let row = arr[i];
    for(let j=0;j<row.length;j++) {
        log(`${i}-${j}: ${row[j]}`)
    }
}

log(true+true);
log(false + false);

//  log(points.sort());
//  points.sort();
//  log(points);
 // Fisher Yates SHUFFLE Method
 for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
log(points);