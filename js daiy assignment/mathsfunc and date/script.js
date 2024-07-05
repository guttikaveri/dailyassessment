// task1: generate random number 
function getRandomNumber(mim,max) {
return Math.floor(Math.random() * (max - mim + 1) + mim);
 }
console.log(getRandomNumber(1,100));

// task2:round numbers
function roundNumbers(num){
return{
    roundUp: Math.ceil(num),
    roundDown: Math.floor(num),
    rounded: Math.round(num)

    
};
}
console.log( roundNumbers(4.7));

// task3:find Maximum and Minimum:

function findMaxMin (numbers) {
    return{
        max: Math.max(...numbers),
        min: Math.min(...numbers)
    };
    }
console.log(findMaxMin([3,5,7,2,8]))

// task4:Calculate power and square root
function calculatePowerAndSquareRoot(base, exponent) {
    return {
        power: base ** exponent,
        squareRoot: Math.sqrt(base)
    };
}

console.log(calculatePowerAndSquareRoot(4, 3));


// task5:CurrentDate and time


 function getCurrentDateTime() {
    let day = new Date()
       return{       
         currentDate:day.toISOString().slice(0,10),
       currentTime:day.toISOString().slice(11,19)
   };
};
 console.log(getCurrentDateTime());

// task6: get date methods:

function getDateMethods(date) {
    
    return {
       day: date.getDay(),
        month: date.getMonth ()+1,
        year: date.getFullYear(),
        
    };
}

console.log(getDateMethods(new Date()));

// task7:format date in different localies:

function formatDateInLocales(date) {

    return {
        enUS: date.toLocaleDateString('en-US'),
        frFR: date.toLocaleDateString('fr-FR'),
       
    }
}
console.log(formatDateInLocales(new Date()));

// task8:Add days to a Date:

function addDaysToDate(date, days) {
    return { date:date.getDate() + days} ;
}

console.log(addDaysToDate(new Date(), 5));

// bonus task1
function exploreMathsMethods(num) {
    return {
        absoluteValue: Math.abs(num),
        log: Math.log(num),
        floor: Math.floor(num),
        ceil: Math.ceil(num),
        exp: Math.exp(num),
        
    };
}

console.log(exploreMathsMethods(-5))

// bonus task2
function advancedDateManipulations(date1, date2)

 {
    return{
        
        differenceInDays: Math.abs(date1 - date2) / (1000 * 60 * 60 * 24),
        isEarlier: date1 < date2
        

        }
      };

console.log(advancedDateManipulations(new Date('2024-01-01'), new Date('2024-12-31')))