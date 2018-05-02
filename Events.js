/*EVENTS
One of the most important aspects in running Javascripts is EVENTS, because Javascript was created to make web pages interactive and dynamic. 
In order to do that, you need to have some kind of events handling

- Fo click
- For scroll
- For drag, and whatever the case may be.
*/


/*
Inside the container (<div> </div>) on index.html, let us add a button element, and name it CLICK ME.
<button> CLICK ME </button>

What we are also doing is to attach an event handler to our element, onclick, and tell it what must happen. We want it to run a function.
So, we assign a doClick() function to the event handler onclick
<button onclick="doClick()"> CLICK ME </button>

Now, where is the doClick() function? Does not exist. Let us create it here. Inside the function, we simple doing an alert.
*/

function doClick(){
    alert('You clicked');
}


/*
- Above what we used is a custom function, we can also use Javascript inner function, this.innerHTML.
- This function will change the text of the button to whatever parameters you passing (assigning to it).
- You can learn as many methods as possible.
<button onclick= "this.innerHTML = 'You Clicked!'" > CLICK ME 2 </button>
*/


/*
However, you wouldn't wanna do this, mix your javaScript with your html, as much as you can do.
The better way to get that functionality would be to create your own function, and pass in (this)
<button onclick= "changeText(this)"> CLICK ME 3 </button>
id, is the 'this' parameter. 
*/

function changeText(id){
id.innerHTML = 'You clicked! custom';
}


/*
Let's say we don't wanna change the element we in, but something else. 
Let's change the header, "Learning Javascript" 
  <h1 id="heading">Learning Javascript</h1>
The function below gets the element ID (self explanatory) 
    document.getElementById...
and changes its names by assigning a new one
    heading.innerHTML... 
*/

function changeHeading(){
    var heading = document.getElementById('heading');
    heading.innerHTML = 'Heading Changed';
}

/*
Let's say now we simply want to change the date
Let's introduce an element to hold the date
    <h1 id="time">click show date</h1>

*/

function showDateClick(){
    var time = document.getElementById('time');
    time.innerHTML = Date();
}

/*
Just to demonstrate that onclick is not the only event we can use, we can use mouse over & mouse out for an example
*/
function showDateMouse(){
    var time = document.getElementById('time');
    time.innerHTML = Date();
}

function clearDate(){
    var time = document.getElementById('time');
    time.innerHTML = '';
}

/*
We also can load something when the page launches, and which is usually attached to the body
*/

function showDateLoad(){
    var time = document.getElementById('time');
    time.innerHTML = Date();
}