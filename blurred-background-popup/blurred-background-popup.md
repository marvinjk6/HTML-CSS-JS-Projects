### Blurred Background Popup - HTML

The Html part, is basically two containers, the first that will have the welcome and the button to join, the second container is basically a modal that will appears when the join button is clicked

* we used font awesome to get the x icon, and website cdnjs -> font awesome to have access to the link needed to use font awesome


* <i class="fa-solid fa-xmark fa-2x"></i> fa-2x to increase the size of the x

sites: 
* https://cdnjs.com/
* https://fontawesome.com/icons

### Blurred Background Popup - CSS

The background of the .container and the .popup-container will be an image from unsplash website

To dim the brightness of the background of the container and add blur:

* .active.container {
    filter: blur(5px) brightness(.7);
}

To dim the brightness of the background of the button:

* .btn:hover {
        filter: brightness(0.9);
    }

To change the visibility of the .popup-container

* .active.popup-container {
    visibility: hidden;
}

To add the effect when the popup is opened and closed

* .popup-container {
    top: 50%;
    opacity: 1;
    transition: all 0.7s;
}

* .active.popup-container {
    visibility: hidden;
    top: 10%;
    opacity: 0;
}

### Blurred Background Popup - Javascript

The goal is when click on the join button the popup appears, when click in the icon x the popup disappears

