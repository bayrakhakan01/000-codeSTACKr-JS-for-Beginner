// Functions

function hello (fName, lName) {
    if (lName === undefined ) {
        console.log(`Hello ${fName}`)
    } else {
        console.log(`Hello ${fName} ${lName} nasilsin?`)
    }
}
hello ('hakan', 'baba')


// Normal Function

function convertPercent2 (num2) {
    return num2/100;
}

console.log(convertPercent2(25))

// Arrow Function

const convertPercent1 = num1 => {
    return num1 / 100;
}

console.log(convertPercent1(5));


// Arrow Function since we only have one parameter and one line return

const convertPercent = num => num / 100;

console.log(convertPercent(75));

let num1 = 'Hello';
if(isNaN(num1)){
    document.write(num1 + ' is not a number');
} else{
   document.write(num1 + ' is a number');
}
