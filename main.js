/* Introduction*/
//Hello World!
console.log('Hello,World');
//variables
let greeting='Hai from a variable';
console.log(greeting);
//
greeting=3;
console.log(greeting);
greeting="hello";
const PI=3.145;

//printing
console.log(greeting='PI is : ' +PI);

//Interpolation and templating literals
console.log(`${greeting}, PI is : ${PI}`);

// Be careful with floats
console.log(0.1+0.2);
// Equality 
console.log(1==1); //true
console.log(1=='1'); //true -will convert to same type
console.log(1==='1'); //false

//Loose typing and conversion
let myNumber='5';
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber+5); //55


/*Control flows*/
let myAge=38;
if(myAge>=40)
{
    console.log('you are getting old!');

}
else{
    console.log('you/ are still young');
}

//Ternary Operation, conditional statement
myAge ==38? 
               console.log('old'): 
               console.log('not old');

               //boolean statement ? true:false

/* camelCase //Praxis in JS functions,vars
PascalCase  //Classes
snake_case    ??Often not used
*/

/* Loops, arrays and objects*/
//for
for(let i=0;i<5;i++)
{
    console.log(i);
}

let persons= [
    'Mike',
    'Emma',
    'Ally',
    'Lizzie'
];

//Log entire array
console.log(persons);

//Length of array
console.log(persons.length);

//Get the first person
console.log(persons[0]);

//Get the last person
console.log(persons[persons.length-1]);

//Get a slice of the array
let newPersons= persons.slice(0,2);//First 2
console.log(newPersons);

//Add to start of the array
persons.unshift('Acke');

//Add to end of the array
persons.push('Lotta');

//Remove from start of the array
persons.shift();

//Remove from end of the array
persons.pop();

console.log(persons);

//Loop araays
for(let person of persons)
{
    console.log(person);
}

//Older but still works
for(let i=0;i<persons.length;i++)
{
    console.log(persons[i]);
}

//Lambda loop
persons.forEach(x=> console.log(x));

//Objects
let mike= {
    firstName:'mike',
    lastName:'Back',
    age:38,
    hobby:'Music'

};
console.log(mike);

console.log(`First name: ${mike.firstName}`);
console.log(`First name: ${mike["firstName"]}`);
    let mikeStr= `${mike.firstName} ${mike.lastName},age:${mike.age}`;
    console.log(mikeStr);


    let mikeAdvanced={
        firstName:'Mike',
        lastName:'Back',
        age:38,
        hobbies:['music','programming','reading','games']
    };
    console.log(mikeAdvanced); //Object
    let mikeJSON=JSON.stringify(mikeAdvanced); //Object to JSON
    console.log(mikeJSON);
    console.log(JSON.parse(mikeJSON)); //Back to Object

    //Loop over object
for(let propertyName in mikeAdvanced)
{
    let propertyValue=mikeAdvanced[propertyName];
    console.log(propertyName,propertyValue);
}
//Loop through object and array inside of object
for(let propertyName in mikeAdvanced)  //loop over object
{
    let propertyValue=mikeAdvanced[propertyName];   //get value from key
    if(Array.isArray(propertyValue)==true)     // check if array
    {
        for(let hobby of propertyValue)     //loop over array
        {
            console.log("Hobby:"+hobby)

        }  }else{
            console.log(propertyName+" :"+ propertyValue);
        }
    }
//connection to HTML
//Ask JS to create a new element
let myDiv=document.createElement('div');
myDiv.innerHTML= `
<h1> Hello from JS! </h1>
<p> This is text from Java  script, my age is ${mike.age}</p>` ;
//Grab from the body tag
let body= document.querySelector('body');
// Add the div to the html
body.append(myDiv);

//Another way to add data
let myBands=[
    {
    name:'The Beatles',
    genre:'Pop'
},
{
    name: 'The Rolling stones',
    genre: 'Rock'
}
];
//Gran the bands div
let bandsDiv= document.querySelector('#bands');
for(let band of myBands){
    bandsDiv.innerHTML+= `
        <div class="band">
            <h2>${band.name}</h2>
            <p> Genre:${band.genre}</p>
        </div>
    `;
}
// Fuctions
function sayHello(){
    console.log('Hello');
}
const sayHello2=() => {
    console.log('Hello2');
}
sayHello();
sayHello2();
//Different ways of declaring the same function
//Function declaration
function add(a,b)
{
    return a+b;
}
// Arrow function
const add2=(a,b) => {
    return a+b;
}
//Function expression
const add3= function(a,b)
{
    return a+b;
}
// Arrow function with implicit return 
const add4=(a,b)=> a+b;
// Arrow function with implicit return and one parameter
const add5= a=> a+5;
console.log(add(1,2));
console.log(add2(1,2));
console.log(add3(1,2));
console.log(add4(1,2));
console.log(add5(1));

//classes
class Person{
    constructor(name,age,hobby){
        this.name=name;
        this.age=age;
        this.hobby=hobby;
    }
    greetings(){
        console.log(`Hi, My name is ${this.name} and Iam ${this.age}`);
        console.log(`I enjoy: `+this.hobby);

    }

}
const mikeClass = new Person('Mike',38,'Music');
mikeClass.greetings();
console.log(mikeClass.hobby);















