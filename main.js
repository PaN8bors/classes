class Pet {
    constructor(name) {
        this.species = null;
        this.name = name;
        this.breed=null;
        this.age=null;
        this.gender=null;
    }

    setName(newName) {
        this.name = newName;
        return this;
    }

    setGender(gender) {
        this.gender = gender;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setBreed(breed) {
        this.breed = breed;
        return this;
    }

    setSpecies(species) {
        this.species = species;
        return this;
    }

    describe() {
        if (this.gender == 'male') {
            console.log(
                `This is my ${this.species} ${this.name}. ` 
                + `He is a ${this.age} year old ${this.gender} ${this.breed}.`
        )} else { 
            console.log(
                `This is my ${this.species} ${this.name}. ` 
                + `She is a ${this.age} year old ${this.gender} ${this.breed}.`
            )
        }
    }
}

function main() {
    const myPet = new Pet('Cooper')
        myPet.setSpecies('dog')
             .setAge('20')
             .setBreed('Shi Tzu')
             .setGender('male')
    myPet.describe();
}

main();