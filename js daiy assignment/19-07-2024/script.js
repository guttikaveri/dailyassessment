// Copying Objects and Arrays:
// 1. Shallow Copy:
const personDetails = {
    name: 'kaveri',
    age: 25,
    address: {
      street: '3-phase',
      city: 'kukatpally',
      state: 'telengana',
      
    }
  };
  console.log(personDetails);

//   shallow copy:
var shallowCopy =Object.assign({},personDetails);
console.log(shallowCopy);
// shallow copy of the object using the spread operator:
const shallowCopy1 = { ...personDetails };
shallowCopy.address.city = 'kphbcolony';
shallowCopy1.address.state = 'hyderabad';

// Print both the original and copied objects
console.log('Copied Object 1 (Object.assign):', shallowCopy);
console.log('Copied Object 2 (Spread Operator):', shallowCopy1);

// 2. Deep Copy:
var newStore ={
    fruits: "orange",
    vegetables: "carrot",
    groceries:{
        oil:"coconut", 
        flour:"wheat",
    }
};

var deepCopy = JSON.parse(JSON.stringify(newStore));
deepCopy.groceries.oil = "olive";
 deepCopy.groceries.flour = "rice";
 console.log(newStore);
 console.log(deepCopy);

//  Using spread Operator:
// 1. Spread in Arrays:
const arr1= [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);



// 2. Spread in Objects:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject);

// Using Rest Operator:
// 1. Rest in Functions
function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  
  console.log(sum(6, 9, 3, 1, 9)); 

//   2. Rest in Array Destructuring:
const numbers = [1, 10, 2, 4, 8];
const [first, second, ...remaining ]= numbers 
console.log( first); 
console.log( second); 
console.log( remaining); 
// ----------------------------------------------------------------------------------------------------------------
// Reflection Questions:
// 1. What did you learn about shallow and deep copying through this task?
// shallow copying only copies the top-level properties of an object or array, 
// whereas deep copying recursively copies all levels of nesting.

// 2. How do the spread and rest operators simplify working with arrays and objects in
// JavaScript?
// The spread and rest operators simplify working with arrays and objects in JavaScript 
// by allowing for easy concatenation, merging, and destructuring
// 3. What are the main differences between shallow and deep copies?
//  Shallow copying only copies top-level properties, can lead to unexpected behavior when modifying nested properties,
//  whereas deep copying recursively copies all levels of nesting and 
//  ensures independence between copied objects.


// 4. In what scenarios would you prefer using the rest operator in functions?
// The rest operator is particularly useful when working with functions that accept multiple arguments
//  or when manipulating arrays and objects in a concise and expressive way.