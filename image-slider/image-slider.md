### Image Slider - HTML

we're going to use lorem picsum website to get the fotos
* https://picsum.photos/

the photos has id, there's a list with all the images and their specific ids

To add the buttons that will be clicked and changed the photos we're going to use font awesome icons
- we seach for angle
- use the cdn font awesome
- add the btn prev and next class to style the icons


### Image Slider - CSS

.sliderContainer
* .slider-container has overflow: hidden to hide the photos that are exceeding the height and width defined just to style the container, after we remove this property

image-container
* the .image-container has display flex to bring the images next to each other (the overflow: hidden needs to be removed to see this behaviour)
* we will use the transforme property and translateX method to change to the next photo using -500px to see the second photo, -1000px the third and so on decreasing -500px, after we're going to use javascript to do this dinamically

btn
* we change the position of the btn to absolute, as we want the icons be related to the slider container, we change the slider-container position to relative

### Image Slider - Javascript

The JS part of the project we're going to use javascript to show the next and previous images by using the .image-container transform property and translateX method

* add the click event to the icons that has the next and prev classes 