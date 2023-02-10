## Button Ripple Effect - HTML

* is a simple ancor with span inside, the span will be used to add effect on the button 


## Button Ripple Effect - CSS

* to create the effect on the button, its needed to add background on the pseudo element ::before that put content before the element

*   when the mouse is on the button circle appears, but we want tha the content don't pass the size of the button, to ajust this in .btn class we can set the overflow to hidden 

* the span needs to has position relative so that the ::before still stay at the center, with position absolute, and z-index: 1; with that the content of the span will be a layer on top

## Button Ripple Effect - Javascript

* the event used on the btn is mouseover

* we can show in the console event.pageX and event.pageY

* for the event.pageX - btnElement.offsetLeft
* for the event.pageY - btnElement.offsetTop

* in .btn::before - the properties top and left were changed to a varible and with the variabe i'ts possible to use Javascript to manipulate this properties with style.setProperty



