// Reference Date Types

//--- Array Literals 
/*
const numbers = new Array (1,2,3,4,5,6) // old type signing array
numbers[2]=9;
console.log(numbers);

const numbers2 = [1,2,3,4,5,6] // New type signing array
numbers2[2]=9;
console.log(numbers2);


const colors = ['red','blue','green', 'yellow']
colors[4]= 'black';
colors.push('white'); // add a item the end of the array
let firstColor = colors.shift(); // removing the first color from the array list and assigning a variable let us store the removed item.
let lastColor = colors.pop();    // removing the Last color from the array list and assigning a variable let us store the removed item.
console.log(colors);
console.log(firstColor);
console.log(lastColor);

let findIndexNumber = colors.indexOf('yellow'); // indexOf help us to find index number of item
console.log(findIndexNumber);

const myArray = ['red', 4, true, null, [1, 2, [1, 2, 3]]] // Array can have multiple data types

console.log(myArray[4][2][0]); // to get inside of the sub array you syoud add another []

//--- Object Literals 
//------------------------------------------------------------------------------
let firstName = 'John';
let lastName = 'Smith';
let age1 = 30;

const person1 = {        //this is object. difference between variable and object ':' + ','
    firstName: 'John',
    lastName: 'Smith',
    age1: 30,
    

}
*/
//------------------------------------------------------------------------------

const person = {
 //  key     :  value      
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    smoke: false,
    pets: ['dogs','cats'],          // we can add Array inside of object
    address: {                      // we can add object inside of object
        street: '123 Street',
        city: 'Houston',
        state: 'Texas'
    }
}



// add an item to the obect

person.email = 'john@email.com';
console.log(person.age);

// Delete items from the object

delete person.age;

console.log(person.age);

// there is a couple of ways to access the values from within the array

// Dot Notation

console.log(person.firstName);

// Bracet Notation

console.log(person['age']);

// 3. way for some reason Exp. for loop

let key = 'lastName'

console.log(person[key]);

// accessing the array

console.log(person.pets[1]);

// accessing the sub object

console.log(person.address.city);
console.log(person.address['street']);

// DECONSTRACTING if there is only certain values that we are looking o get out of the object. we can pull those out

const {email, smoke, address:{city}} = person

console.log(email, smoke, city);

// Objects inside of Array

const people = [
    {
    //  key     :  value      
        firstName: 'John',
        lastName: 'Smith',
        age: 30,
        smoke: false,
        pets: ['dogs','cats'],          // we can add Array inside of object
        address: {                      // we can add object inside of object
            street: '123 Street',
            city: 'Houston',
            state: 'Texas'
        }
    },
    {
    //  key     :  value      
        firstName: 'Mary',
        lastName: 'Smith',
        age: 30,
        smoke: false,
        pets: ['dogs','cats'],          // we can add Array inside of object
        address: {                      // we can add object inside of object
            street: '123 Street',
            city: 'Houston',
            state: 'Texas'
        }
    }
]
const peopleJSON =JSON.stringify(people);

console.log(peopleJSON);
console.log(JSON.parse(peopleJSON));

console.log(people);