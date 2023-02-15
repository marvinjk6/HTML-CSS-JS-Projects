### Video Trailer Popup - HTML

The photo and the video were get from https://www.pexels.com/

* we add controls attribute to the video tag

The x icon were get from font https://fontawesome.com/icons/xmark?s=regular&f=classic

* we need to copy the i tag
* search for cdnjs.com after in the site search for font awesome
* in the class of the icon was added fa-2x to increase its size 

### Video Trailer Popup - CSS

as the trailer container has position fixed, the icon and the video tags need to have position different from static so that them can appear, like position absolute for example

### Video Trailer Popup - Javascript 

The goal is to close the video when click on the icon x, and show the video when the button is clicked, we achieve this by removing and adding the class .active 

* the default behavior of a video when it is closed and opened again, the video already automatically starts from where it left off.
    -   we want to change this behavior, if the video is closed it will be paused and when you click on the video again it will start at the beginning of the video
