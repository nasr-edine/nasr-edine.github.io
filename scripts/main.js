// const myHeading = document.querySelector('h1')
//
// console.log(myHeading)
// console.log(typeof myHeading)
// console.log(myHeading.textContent)
// console.log(typeof myHeading.textContent)
// myHeading.textContent = 'Hello World!'

function multiply (num1, num2) {
  const result = num1 * num2
  return result
}

console.log(multiply(2, 2));
console.log(multiply(2, 3));
console.log(multiply(2, 4));

// document.querySelector('html').onclick = function () {
//   alert('Hello World!')
// }

const myImage = document.querySelector('img')
console.log(myImage);
console.log(myImage.getAttribute('src'));
console.log(typeof myImage.getAttribute('src'));

myImage.onclick = function () {
  const myPath = myImage.getAttribute('src')

  if (myPath === 'images/img1.jpeg') {
    myImage.setAttribute('src', 'images/img2.webp')
  } else {
    myImage.setAttribute('src', 'images/img1.jpeg')
  }
}

let myHeading = document.querySelector('h1')
let myButton = document.querySelector('button')

function setUserName() {
  let myName = prompt("Enter your name: ")
  if (!myName) {
    setUserName()
  }
  else {
    localStorage.setItem('name', myName)
    myHeading.textContent = 'Mozilla is cool ' + myName  
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  const storedName = localStorage.getItem('name')
  myHeading.textContent = 'Mozilla is cool ' + storedName

}

myButton.onclick = function() {
  setUserName();
}
