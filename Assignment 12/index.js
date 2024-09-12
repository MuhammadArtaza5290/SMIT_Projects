var display = document.getElementById('outputs');
var currentElement = '0';
var priviousElement = null;
var operator = null;
var dotExist = false;
var submit = document.getElementById('submited');
var operatorString = " ";
var hide = document.getElementById('buttton1').style.display = "none";
function updateDisplay() {
    display.innerHTML = currentElement;
}

function clrDisplay() {
    currentElement = '0';
    operator =null;
    priviousElement = null;
    submit.innerHTML = null;
    updateDisplay();
}

function numbers(numbers) {
    if (currentElement === '0') {
        currentElement = numbers;
    } else {
        if (dotExist == false || numbers != ".") {
            currentElement = currentElement + numbers ;
            if (numbers == ".") {
                dotExist = true
            }
        }
    }
    updateDisplay()
}

function operatorAppear(ope) {
    operator = ope
    priviousElement = currentElement
    currentElement = "0"
}

function calculate() {
    if (operator) {
        switch (operator) {
            case '+':
                currentElement = parseFloat(priviousElement) + parseFloat(currentElement)
                updateDisplay();
                break;
            case '/':
                currentElement = parseFloat(priviousElement) / parseFloat(currentElement)
                updateDisplay();
                break;
            case '*':
                currentElement = parseFloat(priviousElement) * parseFloat(currentElement)
                updateDisplay();
                break;
            case '-':
                currentElement = parseFloat(priviousElement) - parseFloat(currentElement)
                updateDisplay();
                break;
            case '%':
                currentElement = parseFloat(priviousElement) % parseFloat(currentElement)
                updateDisplay();
                break;
            case '**':
                currentElement = parseFloat(priviousElement) ** parseFloat(currentElement)
                updateDisplay();
                break;
            case 'sin:':
                currentElement = Math.sin(parseFloat(currentElement)).toFixed(9);
                updateDisplay();
                break;
            case 'cos:':
                currentElement = Math.cos(parseFloat(currentElement)).toFixed(9);
                updateDisplay();
                break;
            case 'tan:':
                currentElement = Math.tan(parseFloat(currentElement)).toFixed(9);
                updateDisplay();
                break;
            case 'csec:':
                    currentElement = 1/Math.sin(parseFloat(currentElement)).toFixed(9);
  
                    updateDisplay();
                    break;
            case 'sec:':
                    currentElement = 1/Math.cos(parseFloat(currentElement)).toFixed(9);
                    updateDisplay();
                    break;
            case 'cot:':
                    currentElement = 1/Math.tan(parseFloat(currentElement)).toFixed(9);
                    updateDisplay();
                    break;
            case 'log:':
                    currentElement = Math.log(parseFloat(currentElement)).toFixed(9);
                    updateDisplay();
                    break;
            case 'n!':
            // Assuming currentElement is a global variable representing the current number displayed
            let num = parseInt(currentElement); // Convert currentElement to a number
            if (!isNaN(num)) { // Check if num is a valid number
                currentElement = factorial(num); // Calculate factorial
                updateDisplay(); 
            }
                break;
            case 'rad':
                let convertRad = Math.PI/180;
                currentElement = parseFloat(currentElement)*convertRad;
                updateDisplay();
                break;
            case 'deg':
                let convertDeg = 180/Math.PI;
                currentElement = parseFloat(currentElement)*convertDeg;
                updateDisplay();
                break;

        
            default:
                break;
        }
        document.getElementById('submited').innerHTML = currentElement;
   
        document.getElementById('outputs').innerHTML = null;
    }
   

}

function deleteLastChar() {
    if (currentElement >= 1) {
        currentElement = currentElement.slice(0, -1)
    } else {
        currentElement = '0';
    }
    updateDisplay();
}

// <================= Convert to scientific part ===============>

    function simpleToScientific() {
        document.getElementById('buttton').style.display = "none";
        document.getElementById('buttton1').style.display = "block";
    }

    function scientificToSimple() {
        document.getElementById('buttton1').style.display = "none";
        document.getElementById('buttton').style.display= "block";
    }

function factorial(n) {
    if (n === 0 || n === 1) {
         return 1;
    } else {
        let res = 1;
        for (let i = 2; i <= n; i++) {
        res = res *= i;
        }
        return res;
    }
}

// console.log(factorial(8));