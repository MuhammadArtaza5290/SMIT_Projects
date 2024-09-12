// 1. Write a JS code to print numbers from 1 to 10

let num =0;

for (let index = 0; index <= 10; index++) {
    console.log(`${index}`);
   
}




// 2. Write a JS code to print Even numbers in given array


function printEvenNumber(array) {
    for (let i= 0; i< array.length; i++) {
        if (array[i]%2==0) {
           console.log(array[i]); 
        }
        
    }
}

number =[65,42,80,8,66,24,35,15];
printEvenNumber(number);




// 3. Write a JS code to delete all occurrence of element in given array



function deleteElement(number3, deleteItem) {
    return number3.filter(item => item !== deleteItem);
}

let number3 =[10,25,30,10,60,10,95,35];
let deleteItem = 10;
let newArray = deleteElement(number3, deleteItem);
console.log(newArray);



// 4. Write a JS code to find the power of a number using for loop



let numb = prompt("Enter a number :");
let power = 1 ;

for (let i = 0; i <= 10; i++) {

    power = numb ** i;
    console.log(numb + " raised to the power of " + i + " is : " + power);

}



// 5. Write a JS code to print a pattern using for loop
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8 

const row = 8;

for (let i= 1; i <= 8; i++) {

    let pattern = " ";

    for (let j = 1; j <= i; j++) {
        pattern += j + " ";
        
    }
    console.log(pattern);   
}






// 6. Write a JS code to find the no of digits in a number


function digitCountss(num1) {
    
    return num1.toString().length;
} 

let num1 = prompt("Enter a number:")
let digitCount = digitCountss(num1);
console.log("Number of digits:" , digitCount);




// 7. Write a JS code to calculate the sum of digits in a number

function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        
        let digit = number % 10;
        sum += digit;
        number = Math.floor(number / 10);
    }

    return sum;
}

let number = 65891;
let digitSum = sumOfDigits(number);
console.log("Sum of digits:", digitSum);


// 8. Write a JS code to find the largest number in an array


function findLargestNumber(arr) {
    if (arr.length === 0) {
        
        return null;
    }

  
    let largest = arr[0];

 
    for (let i = 1; i < arr.length; i++) {
      
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let larNumber = [3, 7, 2, 8, 5];
let largestNumber = findLargestNumber(larNumber);
console.log("Largest number:", largestNumber);




// 9. Write a JS code to print the Fibonacci series for a given value of N


function fibonacciSeries(N) {
    let a = 0;
    let b = 1;

    console.log(a);
    console.log(b);
    for (let i = 0; i < N; i++) {
        
        let number = a+b; 
        console.log(number);

        a = b;
        b = number;
    }

}

N = 15;
fibonacciSeries(N);




// 10. Write a JS code to find duplicate values in a given array
function findElement(numbers, findItem) {
    return numbers.filter(item => findItem.includes(item));
}

numbers = [22,31,35,22,66,22,35];
findItem = [35,22];
newArray = findElement(numbers, findItem);
console.log(newArray);




// 11. Write a JS code for Linear search algorithm


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
 
let numbers = [3, 7, 1, 9, 5];
let target = 9;
let index = linearSearch(numbers, target);
if (index !== -1) {
    console.log("Target", target, "found at index", index);
} else {
    console.log("Target", target, "not found in the array");
}




// 12. Write a JS code for Binary search algorithm


function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            low = mid + 1; 
        } else {
            high = mid - 1; 
        }
    }

    return -1;
}


let numbers1 = [1, 3, 5, 7, 9, 11, 13, 15, 17];
let target1 = 11;
let index1 = binarySearch(numbers, target);
if (index !== -1) {
    console.log("Target", target, "found at index", index);
} else {
    console.log("Target", target, "not found in the array");
}
