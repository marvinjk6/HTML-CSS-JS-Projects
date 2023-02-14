### Heart Trail Animation - CSS

The background of the span will be an image from the site icon https://www.iconfinder.com/

* when we define the background with the image we can see because the span does't have width and height

* the position of the span must be absolute so that we can change its position with the properties top and left using Javascript 

* pointer-event: none; --> to create a heart exactly on the mouse position

* to create the animation to the heart we add @keyframes heart (the name we created)

* animation values :
animation: name duration timing-function delay iteration-count direction fill-mode;

### Heart Trail Animation - Javascript

we're going to use JS to firstly detect the movement of the mouse inside the browser and we get the position of the mouse x and y, and create the heart with different size and colors when moving the mouse.

Important:
* the event put on the body is mousemove -> each pixel are going to be an trigger to the event
* after add the event, catch the x and y mouse position -> event.offsetX and y


