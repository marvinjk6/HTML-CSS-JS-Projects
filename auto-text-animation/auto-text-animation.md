### Auto Text Animatio - HTML

In this project we're going to create an auto text animation that writes person's careers 
First we just add a h1 tag with one career and after we use JS to create others careers

### Auto Text Animatio - CSS

The font is come from google fonts -> permanet maker

### Auto Text Animatio - JavaScript

Now we remove the h1 tag and add a div container, inside the container we can add innerHTML = <h1> careersArray</h1>

*   the careersIndex variable is responsible for show each career
*   the characterIndex variable is responsible for show each caracter of a career string 
    -   we use the slice method to break the career string, and as the second paremeter e use characterIndex that will be increased

* the first condition added at the functions means that when the characterIndex has the same size of the current career, we increase the careerIndex to show the next career
* we use the ternary operator to show a or an depending on the career (just Accountant has an before)
* the second condition in the functions means the when the careerIndex has the same size of the careers Array all the careers were showed so we set careerIndex to 0 to show all the careers again