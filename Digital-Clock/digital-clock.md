### Digital Clock

Notes about CSS and Js codes

### Css

* the body needs to have 100vh to centralize the elements vertically
* the body background is a url from the site unsplash
* background-size cover - to cover the viewport
* overflow: hidden - to hide the scroll


### Js

* the goal is to manipulate the span with ids hour, minutes, seconds dynamically using javascript

* First get the elements from id

* create a function that will update the clock

* create three variables and assign them new Date, and invoke the methods for hours, minutes and seconds

* we can add an zero before hours, minutes and seconds when them are less than 10 hours, minutes or seconds using the ternary operator

* put the variables created which contains hour, minutes and seconds as innerHTML of the selected elements 

* create an timeout that will invoke the function that updates the clock every 1000 milliseconds

* call the function in the final, the timout and the call function will create an infinity loop that updates the clock