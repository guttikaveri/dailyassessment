// task1:creating and  appending an element:

const newDiv = document.createElement('div');
newDiv.innerText = "Hello, World!";
document.body.appendChild(newDiv);
// ______________________________________________________________________________________________________________________
// task2:Chainging  the content of the elements:

const para =document.querySelector('p');
para.innerText="This is updated content";
// ______________________________________________________________________________________________________________________
// task3:Creating and appending a list of items:

const unlist = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li'); 
const li3 = document.createElement('li');

 li1.innerText = "Item1";
 li2.innerText = "Item2";
 li3.innerText = "Item3";

 unlist.append(li1);
 unlist.append(li2);
 unlist.append(li3);

 document.body.appendChild(unlist);
// _____________________________________________________________________________________________________________________
 // task4:Editing an Attribute of an Element:

 const img = document.querySelector('img');
 img.src = ' https://www.mariefranceasia.com/wp-content/uploads/sites/7/2016/04/feature-copy-5-750x410.jpg ';


// ______________________________________________________________________________________________________________________
 // task5:Removing an Element:

 const renoving = document.querySelector('div');
 renoving.remove();

// ------------------------------------------------------------------------------------------------------------------------
            //    reflection questions:
// 1. what did you learn  about DOM manipulation through this task?
// I learned  how   to use  (document.querySelector )to select specific elements in the DOM and
// creating new elements using the DOM.
// appending, editing and removing elements using the DOM.

// 2.how do you create and append an element in the DOM?

// I created an element using the (createElement)method and 
// appended it to the DOM using the (.append )method.


// 3. what methodsar e used to change the content and attributes of an element?
// I used the innerText and src methods to change the content and attributes of an element.

//  4. what method is used to remove an element from the DOM?
//  I used  .remove  to a particular element to remove an element from the DOM.






 