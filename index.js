const person = {
    firstName: "Kyle",
    lastName: "Kocherhans",
    age: 34,
    favorites: {
        food: "pizza",
        color: "blue",
        movies: {
            movie1: "The Matrix",
            movie2: "Marvel Movies",
            movie3: "V for Vendetta"
        },
        artists: ["Muse", "Radiohead"]
    },
    greeting: (myVar) => {
        console.log(`The variable is ${myVar}`);
    }
};

// access individual values

console.log(person['lastName'])
console.log(person.lastName)


// reassign values 

person.age = 31
console.log(person)


// add key-value pairs

person.height = `5' 10''`
console.log(person)


// access/manipulate nested values

console.log(person.favorites.color)
console.log(person.favorites.movies.movie2)
person.favorites.artists.push('Shinedown')
console.log(person.favorites.artists)


// loop over object

for(let prop in person){
    console.log(`The property ${prop} is ${person[prop]}`)
}

person.greeting("SOMETHING");


class Animal {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }

    greeting() {
        console.log(`Hi, I am a ${this.species} and my name is ${this.name}.`);
    }
}

let sheba = new Animal("Sheba", "cat", "small");

console.log(sheba);
sheba.greeting();

class Dog extends Animal {
    constructor(name, species, size, isHairy) {
        super(name, species, size);

        this.isHairy = isHairy;
    }
}

let scout = new Dog("Scout", "small dog", "tiny", "yes");

console.log(scout);
scout.greeting();