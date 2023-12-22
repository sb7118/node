//JS sets
//JS sets are the arrays with its unique values
let fruits = new Set(["apple","banana","mango"]);
fruits.add("grapes");
fruits.delete("banana");
console.log(fruits.has("grapes")); //returns true if it has the value
console.log(fruits);

fruits.forEach(function(value){
    console.log(value);
})
console.log(fruits.values());
console.log(fruits.size);

//accessing the elements using values() method
let xyz = '';
for(let x of fruits.values()){
    xyz += `${x} `;
}
console.log(xyz);