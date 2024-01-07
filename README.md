# game-2
 master JS

 🐾**Sorting elements in array**
sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

ex:
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs.sort()
console.log(webTechs)
 // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

❤️this is a shortcut to shuffle arrays randomly 

cardArray.sort(()=>0.5-Math.random())
console.log(cardArray)

sort arrange the thins in ascending order, and Math.random gives random values 

🐾 **Getting elements by using querySelector methods**

The document.querySelector:
 method can select an HTML or HTML elements by tag name, by id or by class name.

querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.
example:

let firstTitle = document.querySelector('h1') 
// select the first available h1 element
let firstTitle = document.querySelector('#first-title')
 // select id with first-title
let firstTitle = document.querySelector('.title')
 // select the first available element with class title


querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

const allTitles = document.querySelectorAll('h1') # selects all the available h1 elements in the page

console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))
const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class

**Function Declaration**

Let us see how to declare a function and how to call a function.

# declaring a function without a parameter

function functionName() {
  // code goes here
}
functionName() 

// calling function by its name and with parentheses

# Arrow Function

Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.



const square = n => {
  return n * n
}

console.log(square(2))

# Creating an Element

To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. We use the method document.createElement(). The method takes an HTML element tag name as a string parameter.

// syntax
document.createElement('tagname')

# Creating elements

To create multiple elements we should use loop. Using loop we can create as many HTML elements as we want. After we create the element we can assign value to the different properties of the HTML object.

# Adding attribute using setAttribute

**The setAttribute()**
 method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute. Let's add class and id attribute for the fourth title.

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')

# Appending child to a parent element

To see a created element on the HTML document we should append it to the parent as a child element.
 We can access the HTML document body using document.body. The document.body support the appendChild() method.

 # Event Listeners
Common HTML events:

onclick, 
onchange, 
onmouseover, 
onmouseout, 
onkeydown, 
onkeyup, 
onload. 

We can add event listener method to any DOM object. 
We use addEventListener() method to listen different event types on HTML elements.
The addEventListener() method takes two arguments, an event listener and a callback function.

selectedElement.addEventListener('eventlistner', function(e) {
  // the activity you want to occur after the event will be in here
})

// or

selectedElement.addEventListener('eventlistner', e => {
  // the activity you want to occur after the event will be in here
})
