// // Burada name parameter, greet'in icindeki isim de arguement. Arguement sundugumuz value, parameter ise declarationda kullandigimiz oge

// // Performin a task
// function greet(firstName, lastName) {
//     console.log('Hello' + ' ' + firstName + ' ' + lastName);
// }

// greet('John', 'Smith');

// // Calculating a value

// function square(number) {
//     return number * number;
// }

// console.log(square(2))


// let x = 10;
// let y = 3;

// // console.log(x + y);
// // console.log(x-y);
// // console.log(x*y);
// // console.log(x/y);
// // console.log(x%y);
// // console.log(x**y);

// console.log(++x);


// console.log(true == 1);

// // If a customer has more than 100 points example

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type)


// // Logical Operators

// // let highIncome = false;
// // let goodCreditScore = true;
// // let eligibleForLoan = highIncome && goodCreditScore // Logical And
// // let eligibleForLoan = highIncome || goodCreditScore // Logical Or
// // let applicationRefused = !eligibleForLoan // Logical Not


// //If customer picks red, it prints out red; but if it is undefined, it will be printed out as blue. First written variable is the first in comparison

// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor

// console.log(currentColor);

// // Bitwise Operators

// // 1 = 00000001
// // 2 = 00000010
// // 3 = 00000011
// // R = 00000000

// // console.log(1 | 2); Addition of 1 and 2 binary. Will be printed as 3
// // console.log(1 & 2); 1 and 2 binary not exactly same. Will be printed as 0

// // When we create something that user can Read, Write, Execute
// // Read only 00000100, Read and Write 00000110, All of them 00000111

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission

// let message = (myPermission & readPermission) ? 'yes' : 'no'
// console.log(message)


// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// IF STATEMENTS
// let hour = 17;

// if (hour >= 6 && hour < 12) {
//     console.log('Good Morning');
// }

// else if (hour < 18 && hour >= 12) {
//     console.log('Good Afternoon');
// }

// else {
//     console.log('Good Evening')
// }

// let role = 'moderator';


// Instead of switch role, it'is possible to use if statements
// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;

//     case 'moderator':
//         console.log('Moderator User');
//         break

//     default:
//         console.log('Unknown User');
// }

// if (role === 'guest')
//     console.log('Guest User');

// else if (role === 'moderator')
//     console.log('Moderator User');

// else
//     console.log('Unknown User');

//For LOOPS

// for (let i = 1; i <= 5; i++)
//     if (i % 2 !== 0) console.log(i) //for the odds
// // for the evens if (i % 2 === 0) console.log(i)

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }


// let i = 9;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

//for-in
// const person = {
//     name: 'Mosh',
//     age: 30
// }

// for (let key in person)
//     console.log(key)


// let i = 0;
// while (i <= 10) {
//     // if (i === 5) break;
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++;
// }

// function max(number1, number2) {
//     if (number1 > number2)
//         console.log('Max number is ', + number1)
//     else
//         console.log('Max number is ', + number2)
// }

// max(3, 5)

// function max(number1, number2) {
//     return (number1 > number2) ? number1 : number2;
// }

// console.log(max(10, 29));


// function max(number1, number2) {
//     return (number1 > number2) ? number1 : number2;
// }

// let number = max(10, 29);
// console.log(number)


// function isLandscape(width, height) {
//     return (width > height) ? 'landscape' : 'portrait';
// }

// let picture = isLandscape(300, 500);
// console.log('This picture is ' + picture + '.')

// function isLandscape(width, height) {
//     return (width > height)
// }

// console.log(isLandscape(300, 600))

//FizzBuzz Exercise

// const output = fizzBuzz('asd');
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//         return NaN;
//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'FizzBuzz';
//     if (input % 3 === 0)
//         return 'Fizz';
//     if (input % 5 === 0)
//         return 'Buzz';
//     return input;
// }

// My Solution for Ticket Automation

// let speedLimit = 70;
// let suspendLimit = 130;
// let output = checkSpeed(75);
// console.log(output);

// function checkSpeed(speed) {
//     if (speed <= speedLimit)
//         return 'Ok';
//     if (speed >= suspendLimit)
//         return 'License Suspended';
//     if (speed >= speedLimit && speed <= suspendLimit)
//         return ((speed - speedLimit) / 5 >= 1) ? 'Point = ' + Math.floor((speed - speedLimit) / 5)
//             : 'Ok';
// }

// Mosh Solution for Ticket Automation

// checkSpeed(71);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         console.log('Ok');
//         return;
//     }
//     const points = Math.floor((speed - speedLimit) / 5);
//     if (points >= 12)
//         console.log('License suspended');
//     else
//         console.log('Points', points)
// }

// showNumbers(10);

// function showNumbers(limits) {
//     for (let i = 0; i < (limits + 1); i++) {
//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//         console.log(i, message);
//     }

// }


// const array = [1, 2, 3, 4, 5, '', 0, NaN, null, undefined]
// console.log(countTruthy(array))

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array)
//         if (value)
//             count++;
//     return count;
// }

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie)

// function showProperties(obj) {
//     strings = []
//     for (let key in obj)
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key])
// }

// console.log(sum(20))

// function sum(limit) {
//     let total = 0
//     for (i = 1; i < limit; i++)
//         if ((i % 3 === 0) || (i % 5 === 0))
//             total += i;
//     return total
// }


// const marks = [50, 50, 50]
// console.log(calculateGrade(marks))


// function calculateGrade(marks) {
//     const average = calculateAverage(marks)

//     if (average >= 90) return 'A';
//     if (average >= 80) return 'B';
//     if (average >= 70) return 'C';
//     if (average >= 60) return 'D';
//     return 'F';
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array)
//         sum += value
//     return sum / array.length;
// }

// showStars(5)

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 0; i < row; i++)
//             pattern += '*';
//         console.log(pattern);
//     }
// }

// showStars(15)

// function showStars(rows) {
//     let pattern = '';
//     for (let row = 1; row <= rows; row++) {
//         pattern += '*';
//         console.log(pattern);
//     }
// }

// showPrimes(50);

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++) {
//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++) {
//             if (number % factor === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(number);
//     }
// }

// showPrimes(25)

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++)
//         if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++)
//         if (number % factor === 0)
//             return false;
//     return true;
// }

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('draw')
//     }
// };

//*****Factory Function****

// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw')
//         }
//     };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);


// *****Constructor Function******/

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1);

// let x = { value: 10 };
// let y = x;
// x.value = 20;

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// //const another = Object.assign({}, circle);

// const another = { ...circle };
// console.log(another);

// const myAddress = {
//     street: 'a',
//     city: 'b',
//     zipcode: 'c'
// }

// function showAddress(address) {
//     for (let key in address)
//         console.log(key, address[key])

// };


///////////////////////////////////////////////////
// Factory Function Style

// function showAddress(street, city, zipcode) {
//     return {
//         street,
//         city,
//         zipCode
//     }
// }

// let address = showAddress('a', 'b', 'c')
// console.log(address);

//////////////////////////////////////////////////

//////////////////////////////////////////////////

//Constructor Function Style

// function ShowAddress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipCode;
// }

// const address = new ShowAddress('a', 'b', 'c')
// console.log(address)

///////////////////////////////////////////////////

