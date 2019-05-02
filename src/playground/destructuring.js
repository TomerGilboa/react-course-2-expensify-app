// const person = {
//     name: 'Tomer',
//     age: 20,
//     location: {
//         city: 'NYC',
//         temp: 90
//     }
// };

// const { name = 'Anonymous', age } = person;
// const { city, temp: temp2 = 80} = person.location;

// console.log(`${name} is ${age}`);
// console.log(`${city} is ${temp2}`);


const address = ['street', 'city', 'state', 'zip'];

const [ , city, state ] = address;

console.log(`You are in ${city}`);

const item = ['Coffee', '2', '3', '4'];

const [itemName, , med] = item;

console.log(`${itemName} is ${med}`)

