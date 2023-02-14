#### Random Color Generator - HTML

The part of Html is simple the title of the project using <h1> a container where the elements will stay and divs with the class color-container wich will have the hexadecimal code , further we're going to use Javascript to generate the elements

#### Random Color Generator - CSS

* we want the elements go to the next line when we decrease the size of the viewport, to do this we changed the flex-wrap: wrap;

#### Random Color Generator - Javascript

*   First select the container element where the color-containers will stay 
*   to create a lot of the color-container elements we use the for loop
*   use the method createElement("div") and pass in a div
*   add the class color-container to the element created which the style was defined at style.css. use the classList property and the method add and pass in "color-container"
*   use the appendChild method to add a child in the container and pass the colorContainer element

To create the hexadecimal code inside the colorContainer we need to create a function
*   the charset that we have to creating the colors palette has numbers from 0 to 9, also it has letters from A until F
*   the color hexadecimal code has a length of 6 characters
*   initially the color starts empty
*   after we need a loop that will create a random number and use the substring method to the charset string
*   colorCode will receive charset.substring(randomNum, randomNum + 1)
*   after the loop return colorCode

Now we select the divs created through their class "color-container" using query.SellectorAll

*   Next step is to create a function that will scroll(percorrer) through the NodeList that was generated. 
*   As the randomColor function returns the generated hexadecimal code, we assign the function execution to a variable (newColorCode), for each nodeList element we assign backgroundColor and innerText with "#" + newColorCode