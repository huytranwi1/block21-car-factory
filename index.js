// create a class Car
class Car {
    //constructor function that will take in make, model, year
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // create a given methods getDescription that return string
    getDescription() {
        return `This car make is ${this.make}, it is ${this.model}, year ${this.year} `
    }
}

// create a subclass of car as ElectricCar with the key word extends
class ElectricCar extends Car{
    // constructor function that inherit main class Car with use of super
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }
    
    // method for subclass
    getDescription() {
        return `${super.getDescription()}, with ${this.range} range.`
    }
   
}

// new instance of the ElectricCar subclass with outputs
const electricCar1 = new ElectricCar("Tesla", "Model S", 2019, 300);

// calling the subclass methods and console
console.log(electricCar1.getDescription());