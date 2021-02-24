
// Loops
//While Loop

let k = 0
while ( k < 2) {
    document.write(`hello ${k} <br>`);
    k++;
}

// For Loop

for (let x = 0; x<2; x++) {
    document.write(`hi ${x} <br>`);
}

const people = [
    {
    //  key     :  value      
        firstName: 'John',
        lastName: 'Smith',
        age: 30,
        smoke: true
    
    },
    {
    //  key     :  value      
        firstName: 'Mary',
        lastName: 'Smith',
        age: 28,
        smoke: false
    }
]

for (let i = 0; i < people.length; i++) {
    const xperson = people[i];
    console.log(xperson.age);
    document.write(xperson.age + '<br>');  
}

// Shorthand for  above For Loop

// here below person, personx, persony, personz we can give any other name. actually, we are assigning variables

for (let person of people) {
    console.log(person.firstName);
    document.write(person.firstName + '<br>');  
}

// High order array methods.

people.forEach(function(personz) {
    console.log(personz);
});

// Arrow Function

people.forEach(personz => console.log(personz.lastName));

// I separated the function from ForEach loop HB

people.forEach(add);
function add (persony) {
    console.log(persony.smoke);
}

// 2. High order Array method is MAP

const personName = people.map(persont => persont.firstName);

console.log(personName);

// 3. High order Array method is FILTER

const persomAgeUnder30 = people.filter(personO => personO.age<30);

console.log(persomAgeUnder30)
