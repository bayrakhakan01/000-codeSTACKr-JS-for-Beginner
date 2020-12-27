// Conditionals
// an equal sign means = assign 
// two equal signs means == evaluate (degerlendirmek) it doesent match datatypes only value
// three equal signs means === match value also data types
/*
age === 30
age !== 30
age != 30
age <= 30
age >= 30
age > 30
age < 30
&& and
|| or
*/

// If Conditions

let color = 'red';

if (color == 'red') {

    console.log(true);
    document.write(`<br> ${true}`);
}

let age = 26;

if (age !== '23') {
    console.log(true)
    document.write(`<br> ${true}`)
} else {
    console.log(false)
    document.write(`<br> ${false}`)
}

if (age <35 && age >29) {
    console.log(true)
    document.write(`<br> ${true}`)
    
} else if (age >25 || age >18){

    console.log('well')
    document.write(`<br> well`)
} else{
    console.log("No way")
    document.write(`<br> No way`)
}


let a = 1;
let b = 2;
//--------------------------------------------
function evaluate() {
    if (a > b) {
        return true     
    } else {
        return false
    }
}

console.log(evaluate());

// shorthand of above fuction with if

function evaluate2() {
    return a > b
}
console.log(evaluate());
//--------------------------------------------

let animal = 'dog';
//             if animal === 'cat then(?) true else(:) false
const likesCats = animal === 'cat' ? true : false;
console.log(likesCats); 

// Switch Conditions
// lets think switch like if statement

switch (animal) {
    // if
    case 'dog':
        console.log(animal)
        
        break;
    // else if
    case 'cat':
        console.log(animal)
        break;
    // else
    default:
        console.log('Neither')
        break;
}

switch (animal) {
    // if animal === 'dog' OR 'cat'
    case 'dog':
    case 'cat':
        console.log('dog or cat')
        break;
    // else
    default:
        console.log('Neither')
        break;
}
