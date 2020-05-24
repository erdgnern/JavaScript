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

// //Constructor Function Style

// function ShowAddress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipCode;
// }

// const address = new ShowAddress('a', 'b', 'c')
// console.log(address)

///////////////////////////////////////////////////

///////////////////////////////////////////////////

// FOR AND WHILE LOOPS

// for (let i = 1; i <= 5; i++)
//     if (i % 2 !== 0) console.log(i) // for the odds
//     if (i % 2 === 0) console.log(i) // for the evens

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

///////////////////////////////////////////////////

///////////////////////////////////////////////////

// FIZZBUZZ

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

//////////////////////////////////////////////////

//////////////////////////////////////////////////

// TICKET AUTOMATION

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

//////////////////////////////////////////////////

//////////////////////////////////////////////////

// GRADE CALCULATION

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

///////////////////////////////////////////////////

///////////////////////////////////////////////////

// DISPLAYING STARS FUNCTION

// showStars(5)

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 0; i < row; i++)
//             pattern += '*';
//         console.log(pattern);
//     }
// }

///////////////////////////////////////////////////

///////////////////////////////////////////////////

//PRIME NUMBER LISTER

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

////////////////////////////////////////////////////

////////////////////////////////////////////////////

// OBJECT COPYING

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// //const another = Object.assign({}, circle); -- with Adding option 

// const another = { ...circle }; -- without Adding option

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////

//EQUALITY AND SAME CHECK

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

// Note: Objects which are created by new command, they are equal but not the same object; however, if an object was created like address3 = address1, then they are both equal and same.

///////////////////////////////////////////////////////

///////////////////////////////////////////////////////

////////FOREACH METHOD

// const numbers = [1, 2, 3]

// for (let number of numbers)
//     console.log(number);

// numbers.forEach(number => console.log(number))

///////////////////////////////////////////////////////

///////////////////////////////////////////////////////

// Array from Range Example

// const numbers = arrayFromRange(-10, -4);
// console.log(numbers);

// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i = min; i <= max; i++)
//         output.push(i);
//     return output;
// }

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////

// Exception Check Example

// const numbers = [1, 2, 3, 4, 1, 1];
// const output = except(numbers, [2])
// console.log(output);

// function except(array, excluded) {
//     const output = [];
//     for (let key of array)
//         if (!excluded.includes(key))
//             output.push(key);
//     return output;
// }

/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

//Moving and Erasing Example

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

///////////////////////////////////////////////////////

//Count Occurences

// const numbers = [1, 2, 3, 4, 1, 1];
// const count = countOccurences(numbers, 1)
// console.log(count)

    //First Solution

// function countOccurences(array, searchElement) {
//     let output = 0;
//     for (let key of array)
//         if (key === searchElement)
//             output++
//     return output
// }

    //Second Solution

// function countOccurences(array, searchElement) {   
//     return array.reduce((accumulator, current) => {
//         const occurence = (current === searchElement) ? 1 : 0;
//         return accumulator + occurence;
//     }, 0);
// }