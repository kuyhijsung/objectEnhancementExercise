//ES2015 Refractor - Same keys and values
const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    };
}

//ES2015 Refractor - Computed Property Names
let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//ES2015 Refractor - Object Methods
const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return `${this.firstName} says bye!`;
    }
}

//Write a function which generates an animal object. The function should accepts 3 arguments:
//species: the species of animal(‘cat’, ‘dog’)
//verb: a string used to name a function (‘bark’, ‘bleet’)
//noise: a string to be printed when above function is called(‘woof’, ‘baaa’)
const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}