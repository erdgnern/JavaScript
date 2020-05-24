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

// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');
// let address3 = address1;

// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipCode;
// }

// function areEqual(address1, address2) {
//     return address1.street === address2.street && address1.city === address2.city && address1.zipcode === address2.zipcode;
// }

// function areSame(address1, address2) {
//     return address1 === address2;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3));

///////////////////////////////////////////////////////

// const blog = {
//     title: 'aSample',
//     body: 'bBoldPilot',
//     author: 'eEren',
//     views: 25,
//     comments: [
//         { author: 'gGuest1', body: 'nNotgood' },
//         { author: 'gGuest2', body: 'nNice' }
//     ],
//     isLive: true
// }

//////////////////////////////////////////////////////

// let isdraft = new IsDraft('a', 'b', 'c');

// console.log(isdraft);

// function IsDraft(title, body, author, isLive) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }

//////////////////////////////////////////////////////////

// let priceRanges = [
//     { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerson: 10 },
//     { label: '$', tooltip: 'Moderate', minPerPerson: 11, maxPerson: 20 },
//     { label: '$', tooltip: 'Expensive', minPerPerson: 21, maxPerson: 50 }
// ]

//////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

// let numbers = [1, 2, 3]

// numbers.push(4, 5) - Add to end
// numbers.unshift(1,2) - Add to beginning
// numbers.splice(3, 0, 8) - First beginning index, second deleting item count, third the thing you wanna add
// numbers.indexOf('a') - to find the first occurence primitive's index.
// numbers.lastIndexOf ('a') - to find the last occurence primitive's index.
// console.log(numbers.includes('a')) - if true, it is in the array.
// numbers/ indexOf(1, 2) - this notation starts the search after 2. index.
// numbers.pop() - Erase from end
// numbers.shift() - Erase from beginning
// numbers.splice (3, 1) - Erase 1 item after 3rd index
// numbers.lenght = 0; - Emptying an Array


// const first = [1, 2, 3];
// const secon = [4, 5, 6];

// const combined = first.concat(second);
// console.log(combined); - to combine two array

// const slice = combined.slice(2,4);
// console.log(slice); - to slice from index 2 to 4 / Cropping

// In ES6, there is spread operator to combine items:***********

// const combined = [...first, ...second]; ***** with this, we can add new item to new array like:
// const combined = [...first, 'a', ...second, 'b'];


//////////////////////Reference Type Find////////////////////

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// const course = courses.find(function (course) {
//     return course.name === 'a';
// })

// console.log(course);


// ///In ES6

// //Code can be like that (this is called ArrowFunction):

// const course = courses.find(course => course.name === 'a');

// console.log(course);

/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////

// //FOREACH METHOD

// const numbers = [1, 2, 3]

// for (let number of numbers)
//     console.log(number);

// numbers.forEach(number => console.log(number))

/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

/// Joining Arrays - To join array items in a line

// const numbers = [1,2,3];
// const joined = numbers.join(',');
// console.log(joined)

/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

//SORTING OBJECTS

// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'javaScript' },
// ];

// courses.sort(function(a,b) {
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();

//     if (nameA<nameB) return -1;
//     if (nameA>nameB) return 1;
//     return 0;
// });

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////

//Every and Some Methods

// const numbers = [1, -1, 2, 3];

// const allPositive = numbers.every(function (value) {
//     return value >= 0;
// });

// console.log(allPositive)

// const numbers = [1, -1, 2, 3];

// const atLeastOnePositive = numbers.some(function (value) {
//     return value >= 0;
// });

// console.log(atLeastOnePositive)

// With Arrow Function

// const numbers = [1, -1, 2, 3];
// const atLeastOnePositive = numbers.some(value => value >= 0);
// console.log(atLeastOnePositive)

////////////////////////////////////////////////////////////// 

//////////////////////////////////////////////////////////////

//Filtering an Array

// const numbers = [1, -1, 2, 3];
// const positiveFilter = numbers.filter(value => value >= 0);
// console.log(positiveFilter);

//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////

// Mapping an Array

// const numbers = [1, -1, 2, 3];
// const positiveFilter = numbers.filter(n => n >= 0);
// const items = positiveFilter.map(n => '<li>' + n + '</li');
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);


// const numbers = [1, -1, 2, 3];
// const positiveFilter = numbers.filter(n => n >= 0);
// const items = positiveFilter.map(n => ({ value: n }));
// console.log(items);

//We dont need to create another const. We can chain them like that. With this we can also change an array to object and object to array endlesly:

// const numbers = [1, -1, 2, 3];

// const items = numbers
//     .filter(n => n >= 0)
//     .map(n => ({ value: n }))
//     .filter(obj => obj.value > 1)
//     .map(obj => obj.value);

// console.log(items);

//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////

//Reducing an Array

// const numbers = [1, -1, 2, 3];

// // let sum = 0;
// // for (let n of numbers)
// //     sum += n;
// // console.log(sum)

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(sum)

//////////////////////////////////////////////////////////////


// const numbers = arrayFromRange(-10, -4);
// console.log(numbers);

// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i = min; i <= max; i++)
//         output.push(i);
//     return output;
// }
////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4];

// // console.log(numbers.includes(1))

// function includes(array, searchElement) {
//     for (let key of array) {
//         if (key === searchElement)
//             return true;
//         return false;
//     }
// };

// console.log(includes(numbers, 6))

////////////////////////////////////////////////////




// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 1, 1);

// console.log(output);

// function move(array, index, offset) {
//     const position = index + offset;
//     if (position >= array.length || position < 0) {
//         console.error('Invalid offset.');
//         return;
//     }
//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(index + offset, 0, element);
//     return output;
// }


/////////////////////////////////////////////////////


// const numbers = [1, 2, 3, 4, 1, 1];
// const count = countOccurences(numbers, 1)
// console.log(count)

// function countOccurences(array, searchElement) {
//     //     let output = 0;
//     //     for (let key of array)
//     //         if (key === searchElement)
//     //             output++
//     //     return output
//     // }

//     return array.reduce((accumulator, current) => {
//         const occurence = (current === searchElement) ? 1 : 0;
//         return accumulator + occurence;
//     }, 0);
// }

// const numbers = [21, 2, 3, 4, 20, 18]
// const max = getMax(numbers);
// console.log(max);

// function getMax(array) {
//     if (array.lenght === 0) return undefined;
//     array.reduce((a, b) => (a > b) ? a : b);
// }

// // function getMax(array) {
// //     let sorted = array.reverse()
// //     return sorted[0]
// // }

// // function getMax(array) {
// //     if (array.lenght === 0) return undefined;

// //     return array.reduce((accumulator, current) => {
// //         let max = 0;
// //         let maxNumber = (current > array[0]) ? max = current : max = array[0];
// //         return max
// //     }, 0);
// // }

