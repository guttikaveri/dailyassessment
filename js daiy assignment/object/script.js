// task-1
// creating an object

let car= {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    owner:{
        firstNme: "Jane",
        lastName: "Smith",
        age: 28,
        email: "jane.smith@example.com"
    }
    }
console.log(car)

// task-2:accessing object properties
console.log(car.owner)

// task-3:modifying object properties
car.year = 2021
car.owner.email = "jane2021.smith@example.com"
console.log(car)

// task-4:adding new properties to an object
insurance= {
    
    provider:"Geico",
    policyNumber: "XYZ1234567",
    expiryDate: "2024-12-31",

}
car.insurance = insurance
console.log(car)

// task-5:removing properties from an object:
delete car.owner.email
console.log(car)

// task-6:adding nested objects:
car.serviceHistory =[
    {
        date: "2021-06-01",
        service: "Oil change",
        cost: 50

    },
    {
        date: "2021-06-15",
        service: "Tire rotation",
        cost: 100
    }

]
console.log(car)

// task-7: using for in loop
for (let key in car) {
    console.log(key,car[key])
}

// task-8: using for of loop
 for (let key of Object.keys(car)) {
    console.log(key,car[key])
 }

let  


