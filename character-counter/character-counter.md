## Character Counter - HTML

* basically all the elements are in a container

* textarea has a property named maxlength with the value of 50

* the span tag are going to change dinamically with JS getting the element by id

## Character Counter - HTML

* .textarea { 
    resize: none -> this don't allow the user change the size of the textarea
  }

## Character Counter - Javascript

* at the textarea element we add an event

* the keyup event is dispared every time that a new character is digited on the textarea

* we created a function which gets the value.lenght of the textarea and assing it to the span --> totalCounterEl.innerText = textarea.value.length
    - we invoke this function inside the keyup event arrow function, which will fire when the textarea receive a character

* in the function updateCounter we get the textarea maxlength attribute , and subtract textareaElement.value.length, and assing it with remainingCounterEl.innerText 