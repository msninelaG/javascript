/*Variables and Data Types
 */

 //Please note that alert is the output/display method, like msgBox in Visual Bacis/C# or system.out.printlyn in Java

 /*Data type we have
//Number
//String
//Array
//Object
*/

//Declare and display a number
var number1 = 35;
 alert(number1);

 //Declare, concatenate, and diplay a sum. Please note that the '+' you see is a concatenate sign.
 var number2 = 40;
 alert(number1+number2)

 /*Declare and display strings. 
 Please note that you use single quotes '' for strings declaration.
 Also to note is that Javascript understands spaces between concatenations, it clears them.
 That ' ' before + lastName is so I have a space between first and last name, it's a NULL value, empty space. 
 */
 var firstName = 'Malusi';
 var lastName = 'Ninela';
 alert('My full name is: ' + firstName + ' ' + lastName);


 /*Let's talk about naming conversions of variables.
 First of all, variables can contain; letters, numbers, underscores (_), dollar signs ($). These are the only characters that you should be using in creating variables.
 Variables should begin with letters. They can also start with _ or $
 */

 //Variables are case sensetive. Say for an example you have,
 var test = 'Output 1'
 var Test = 'Output 2'

 /*What output do you expect to be displayed if I say,
 alert(Test); 
 Yes, you right, Output 2. 
 */
 alert(Test);

 //Types of variables,

 // camel case - it start with a lower case
 var myFavouriteNumber;

// partial case - it start with a UPPER case
var MyFavouriteNumber;

// underscore style. This is often used in PHP, but also in Java script world.
var my_favourite_number;

/*One thing to also know is Javascript follows rules by any other programming languages.
For an example, if I have declared a variable (var myFavouriteNumber;) and I want to initialize a value on it, 
I don't have to declare it again, that is I don't need to use (var) again, I just assign a value, which overrides the initial value assigned above. i.e
*/
myFavouriteNumber = 5;