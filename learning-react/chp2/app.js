/*Chapter 2: 2. Emerging JavaScript. */

/*::::::::Destructuring::::::::::::::::*/
const dev = {
	devname: 'Tochukwu',
	job: 'Software Dev',
	city: 'Cape Town',
	salary: 60000
};

let {devname, job} = dev;
console.log(devname); // Tochukwu
console.log(job); // Software Dev

devname = 'Chucks';
job = 'Software Archetect';
console.log(devname); // Chucks
console.log(job); // Software Architech

//Function with regular parameter
var lordify = regularPerson => {
	console.log(`${regularPerson.name} of Canterbury`);
};
//Function with destrutured parameter
var lordify2 = ({name}) => {
	console.log(`${name} of Canterbury`);
};
var regularPerson = {
	name: 'Tochukwu',
	city: 'Cape Town'
};
lordify(regularPerson); //Tochukwu of Canterbury
lordify2(regularPerson); //Tochukwu of Canterbury

var [firstResort] = ['Kirkwoord', 'Squaw', 'Alpine'];
var [,,thirdResort] = ['Kirkwoord', 'Squaw', 'Alpine'];
console.log(firstResort); //Kirkwood
console.log(thirdResort); //Alpiie

/*:::::::::::::::::::Object Literal Enhancement (Restructuring)::::::::::::::::::*/
let fruit = 'Apple';
let street = 'Marcus Garvey';
let fruitObj = {fruit, street};
console.log(fruitObj);// {fruit: "Apple", street: "Marcus Garvey"}

let machine = 'Cell Phone';
let category = 'Electronic';
let statement = function(){
	console.log(`${this.machine} is an ${this.category} device`);
}
let machineObj = {machine, category, statement}
machineObj.statement(); //Cell Phone is an Electronic device


/*::::::::::::::Spread Operator:::::::::::::::::::::*/
let fruits = ['Apple', 'Orange' ];
let moreFruits = ['Pineapple', 'Strawberry'];
let allFruits = [...fruits, ...moreFruits];
console.log(allFruits); // ["Apple", "Orange", "Pineapple", "Strawberry"]

let [lastFruit] = [...allFruits].reverse(); //reverse() function mutates the array it is applied to. Hence the copy we made
console.log(lastFruit); //Strawberry

let [first, ...theRest] = allFruits;
console.log(first); //Apple 
console.log(theRest.join(', ')); // Orange, Pineapple, Strawberry

function showCities(...cities){
	let [firstCity] = cities;
	let [lastCity] = cities.reverse();
	console.log(`First City: ${firstCity}`); // First City: Lagos
	console.log(`Last City: ${lastCity}`); // Last City: Joburg
	console.log(`Total Cities: ${cities.length}`); // Total Cities: 4
}
showCities('Lagos', 'Cape Town', 'Abuja', 'Joburg');

//using spread operators for objects
var myThings = {
	music: 'Piano',
	lang: 'C#',    
	study:'Physics'
};
var math = true;
var allOfMe = {
	...myThings,
	math
};
console.log('My knowlege', allOfMe); //My knowlege {music: "Piano", lang: "C#", study: "Physics", math: true}


/*::::::::::::::Promise::::::::::::::::::::*/
function countToFive(){
	return new Promise((callback)=> {
		setTimeout(()=>{
			for(let x=1; x<=5; x++){
				console.log(x);
			}
			callback(6);
	   }, 1000);
	});
}
countToFive().then( arg => console.log(arg)); // 6

let getFakeMembers = (n) => new Promise((resolves, rejects) => {
		const url = `https://api.randomuser.me/?nat=US&results=${n}`;
		const ajax = new XMLHttpRequest();
		ajax.open('GET', url);
		ajax.onload = () => {
			 return (ajax.status == 200)? resolves(JSON.parse(ajax.response).results) : rejects(Error(ajax.statusText));
		};
		
		ajax.onerror = (err) => rejects(err);
		ajax.send();
	}
);
getFakeMembers(2).then(members => console.log(members), err => console.error(new Error('Can not load members from radomuser.me')));

/*::::::::::::::Classes::::::::::::::::::::*/
class Person
{
	constructor(name, profession)
	{
		this.name = name;
		this.profession = profession;
		
	}
	printDetails()
	{
		console.log(`${this.name} is a ${this.profession}`);
	}
}

var individual = new Person('Emeka', 'Techer'); 
individual.printDetails(); //Emeka is a Techer

class Dev extends Person
{
	constructor (name, profession, tools)
	{
		super(name, profession);
		this.tools = tools;
	}
	printDetails()
	{
		console.log(`${this.name} is a ${this.profession} he works with, ${this.tools}`);
	}
}
let tochucks = new Dev('chucks', 'software dev', 'C#, PHP, JavaScript');
tochucks.printDetails();  //chucks is a software dev he works with, C#, PHP, JavaScript
