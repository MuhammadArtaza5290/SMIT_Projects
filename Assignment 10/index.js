// Task 1: Object Creation

// Create an empty object and assign it to a variable.

    // var eObj = {};

// Create an object with properties for name, age, and profession.

    // var person = {
    //     Name : "M Artaza",
    //     age : 21,
    //     profession : "Web & App developer",
    // }

    // console.log(person);

// Task 2: Object Properties

// Access and print the values of properties from an object.

    //  var person = {
    //     fName : "Hafiz",
    //     lName : "Artaza",
    //     age : 21,
    //     profession : "Web & App developer",
    //  };

    //  console.log(Object.values(person));

// Modify the value of a property in an object.

    // var person = {
    //     Name : "M Artaza",
    //     age : 21,
    //     profession : "Web & App developer",
    // }
    // person.Name = 'Hafiz Artaza';
    // person.profession = 'Software Engineer';
    
    // console.log(Object.values(person));


// Add a new property to an existing object.

// var person = {
//     Name : "M Artaza",
//     age : 21,
//     profession : "Web & App developer",
  
   
// }

// person['height'] = "5.7 feet";
// person.qualification = "Undergraduate";

// console.log(Object.values(person));

// Task 3: Object Methods

// Create an object method that prints a message to the console.

    // var person = {
    //     Name : "Artaza",
    //     age : 21,
    //     greet : function () {
    //         console.log('Assalam-o-Alaikum' +" "+ this.Name);
    //     }
    // }
    // person.greet();

// Create a method that calculates and returns a value based on object properties.

    //  var rec = {
    //     length : 10,
    //     width : 5,
    //     findArea : function () {
    //         return this.length * this.width;
    //     } 
    //  };

    //  var area = rec.findArea();
    //  console.log('Area of rectangle :', area);

    // var car ={
    //     fuel : 50,
    //     distance : 400,
    //     fuelAverage : function () {
    //         return this.distance / this.fuel;
    //     }
    // };
    // var effi = car.fuelAverage();
    // console.log('Fuel efficiency is:', effi);


// Task 4: Object Iteration

// Iterate over the properties of an object and print their values.

// const person = {
//     Name: 'Ali',
//     age: 25,
//     city: 'Faisalabad'
//   };
  
//   for (let key in person) {
//     console.log(key + ': ' + person[key]);
//   }
  
// Iterate over the properties of an object and perform a specific action for each property.

    // var persons = {
    //     Name : 'Artaza',
    //     age :21,
    //     city: 'Faisalabad'
    // }

    // for (const key in persons) {
    //     if (persons.hasOwnProperty(key)) {
    //         console.log("proporty name:", key);
    //         console.log("proporty value:", persons[key]);
    //         console.log("...............");
    //     }
    // }
// Task 5: Object Comparison

// Compare two objects to check if they have the same properties and values.

    //  var person1 ={
    //     Name : "Artaza",
    //     profession : "web development",
    //     age : 21,
    //  }

    //  var person2 ={
    //     Name : "Artaza",
    //     age : 21,
    //     profession : "web development"
    //  }
      
    //  function objectEqual(obj1, obj2) {
    //     return JSON.stringify(obj1) === JSON.stringify(obj2);
    //  }

    //  console.log(objectEqual(person1, person2));
   

// Compare two objects to check if they refer to the same object in memory.

// var person1 = {
//     Name : "Arslan",
//     age : 22,
//     prof : "Seo",
// }
// var person2 = {
//     Name : "Arslan",
//     prof : "Seo",
//     age : 22,
    
// }

// function compareObject(obj1, obj2) {
//     var key1 = Object.keys(obj1);
//     var key2 = Object.keys(obj2);

//     for (const key in obj1) {
//         if (key1[key] !== key2[key]) {
//             return false;
            
//         }
//         return true;
//     }
// }

// if(compareObject(person1, person2)){
//     console.log("true");
// }else {
//     console.log("false");
// }

// Task 6: Object Nesting

// Create an object that contains another object as one of its properties.

//   var student ={
//     Name : "Artaza",
//     age : 21,
//     address : {
//         city : "Faisalabad",
//         country : "Pakistan",
//     }
//   };

//   console.log(student);
// Access and modify properties of a nested object.

// var student ={
//     Name : "Artaza",
//     age : 21,
//     address : {
//         city : "Faisalabad",
//         country : "Pakistan",
//     }
//   };

//   student.address.city = "LiverPool";
//   student.address.country = "England";
  
//   console.log(student);
// Task 7: Object Prototypes

// Create a prototype object and use it to create multiple instances of objects.

    // var student = {
    //     Name : "Arslan",
    //     age : 20,
    //     height : "5.7 feet"
    // }

    // console.log(student.valueOf());
    // console.log(student.isPrototypeOf());

// Add a method to the prototype object and observe its effect on the instances.


// Task 8: Object Serialization

// Convert an object to a JSON string using JSON.stringify().

    //  var persons = {
    //     Name : "Arslan Ali",
    //     age : 22,
    //     profession : "SEO"
    //  }

    //  var j = JSON.stringify(persons);
    //  console.log(j);

// Parse a JSON string and convert it back to an object using JSON.parse().

    //  var person = '{"name" : "Arslan", "age" : 23,"profession" : "Search Engine Optimization"}';

    //  var p = JSON.parse(person);
    //  console.log(p.name);
    //  console.log(p.age);
    //  console.log(p.profession);



// Task 9: Object Destructuring

// Use object destructuring to extract specific properties from an object.

//    var students = {
//     Name : "Arslan Ali",     //|     this is an object and its proporties are name , age and city also its values called proporties.
//     age : 22,                //|   these proporties values are assigned in the let variables. 
//     city : "Faisalabad"      //|   ||
//    }                         //    \/  this arrow shows that values are assigned to 
//                              //         to let variables.
//    let {Name, age , city} = students;  //This line of code called destructuring.

//    console.log(Name);
//    console.log(age);
//    console.log(city);

// Task 10: Object Property Enumeration

// Use Object.keys() to get an array of all the property names of an object.

//  var person ={
//     Name : 'Ali',
//     age : 22,
//     address: 'Lahore'
//  }

//  var valueName = Object.keys(person);
//  console.log(valueName);
 
// Task 11: Object Inheritance

// Create a parent object and a child object that inherits properties and methods from the parent.

  var parent = {
    Name : "Arslan Ali",
    age : 23,
    city : "Faisalabad",
    greet() {
        console.log(`Hello, my name is ${this.Name} and I am ${this.age} years old and I live in ${this.city}`);
    }
  };

  var child = Object.create(parent);
  child.Name = "Arslan";
  child.age = 25;
  child.city ="Lahore";

  console.log(child.Name);
  console.log(child.age);
  console.log(child.city);
  child.greet();

// Task 12: Object Privacy

// Create private properties in an object using closures or symbols