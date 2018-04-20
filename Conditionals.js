/*Conditionals
This is another part of Java script that is similar to many other programming languages
Examples
    - If Statement
    - If Else
    - Switches
 */

 //Please note that alert is the output/display method, like msgBox in Visual Bacis/C# or system.out.printlyn in Java

 /*If Statement
 Inside the if method is a condition
 Note that when you declare a variable, you use 1 equal sign, which means you assigning a value.
 Whenever you see 2 equal signs, know it's a condition, you comparing.
 In some cases you'll see 3 equal signs, when you see that you must know it's a condition, you comparing, you also checking if data types are the same.
 */
 var var1 = 1;
 var var2 = 2;
 if(var1 == var2)
    {
        console.log('This is True');
    }

//Nothing was displayed on the above statement, as the condition was not met.
//Let's check if the condition is not met what happens.
console.clear();
var var1 = 1;
var var2 = 2;
if(var1 != var2)
   {
       console.log('This is True');
   }

//What if it's not true, but we want something to happen when it's not true?
//We use else. Please note that else is CASE SENSITIVE, don't type Else, it won't work.
console.clear();
var var1 = 1;
var var2 = 2;
if(var1 == var2)
   {
       console.log('This is True');
   }
   else 
   {
        console.log('This is False');
   }

/*
We can add more conditions, we can use AND (&&), we can also use OR (||) 
When && is used, all conditions must be met for statements inside IF to be executed, otherwise compiler moves to the ELSE part, if there is, otherwise does nothing
When || operator is used, if any 1 condition is met, the opposite happens as when the AND operator is used.
For you to do, 
        - please test a case where var1 is not equal to var 3. That is change both var1 and var2 to be equal to 4
        - also, use OR operator, and check the output. 
*/
console.clear();
var var1 = 3;
var var2 = 3;
if(var1 == var2 && var1 == 3)
   {
       console.log('This is True');
   }
   else 
   {
        console.log('This is False');
   }

/*SWITCH STATEMENT
We will declare a fruit variable, and use a switch statement on a fruit
In this case, I love apples will be executed.
default is called whenever the fruit is not part of the cases.
*/
console.clear();
var fruit = 'apple';
switch (fruit)
{
    case "banana":
            alert('I hate bananas');
            break;
    case "apple":
            alert('I love apples');
            break;
    case "Orange":
            alert('Oranges are OK');
            break;
    default:
            alert('I love all other fruits');
}

