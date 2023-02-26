## Dark Mode Toggle - HTML

* The html part we need and input, empty label with a div inside

## Dark Mode Toggle - CSS

* As the label is in the body its need to has position absolute in order to see the height and width

* The reason the .circle has width and heigth equal to 30px is because the label has heigth equal to 40px, and we set the position the .circle to absolute and its top position to 5px to put the .circle in the middle

* We're going to use keyframe to make the animation of the circle when it is clicked, we use the linear animation and fowards tha maintains the value when the animations is completed

## Dark Mode Toggle - JavaScript

* When input element it's checked its value is true, when not is false, we can use the  variation of the checked property to change de bakcgorund of the viewport

* We want to save the "mode" to light or dark, the local storage will help us to do that, we will storage the input.checked