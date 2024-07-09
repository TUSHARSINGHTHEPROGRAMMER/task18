// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// function getGrade(score) {
//     return (score >= 90) ? 'A' :
//            (score >= 80) ? 'B' :
//            (score >= 70) ? 'C' :
//            (score >= 60) ? 'D' : 'F';
// }

// console.log(getGrade(85)); // B


// const car = {
//     companyName: 'Toyota',
//     model: 'Corolla',
//     year: 2015
// };

// function changeCarYear(newYear) {
//     car.year = newYear;
// }

// const { model, year } = car;
// console.log(`Model: ${model}, Year: ${year}`); // Model: Corolla, Year: 2015

// changeCarYear(2020);
// console.log(car.year); // 2020


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// const primeNumbers = numbers.filter(isPrime);
// console.log(primeNumbers); // [2, 3, 5, 7]


// map: Used to transform an array by applying a function to each element. For example, squaring all numbers in an array.
// filter: Used to create a new array containing only the elements that pass a specified test. For example, filtering out prime numbers from an array.
// reduce: Used to reduce an array to a single value by applying a function that accumulates the results. For example, summing all the numbers in an array.


// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchData();


const person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345'
    },
    contact: {
        phone: '555-555-5555',
        email: 'johndoe@example.com'
    }
};

console.log(person.contact?.phone); // 555-555-5555

const personWithoutContact = {
    name: 'Jane Doe',
    address: {
        street: '456 Elm St',
        city: 'Othertown',
        zip: '67890'
    }
};

console.log(personWithoutContact.contact?.phone); // undefined
