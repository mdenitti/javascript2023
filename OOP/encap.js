// OOP ENCAPSULATION
class Alien {
    #birthYear // We first need to declare the private property, always using the '#' symbol as the start of its name.
    name;
    phrase;
    power;
    speed;
    species;

    constructor (name, phrase, power, speed, birthYear) {
        this.name = name;
        this.phrase = phrase;
        this.power = power;
        this.speed = speed;
        this.species = "alien"
        this.#birthYear = birthYear // Then we assign its value within the constructor function
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    howOld = () => console.log(`I was born in ${this.#birthYear}`) // and use it in the corresponding method.
}
    
// We instantiate the same way we always do
const alien1 = new Alien("Ali", "i am sentient Q*", 10, 50, 10000)

alien1.howOld();