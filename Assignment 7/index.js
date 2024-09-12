// 1. Write a js program to find the maximum between two numbers.

let num1=prompt("Enter first number: 35");
let num2=prompt("Enter second number: 30");

if(num1 > num2)  {

console.log(`${num1} is greater than ${num2}`);
alert(`${num1} is greater than ${num2}`)

}
if(num2 > num1)   {

    console.log(`${num2} is greater than ${num1}`);
    alert(`${num2} is greater than ${num1}`)

}
if(num1==num2)    {

    console.log(`${num1} is equal to ${num2}`);
    alert(`${num1}is equal to ${num2}`)

}



// 2. Write a js program to find the maximum between three numbers.


let numb=prompt("Enter first number:");
let numb2=prompt("Enter second number:");
let numb3=prompt("Enter third number:");

if(numb1 >= numb2 && numb1 >= numb3)    {
    console.log(`${numb1} is maximum than ${numb2} and ${numb3}`);
    alert(`${numb1} is maximum than ${numb2} and ${numb3}`);
} else if (numb2 >= numb1 && numb2 >= numb3) {
    console.log(`${numb2} is maximum than ${numb1} and ${numb3}`);
    alert(`${numb2} is maximum than ${numb1} and ${numb3}`);
} else {
    console.log(`${numb3} is maximum than ${numb1} and ${numb2}`);
    alert(`${numb2} is maximum than ${numb1} and ${numb2}`);
}


// 3. Write a js program to check whether a number is negative, positive or zero.

let number=prompt("Enter a number:");

if (number > 0) {
    console.log(`${number} is a positive number.`);
    alert(`${number} is a positive number.`);
} else if (number < 0){
    console.log(`${number} is a negative number.`);
    alert(`${number} is a negative number.`);
} else {
    console.log(`This number is equal to zero.`);
    alert(`This number is equal to zero.`);
}



// 4. Write a js program to check whether a number is divisible by 5 and 11 or Not.


let num4= prompt("Enter a number:")

if (num4 % 5==0 && num4 % 11==0) {
    console.log(`${num4} is divisible by 5 and 11.`);
    alert(`${num4} is divisible by 5 and 11.`);
} else {
     console.log(`${num4} is not divisible by 5 and 11.`);
     alert(`${num4} is not divisible by 5 and 11.`);
}



// 5. Write a js program to check whether a number is even or odd.


let num5= prompt("Enter a number:")

if (num5 % 2==0) {
    console.log(`${num5} is an even number.`);
    alert(`${num5} is an even number.`);
} else {
    console.log(`${num5} is an odd number.`);
    alert(`${num5} is an odd number.`);
}



// 6. Write a js program to check whether a year is leap year or not.



let year=prompt("Enter the year:")


if (year % 4==0) {
    if (year % 100==0) {
         if (year % 400==0) {
            console.log(`${year} is a leap year.`);
            alert(`${year} is a leap year.`);
         } else {
            console.log(`${year} is not a leap year.`);
            alert(`${year} is not a leap year.`);
         }
    } else {
        console.log(`${year} is a leap year.`);
        alert(`${year} is a leap year.`);  
    }
} else {
    console.log(`${year} is not a leap year.`);
    alert(`${year} is not a leap year.`);
}




// 7. Write a js program to input any alphabet and check whether it is vowel or consonant.


let word= prompt("Enter a word:")

if (word=='A'||word=='a'||word=='E'||word=='e'||word=='I'||word=='i'||word=='O'||word=='o'||word=='U'||word=='u') {
    console.log(`${word} is a vowel.`);
    alert(`${word} is a vowel.`);
} else {
    console.log(`${word} is a consonant.`);
    alert(`${word} is a consonant.`);
}



// 8. Write a js program to check whether a character is uppercase or
// lowercase alphabet.


let words = prompt("Enter a word:")

if (words >='A' && words <='Z' ) {
    console.log(`${words} is Uppercase word.`);
    alert(`${words} is Uppercase word.`);
} else if (words >='a' && words <='z') {
    console.log(`${words} is lowercase word.`);
    alert(`${words} is lowercase word.`);
} else{
    console.log(`${words} is a wrong word.`);
    alert(`${words} is a wrong word.`);
}



// 9. Write a js program to input the week number and print weekday


var weekday=parseInt(prompt("Enter a week number:"));
if (weekday >= 1 && weekday <=7) {
    switch (weekday) {
        case 1:
            console.log(`Saturday`);
            alert(`Saturday`);
            break;
        case 2:
            console.log(`Sunday`);
            alert(`Sunday`);
            break;
        case 3:
            console.log(`Monday`);
            alert(`Monday`);
            break;
        case 4:
            console.log(`Tuesday`);
            alert(`Tuesday`);
            break;
        case 5:
            console.log(`Wednesday`);
            alert(`Wednesday`);
            break;
        case 6:
            console.log(`Thursday`);
            alert(`Thursday`);
            break;
        case 7:
            console.log(`Friday`);
            alert(`Friday`);
            break;
    
        default:
            console.log(`Invalid number`);
             alert(`Invalid number`);
          
    }
} else {
    console.log(`Invalid number`);
     alert(`Invalid number`);
}





// 10. Write a js program to input the month number and print the number of
// days in that month.


let month = parseInt(prompt("Enter the month number:"));
if (month >=1 && month<=7) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: 
        console.log("31 days");
        alert("31 days");  
            break;
            case 4:
            case 6:
            case 9:
            case 11:
                console.log("30 days");
                alert("30 days");
                break;
                case 2:
                    console.log("28 days");
                    alert("28 days");
        default:
            console.log("Invalid month number");
            alert("Invalid month number");
            break;
    }
    
} else {
    console.log("Invalid month number");
    alert("Invalid month number");
}



// 11. Write a js program to count a minimum number of notes in a given
// amount.

var amount=parseFloat(prompt("Enter amount:"));
var notes =[50,100,500,550,1000];
var count =0

for (let i = 0; i < notes.length; i++) {
   while (amount>= notes[i]) {
    count++;
    amount -= notes[i];
   }
}
console.log("Minimum number of notes requried :",count);



// 12. Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F



let phy = parseFloat(prompt("Enter physics marks:"));
let chem = parseFloat(prompt("Enter Chemistry marks:"));
let bio = parseFloat(prompt("Enter Biology marks:"));
let math = parseFloat(prompt("Enter Mathematics marks:"));
let comp = parseFloat(prompt("Enter Computer marks:"));
let total =phy +chem +math +bio +comp;
let pers = (total / 5)*100/100;

if (pers >=90) {
    console.log("Grade A");
    alert("grade A");
} else if(pers >= 80){
    console.log("Grade B");
    alert("grade B");
} else if (pers >=70){
    console.log("Grade C");
    alert("grade C");
} else if(pers >=60){
    console.log("grade D");
    alert("grade D");
} else if(pers >=40){
    console.log("Grade E");
    alert("Grade E");
} 
else {
    console.log("Grade F");
    alert("Grade F")
}



// 13. Write a js program to input the basic salary of an employee and calculate
// its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%


var salary= parseFloat(prompt("Enter basic salary"));

let hra, da;

if (salary <= 10000) {
    hra=0.2*salary;
    da=0.8*salary;
} else if(salary <= 20000) {
    hra=0.25*salary;
    da=0.9*salary;
}
else{
    hra=0.3*salary;
    da=0.95*salary;
}
var grossSalary = salary + hra + da;

console.log("Gross Salary: " + grossSalary);
alert("Gross Salary:"+ grossSalary);


// 14. Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill





var units = parseFloat(prompt("Enter the electricity units consumed:"));

// Initialize variables for total bill and surcharge
var totalBill = 0;
var surcharge = 0;

// Calculate total bill based on the given conditions
if (units <= 50) {
    totalBill = units * 0.50;
} else if (units <= 150) {
    totalBill = 50 * 0.50 + 50 * 0.75;
} else if (units <= 250) {
    totalBill = 50 * 0.50 + 100 * 0.75 + 150 * 1.20;
} else {
    totalBill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + 250 * 1.50;
}

surcharge = 0.20 * totalBill;

totalBill += surcharge;
console.log("Total Electricity Bill: Rs. " + totalBill.toFixed(2));
alert("Total Electricity Bill: Rs. " + totalBill.toFixed(2));