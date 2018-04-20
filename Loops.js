/*Loops
Loops, what they do is they iterate in something, whether it's reults, roles from the Database, whatever it may be.
Loops in Javascript are the same accross all high definition programming languages, your Java, PHP, C#, VB... 
 */

 //Please note that alert is the output/display method, like msgBox in Visual Bacis/C# or system.out.printlyn in Java

 //Basic types of for loops we will use here are; For Loop, While Loop, and For Each Loop (which is used for arrays)

 /*FOR LOOP
 It is structured like a function - for()
 It accepts 3 parameters. var=i (a variable declaration), i<10 (a condition), i++(increment)

 What we are going to do on this loop is we going to use a CONSOLE LOG, which is a way to print out stuff. 
 You can see this if you press F12 function on Google Chrome.

 In the case below, we are displaying a variable, until the condition inside the loop becomes untrue. Please note that like in arrays, the index count starts at zero.
*/
for(var i = 0; i < 10; i++)
{
    console.log(i);
}

//you can for an example include 10 in the output, by including OR EQUAL in the condition.
//I am using the clear method to clear the output we had above
//I am also introducing the concatenate here, which we spoke about on variables_and_datatype
console.clear();
for(var i = 0; i <= 10; i++)
{
    console.log('Output number' + ' ' + i);
}

/*WHILE LOOP
We trying to achieve the same this as on the for loop
Please note that in this case variable i is defined outside the loop
*/
console.clear();
var i = 0;
while(i < 10)
{
console.log(i);
i++;
}

/*For Each LOOP
We trying to achieve the same this as on the for loop
For each Loops are built to work with arrays
So, we will first create an array
ForEach is a Javascript method. We use a dot method again, please refer to arrays for explanation.
Inside the ForEach, we define a function, which passes a parameter, that which is taking values from an array, and we diplay that using console log
*/
console.clear();
var numbers = [5,20,45,10,30,15]
numbers.forEach(
    function(number)
    {
        console.log(number);
    }
);

/*You can also use For Loops, or While loops with arrays, you don't have to use ForEach loops. For an example, let's look at the below.
We use the length property again on the condition, please refer to arrays for explanation.
This makes our loop to be dynamic
*/
console.clear();
var numbers = [5,20,45,10,30,15]
for (var i = 0; i < numbers.length; i++)
    {
        console.log(numbers[i]);
    }