/*Objects
There are different kind of objects
*/

/*OBJECT LITERAL
Almost similar to arrays, but slightly different
We will declare object and assign parameters
And try to access the object's parameters
*/

var person = {
        firstName: 'Malusi',
        lastName: 'Ninela',
        age: 18
    }

//We can display (object) person's age for an example
console.clear();
console.log(person.age);

//We can also add an array inside an object. Let's add Malusi's children for an example, and display (object) person's first child
var person = {
    firstName: 'Malusi',
    lastName: 'Ninela',
    age: 18,
    children: ['Ominathi', 'Thenjiwe']
}
console.clear();
console.log(person.children[0]);

//We can certainly Loop through these. Let's add an EMBEDED OBJECT, that is, object inside an object (address).
//This will return the whole address -> {street: "F1080 Dladla Road Kwamashu", city: "Durban", code: 4310}
var person = {
    firstName: 'Malusi',
    lastName: 'Ninela',
    age: 18,
    children: ['Ominathi', 'Thenjiwe'],
    address: {
        street: 'F1080 Dladla Road Kwamashu',
        city: 'Durban',
        code: 4310
    }
}
console.clear();
console.log(person.address);

//We can just return the postal code for an example.
var person = {
    firstName: 'Malusi',
    lastName: 'Ninela',
    age: 18,
    children: ['Ominathi', 'Thenjiwe'],
    address: {
        street: 'F1080 Dladla Road Kwamashu',
        city: 'Durban',
        code: 4310
    }
}
console.clear();
console.log(person.address.code);

/*
We can go even deeper and include a function here, let's sa we include a function called fullName.
Note that the function is outside the embeded object (address), but inside the original object (person), so the is assigned to the fullName parameter.
Take note on the syntax for declaring a function here. Our function is not void, it returns a value.
The word 'this' is used in many programming languages, and it refers in this case to the object that it is in, which is person.
We also concatenate the first with the last name here.
//On our console.log we use paranthesis this time, since we printing a function -> console.log(person.fullName())
*/
var person = {
    firstName: 'Malusi',
    lastName: 'Ninela',
    age: 18,
    children: ['Ominathi', 'Thenjiwe'],
    address: {
        street: 'F1080 Dladla Road Kwamashu',
        city: 'Durban',
        code: 4310
             },
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}
console.clear();
console.log(person.fullName());


/*OBJECT CONSTRUCTOR
This is another way to create the single object
With this approach, you create an object, and assign variables by using object name. Let's create object name, apple.
Note that variables we assigning to the object were never created, we are creating them by doing so.
We also introduce a function which describes an apple object.
*/

var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function(){
    return 'The color of an apple is ' + this.color + ' and its shape is ' + this.shape;
}

console.clear();
console.log(apple.describe());


/* CONSTRUCTOR PATTERN
What is not good about all the above is that if you want a couple of fruits, you will have to do this whole thing for each fruit.
Constructor pattern is the simpler way of doing all the above. 
You pass parameters and assign parameters and assign values to the parameters that are passed in, using THIS.
Before creating a method (below sentence), create one one fruit type, apple.
Then we create a method....
*/

function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

}
var fruit1 = new Fruit('apple', 'red', 'round');
console.clear();
console.log(fruit1)


/*For multiple fruits, if we want to add more fruits all we SIMPLE do is add each fruit (like we do with fruit1, fruit2, fruit3), 
and assign it on Fruit() function, which passes its parameters.
*/
function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'The fruit is ' + this.name + ' with ' + this.color + ' as the color, taking ' + this.shape + ' shape';
    }

}
var fruit1 = new Fruit('apple', 'red', 'round');
var fruit2 = new Fruit('melon', 'green', 'round');
var fruit3 = new Fruit('Guava', 'yellow', 'round');
console.clear();
console.log(fruit3.describe());

/* 
We can also have array of objects.
*/

var users = [ 
    {
        name: 'Malusi Ninela',
        age: 18
    },
    {
        name: 'Ominathi Ninela',
        age: 3
    },
    {
        name: 'Thenjiwe Ninela',
        age: 24
    }
];

console.clear();
console.log(users[0]);

//can get a specific property if we want.
console.clear();
console.log(users[0].name);

