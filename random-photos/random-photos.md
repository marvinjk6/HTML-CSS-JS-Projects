#### Random Photos - HTML

to get the photos we go to the website lorem picsum
- Just add your desired image size (width & height) after our URL, and you'll get a random image.
    * https://picsum.photos/200/300 width=200px; height=300px

- To get a square image, just add the size.
    * https://picsum.photos/200  width, height = 200px

- To request multiple images of the same size in your browser, add the random query param to prevent the images from being cached:
    * <img src="https://picsum.photos/200/300?random=1">
    * <img src="https://picsum.photos/200/300?random=2">

The site explains how to create the images and many other things that it's possible to do
- https://picsum.photos/


#### Random Photos - Javascript

- We create the image element and add it to the .image-container
- the src attribute receives the url of the site lorem picsum that brings the images, the url number is created randomly until the number 3000, there is the possibility of repeating the photo but the chances are low
- a loop has been added that will be repeated 10 times every time the button is clicked the function that creates the image is called 10 times creating 10 images 

