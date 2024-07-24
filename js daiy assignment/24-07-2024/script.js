// 1. localStorage: Setting and Getting Data:

localStorage.setItem("name", "kaveri");

localStorage.setItem("age", "25");

const getvalue = localStorage.getItem("name");
const getvalue2 = localStorage.getItem("age");
console.log(getvalue);
console.log(getvalue2);
// --------------------------------------------------------->
// 2. sessionStorage: Setting and Getting Data:
sessionStorage.setItem("fruit","mango");
const getvalue1 = sessionStorage.getItem("fruit");
const getvalue3 = sessionStorage.getItem("vegetable");
console.log(getvalue1);
console.log(getvalue3);
// ------------------------------------------------------------>
// 3. Removing Items from Storage:
 localStorage.removeItem("age");

//  Verify the item has been removed by attempting to retrieve it.
const getvalue4 = localStorage.getItem("age");
console.log(getvalue4);

// 4. JSON Storage:

const person = {
  name: "kaveri",
  age: 25,
  
    street: "3-phase",
    city: "kukatpally",
    state: "telengana",
  };
localStorage.setItem("person", JSON.stringify(person));
const getvalue5 = localStorage.getItem("person");
console.log(getvalue5);
// Retrieve and parse the JSON object from storage using JSON.parse.
const personDetails = JSON.parse(getvalue5);
console.log(personDetails);

// 5. Clearing Storage:
// ● Write JavaScript code to clear all items from localStorage and sessionStorage.
localStorage.clear();
sessionStorage.clear();

// ● Verify that the storage is empty by attempting to retrieve any item:
const getvalue6 = localStorage.getItem("person");
console.log(getvalue6);



// Reflection Questions
// 1. What did you learn about using localStorage and sessionStorage in JavaScript?
//  I learned that localStorage and sessionStorage are web storage objects that allow you
  // to store key-value pairs locally within a user's browser.

  // 2. How does storing data in localStorage differ from sessionStorage?
  // localStorage is for long-term storage, while sessionStorage is for short-term storage.
  // the difference is that while data in localStorage doesn't expire, data in sessionStorage is
  //  cleared when the page session ends.

  // 3. What are the use cases for localStorage and sessionStorage?
  // localStorage is used for long-term storage, while sessionStorage is used for short-term storage.
  //  it is used to store data that should be available even after the user closes the browser.
  

