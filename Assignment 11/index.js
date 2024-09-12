// <===================== JavaScript String Methods ====================>

var words = "Javascript is a great language. This is my favourite language.";
var word = "Hello world!";
var num = "123124565789";
var n = 1234567890;

//      // 1. length

// console.log(words.length);      //This method is used to calculate the length of string.
// console.log(word.length);

//      // 2. indexOf()

// console.log(words.indexOf("great"));     //to find substring(means small part of a big given string).
// console.log(words.indexOf("a"));

//     // 3.lastIndexOf()

// console.log(words.lastIndexOf("language"));  //to find substrings the only difference is that it count substring at the end of given string
// console.log(words.lastIndexOf("is"));
// console.log(num.lastIndexOf("5"));

//     // 4. slice()

// console.log(word.slice(3,10));          // this method is used to cut out specific part of string.
// console.log(words.slice(10, 30));
// console.log(num.slice(4, 10));

//     // 5. replace()

// console.log(word.replace("world", "Guys"));  //this method is used to find a substring in a given string and change with other word.
// console.log(words.replace("Javascript", "Python"));

//     // 6. toUpperCase()

// console.log(words.toUpperCase());   //this method is used to convert a string into uppercase.
// console.log(word.toUpperCase());

//     //7. toLowerCase()

// console.log(words.toLowerCase());

//     // 8. concat()

// console.log(word.concat(" " + words));    //this method is used to combine two or more strings.
// console.log(word.concat(" " +words +" " + num));
// console.log(words.concat(" " + num));

//      //9. charAt()

// console.log(words.charAt(20));   // this method tell us which word available on a given number.
// console.log(word.charAt(3));

//     //10. charCodeAt()

// console.log(word.charCodeAt(0));    //this method tell us ASCII code of given index number.
// console.log(words.charCodeAt(0));

//     // 11. split()

// console.log(words.split(" "));   //this method is used to break a string on specific points and convert it into an array.
// console.log(words.split("."));

//     // 12. toString()
// console.log(typeof(n));          //This method is used to change any kind of datatype into string.
// console.log(n.toString());
// console.log(typeof (n.toString()));
// console.log(n.toString(16));      //This method also used to find binary, octal, decimal, hexadecimal numbers.

// <==================== Javascript Array Method ====================>

    var arr = [1, 2, 3, 5, 3, 4, 6, 9, 8, 7];
    var str = ["Ali", "Arham", "Zaman", "Basit"];

    // 1. at()

    // console.log(arr.at(3));     //This method is used to find which number or string is available at the given index number.
    // console.log(arr.at(7));

    // 2. pop()

    // arr.pop();                //This method is used to remove value or string at the end of the given array.
    // console.log(arr);
    // str.pop()
    // console.log(str);

    // 3. push()

    // arr.push(10);            //This method is used to add or string value at the end of the given array.
    // console.log(arr);
    // str.push("Mahmood");
    // console.log(str);

    // 4. fill()

    // console.log(arr.fill(3)); //This method is used to fill an array with same value.
    // console.log(arr.fill(5));


    // 5. shift()

    // arr.shift();            //This method is used to remove number or string at the beginning of the array.
    // console.log(arr);
    // str.shift();
    // console.log(str);

    //6. unShift()

    // arr.unshift(70);        //This method is used to add number or string at the beginning of the array.
    // console.log(arr);
    // str.unshift("Zohaib");
    // console.log(str);

    // 7. reverse()

    // arr.reverse();          //This method is used to reverse the array length.
    // console.log(arr);
    // str.reverse();
    // console.log(str);

    // 8. includes()

    // console.log(arr.includes(3));     //IF array contain given value than its print true otherwise false.
    // console.log(str.includes("Basit"));
    // console.log(str.includes("Arslan"));

    // 9. map()

    // n = arr.map(arr => arr*arr);        //this method is used to modify previous array and store it in a new array.
    // console.log(n);
    // s = str.map(str => "Hurara");
    // console.log(s);
    
    // 10. filter()

    // var fil = arr.filter(item => item > 5)   //This method is used to filter elements in a given array.
    // console.log(fil);
    // var filt = arr.filter(item => item < 7)
    // console.log(filt);

    //11. find()

    // console.log(arr.find(item => item > 5));   //THis method is used to find items and give prefrence of first choice.
    // console.log(arr.find(item => item == 5));

    //12. every()

    // console.log(arr.every(item => item % 2 == 0));  //This method is used to check all elements in a given array if the condition match with each elements than print true otherwise false.
    // console.log(arr.every(item => item > 0));

    // 13. findIndex()

    // console.log(arr.findIndex(item => item > 6));    //This method is used to check all elements in a given array if the condition match with any elements than return its index Number.
    // console.log(arr.findIndex(item => item == 3 ));

    //14.reduce ()

    // console.log(arr.reduce((prev, curr) => prev + curr ));   // This method is used to perform different operation using previous and current element in a given array.
    // console.log(arr.reduce((prev, curr) => prev * curr));
    // console.log(arr.reduce((prev, curr) => prev / curr));

    // 15. toString()

    // var a = arr.toString();
    // console.log(typeof(a));

    //16. join()

    // console.log(arr.join("*"));      //this method is used to join each element of array.
    // console.log(arr.join("|"));

    //17. splice()

    // console.log(arr.splice(1, 5));
    // console.log(str.splice(3));

    //18.slice()

    // console.log(arr.slice(2, 6));
    // console.log(str.slice(2, 3));

    //19. sort()

    // console.log(arr.sort());


// <================== Javascript Objects ====================>

    // var person = {
        //     fname : 'Muhammad',
        //     lname : 'Artaza',
        //     age : 21,
        //     email : 'hafizartaza5290@gmail.com',
        // }
        //  console.log(delete person.age,);
        // console.log(
        //     person.fname, person["fname"], Object.keys(person), Object.values(person),
        // );
        
        // var student = {
        //     Name : "Arslan Ali",
        //     age : '21',
        //     gender : "Male",
        //     Profession : "SEO",
        // }
         
        // console.log(student);
        // console.log(Object.keys(student), Object.values(student));

        //<====================================  Data types  =====================================>

// var x ="Hello world";      ====>  string datatype

// var x = 30;                ====>   number datatype

// var x= true;             ====>  Boolean datatype

// var x = [1,2,3,4,5];        ====> Array datatype

// var x = {first:"june", last:"december"};  =====> object datatype

// var x = null;                   ======>  Null datatype

// var x;                         ====>   undefined datatype


// <================== Javascript if-else statement ========================>
        

    //1.

    // var x = prompt("Enter a number:");

    // if (x % 2 == 0) {
    //     console.log(`${x} is an even number.`);
    // } else {
    //     console.log(`${x} is an odd number.`);
    // }

    //2.

    // var abc = prompt("Enter a number:");

    // if (abc > 0) {
    //     console.log(`${abc} is a positive number.`);
    // } else if(abc < 0) {
    //     console.log(`${abc} is a negative number.`);
    // }
    // else{
    //     console.log(`This number is equal to zero.`);
    // }

    // <======================= Javascript Numbers ========================>

        var n = 3.1415;

        //1. toFixed()

        // console.log(n.toFixed(4));
        // console.log(n.toFixed(1));
        // console.log(n.toFixed(3));

        // 2. toPrecision()

        // console.log(n.toPrecision(2));
        // console.log(n.toPrecision(4));

        //3. Number()

        // var number = "1234";
        // console.log(typeof(number));
        // var nm = Number(number);
        // console.log(nm);
        // console.log(typeof(nm));

        // 4. parseInt()

        // console.log(parseInt("200abc"));
        // console.log(parseInt("70"));
        // console.log(parseInt("we have 7 days"));

        // 5. parseFloat()

        // console.log(parseFloat("13.75"));
        // console.log(parseInt("13.75"));
        // console.log(parseFloat("45"));

        //6. Number.MAX_VALUE

        // var maxNumber = Number.MAX_VALUE;
        // console.log(maxNumber);

        //7. Number.MIN_VALUE

        // var minNumber =  Number.MIN_VALUE;
        // console.log(minNumber);

   //<======================= Javascript Numbers =========================>    

    // 1.Math.ceil()

    // var b = Math.ceil(6.2);     //this method is used to find upward closest number value.
    // console.log(b);

    //2. Math.floor()

    // var n = Math.floor(2.1255);   //this method is used to find downward closest number value.
    // console.log(n);

    //3. Math.round()

    // var n = Math.round(-1.60); 
    // console.log(n);

    //4. Math.trunc()

    // var n = Math.trunc(-4.569);
    // console.log(n);

    //5. Math.max()

    // var n = Math.max(10, 5, 15, 60);
    // console.log(n);

    //6. Math.min()

    // var n = Math.min(10, 5, 15, 60);
    // console.log(n);

    //7. Math.sqrt()

    // var n = Math.sqrt(24);      //stand for square root
    // console.log(n);

    //8. Math.cbrt()

    // var n = Math.cbrt(999);    //stands for cube root
    // console.log(n);

    //9. Math.pow(x,y)

    // var n =Math.pow(25, 2);    // Math.pow(base, power)
    // console.log(n);

    //10. Math.random()

    // var n = Math.floor(Math.random()*10);
    // console.log(n);

    //11. Math.abs()

    // var n =Math.abs(25.5);
    // console.log(n);

    //12. Math.PI

    // var n = Math.PI;
    // console.log(n);

    // <======================= Javascript Dates ======================>

        var d = new Date();
        console.log(d);

        //1. getdate

        // var a = d.getDate();
        // console.log(a);

        //2. getday

        // var a = d.getDay();
        // console.log(a);

        //3.getfullyear

        // var a = d.getFullYear();
        // console.log(a);

        //4. get hours

        // var a = d.getHours();
        // console.log(a);


        //5. getMilliseconds
         
        // var a = d.getMilliseconds();
        // console.log(a);

        //6. getminutes

        // var a = d.getMinutes();
        // console.log(a);

        //7. getMonth

        // var a = d.getMonth();
        // console.log(a);

        //8. get second

        // var a = d.getSeconds();
        // console.log(a);

        //9. gettime

        // var a = d.getTime();
        // console.log(a);

        //10. todatestring

        var a = d.toDateString();
        console.log(a);