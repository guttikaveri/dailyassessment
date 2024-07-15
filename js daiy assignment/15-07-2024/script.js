// task1: using setTimeout:
setTimeout(function () {
  console.log("Hello, World!");
 }, 3000);


// task2: using setInterval:

  const myInterval = setInterval(function () {
   console.log("Tick");
   }, 2000);

// task3: using clearInterval:
  var i = 0;
const myIntervals = setInterval(() => {
  console.log("Tick");
    i++;

    if(i === 5){

        clearInterval(myIntervals);
    }
}, 2000);
    

// task4:simple callback function:

function greet(name) {

    console.log("Hello " + name);
}
var processUserInput = (greet) =>{
    
        console.log("welcome");
        greet("kaveri");
        
    };

processUserInput(greet);

// task5:using callbacks with  timing functions:

// setTimeout(() => {
//     console.log("Hello");
//     setTimeout(() => {
//         console.log("World");
        
//     }, 2000);
    
// }, 1000);

        //  reflection questions
        // 1. what did  you learn about  javascript  timing  events  and callbacks through this task?
        //  i learned   timing events to  setTimeout()  and setInterval()  to call  functions  after  a  certain  amount of time 
        //  has passed.
        // 2. what is the difference between setTimeout and setInterval?
        // setTimeout():
        // it  is  used  to  call  a  function  after  a  certain  amount of time has passed and we will 
        // pass  a  function  and  a  time  in  milliseconds
        // setInterval():
    //    it is  used  to  call  a  function  repeatedly  after  a  certain  amount of time has passed.
          
//    3. what are the advantages of using callbacks in javascript?
//      callbacks  in javascript  are  used  to  call  functions  after  
//      a  certain  amount of time has passed and we will pass  a  function  and  a  time  in  milliseconds
//      that  that will not  disturb  the  execution  of  the  code.










    
    