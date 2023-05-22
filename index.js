class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This car ${this.make} make, is ${this.model} model, and ${this.year} year.`
    }
}

class ElectricCar extends Car{
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }
    
    getDescription() {
        return `${super.getDescription()}, with ${this.range} range.`
    }
   
}


const electricCar1 = new ElectricCar("Tesla", "Model S", 2019, 300);

electricCar1.getDescription();