// TEMPLATE LITERALS AND DEFAULT PARAMETERS SECTION

favoriteMovie1('The Room');
// the console showed "my favorite movie is The Room"
favoriteMovie1();
// the console showed me that ${movie} was undefined
favoriteMovie1('world');
// the console showed "my favorite movie is world"
favoriteMovie('Tremain', 'Candyman 2: Farewell to the Flesh');
// the console showed "my name is Tremain and my favorite movie is Candyman 2: Farewell to the Flesh"
favoriteMovie();
// the console showed me that ${name} and ${movie} were undefined

function favoriteMovie1(movie) {
    console.log(`my favorite movie is ${movie}`);
};

function favoriteMovie(name, movie) {
    console.log(`my name is ${name} and my favorite movie is ${movie}`);
};


// ARROW FUNCTIONS SECTION

let favoriteMovie2 = (movie) => {
    console.log(`my favorite movie is ${movie}`);
};
// this is a regular arrow function becuase it the entire function is not all on one line.
// also, I did not have to keep the parenthesis around the parameter [(movie)] because I only have one parameter.
favoriteMovie2('The Room');

let favoriteMovie3 = movie => console.log(`my favorite movie is ${movie}`);
favoriteMovie3();
// above is an example of concise body shorthand because all of the code is on one line and there are no curly brackets surrounding the returning console.log


const name = 'Tremain-Ajena Jones';
const words = name.split(' ');
// you have to put the space between the quotation marks or else it will just return individual letters.

let getFirstName = () => {
    console.log(words[0]);
};
getFirstName();

let getFirstNameConcise = () => console.log(words[0]);
getFirstNameConcise();

let calcEquation = (a, b) => {
    x = 2;
    y = 5;
    console.log(`x^y equals ${Math.pow(x, y)} and the product of 5 * 5 is ${5 * 5}`);
};
calcEquation();
console.log(2 ** 5);
// using the carrot symbol (^) for trying to calculate exponents does not work in javascript. You have to use either Math.pow(x,y) or x**y in your template literal.


// SPREADING SYNTAX SECTION
function printMe(name, location, favFood) {
    console.log(`My name is ${name}, and I live in ${location}. My favorite food is ${favFood}.`);
};
let info = ['Jerry', 'Transylvania', 'Tomatoe Soup'];
printMe(...info);
// all three parts from the array show up in the proper place of the function when checked in the console

let t = 'Tremain-Ajena Jones';
function step5and6(help) {
    console.log([...t]);
};
step5and6();

function step7(help) {
    for (let i = 0; i < t.length; i++) {
        console.log([...t[i]]);
    };
};
step7();