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
    let mikeStr= `${mike.firstName} ${mike.lastName},age:${mike.age}`;
    console.log(mikeStr);






