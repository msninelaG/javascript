/*Arrays
Arrays are used to assign multiple values on one variable. 
 */

 //Please note that alert is the output/display method, like msgBox in Visual Bacis/C# or system.out.printlyn in Java

 //Declaring an array. You use [] to assign multiple values to a variable
 //Let's declare a string array
 var colors = ['red', 'blue', 'green'];

 //We can simply display the whole array list
 alert(colors);

 /*We can just diplay blue. 
 Arrays use indexes, the count starts at 0. 
 In this case we have 3 entries on our array, [0, 1, 2], so we need to do the below to access blue
 */
alert(colors[1]);

//If we use index 3, we should get undefined as the index does not exist.
alert(colors[3]);

//The other way we can create an array. It all depends on you actually, I prefer the simpler way (first one). See the output when I display colors.
var colors = new Array('black', 'white', 'yellow');
alert(colors[2]);

/*
We can add values to an existing array
Let's add a 4th (index 3) entry
*/
colors[3] = 'pink'
alert(colors);

/*
Which should tell you, you can also append (overwrite color at a certain index)
*/
colors[3] = 'silver'
alert(colors);

//In most cases you will not know how many values you have on an array, the BEST way to add to an array is to use the PUSH function.
//This is known as a dot syntex. We taking an object (colors), use a dot to call a function (push), and pass a string parameter ('purple')
colors.push('purple');
alert(colors);

//Let's use numbers (integer) arrays, and display a sum.
var numbers = [10, 5, 15];
alert(numbers[0] + numbers[2]);

//We can also pull in a string in numbers, and display it. Please try to use the push function to do this as your test.
var numbers = [10, 5, 15, 'Twenty'];
alert(numbers[3]);

//Beside functions() and methods(), Java script also has properties. 
//Let's use length property, which returns the array length, number of entries/values we have. Note that we don't use () after property, since it's not a method.
alert(numbers.length);

//We can for an example use the method called sort(), and one called reverse. 
var numbers = [10, 5, 15];
alert(numbers.sort()); //this sort is not working as I expect it, I could be wrong, I will be back to it.
alert(numbers.reverse()); //this reverse is not working as I expect it, I could be wrong, I will be back to it.