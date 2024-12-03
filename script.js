console.log('Hello World')

let member1 = {
    name: 'Fergus',
    age: 36,
    eye_colour: 'Blue',
    height: "5ft 11inches",
    favorite_food: 'pizza'
};
let member2 = {
    name: 'Grace',
    age: 29,
    eye_colour: 'Blue',
    height: "5ft 4inches",
    favorite_food: 'chocolate'
};
let member3 = {
    name: 'Maddy',
    age: 29,
    eye_colour: 'Blue',
    height: "5ft 7inches",
    favorite_food: 'calzone'
};


// Using the objects you created earlier, log the age within each object to the console (what do you need to remember when using bracket notation with objects?)
// Using the objects you created earlier, log the eye colour within each object to the console
// It's your birthday, woo! 🎉 using either dot or bracket notation (driver's choice), modify the object's age property to be one year older and then log the object to the console to check it has worked

console.log (member1.age)
console.log (member2.age)
console.log (member3.age)

console.log (member1.eye_colour)
console.log (member2.eye_colour)
console.log (member3.eye_colour)


member2.age += 1;
console.log(member2.age)

member1.age += 1;
console.log(member1.age)

member3.age += 1;
console.log(member3.age)
