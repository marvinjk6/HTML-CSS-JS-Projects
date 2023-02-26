## Tab Section - HTML

We're going to use phot from unsplash website

* em we use lorem it's possible write lorem50 it means tha the phrase will have 50 words

## Tab Section - CSS

There's and website that suggests the best color compilations to your website: https://colorhunt.co/

object-fit: cover; this property maintains the ratio(proporção) for the image

## Tab Section - JavaScript

First we're going to hide all the steps and then use Javascript to bring the step related to the one that will be clicked

* in the style.css we hide .content -> display:none
* after we can add a class named live that brings the .content changing its display to block -> .content.live
    - at the same time when .btn has the class live we change its background-color with the same color of the .tabs
    - when the button has .live class the hover definition won't appear -> .btn:hover:not(.live)

* we need to add an identifier to the buttons so that we can know exactly which button is being clicked, we add data-id attribute in the buttons
    - as we made with the buttons we also need to identify the content, but this time we add the id attribute in the HTML file using the same value "step1" - "step2" - "step3"