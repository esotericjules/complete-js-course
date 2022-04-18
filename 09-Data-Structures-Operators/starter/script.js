'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Lagos',
//   mainIndex: 2,
//   starterIndex: 2,
// });

restaurant.orderDelivery({
  address: 'Lagos',
  starterIndex: 2,
});

//DESTRUCTURING
const numArr = [2, 3, 4];
const [x, y, z] = numArr;

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//old way of switching variables
// const temp = main;
// main = secondary;
// secondary = main;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function.
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log('starter, main', starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
// console.log('i , j', i, j);

const [i, , [j, k]] = nested;
console.log('i , j', 'k', i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//DESTRUCTING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//OBJECT DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 30;
let b = 356;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//SPREAD OPERATOR
// Spread is used where we write values seperated by commas
//Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
const arr = [7, 8, 9];
const brandNewArr = [1, 2, arr[0], arr[1], arr[2]]; // pre-es6
console.log(brandNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

//iterables are arrays, strings, map and sets but not object

// 1.) DESTRUCTING SPREAD & REST
//SPREAD, because on RIGHT side of =
const arr2 = [1, 2, ...[3, 4]];

//Rest is used where we write variable names seperated by commas
//REST  because on LEFT side of =, It collects elements that are unused in the destructuring assignment
const [u, v, ...others] = [1, 2, 3, 4, 5];
console.log(u, v, others);

//The rest element must be the last element, for this reason there can only be one rest in a destructuring assignment
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// REST IN OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2.) FUNCTIONS
const add = function (...numbers) {
  return numbers.reduce((prevVal, currVal) => {
    return prevVal + currVal;
  }, 0);
};

console.log(add(2, 3));
console.log(add(82, 3, 4));
console.log(add(9, 60, 2, 3));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
