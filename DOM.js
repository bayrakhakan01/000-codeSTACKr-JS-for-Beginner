// DOM documant Object Model

//Single Element Selectors

// old way 

const list1 = document.getElementById('list');
console.log(list1);

//new way

//const list = document.querySelector('ul');
const list = document.querySelector('#list');               // # for id
console.log(list);

// Multiple Element Selector

const listItems = document.querySelectorAll('.list-item');     // . for class
console.log(listItems);

// looping between items

listItems.forEach(item => {
    console.log(item.textContent);
})

// DOM manipulation

//list.firstElementChild.remove();
list.lastElementChild.remove();
list.firstElementChild.textContent = 'First New item' //here you cant use HTML elements
list.lastElementChild.innerHTML = '<h2> New item <\h2>'
list.lastElementChild.style.background = 'green'

/// Events

const btn1 = document.getElementById('myBtn');
const btn = document.querySelector('#myBtn');
btn.addEventListener('click', function (e) {
    console.log(e)
    btn1.style.background = 'green'
    btn.innerHTML = '<h3> You have a MSG <\h3>'
    
})

// with Arrow one line function 
btn1.addEventListener('mouseover', mOver => btn1.style.background = 'green')


//with Arrow multiple line function

btn.addEventListener('mouseout', () => {
    btn.style.background = 'Red'
    btn.innerHTML = '<h3> Welcome My World <\h3>'
    btn.style.color = 'white'

})
