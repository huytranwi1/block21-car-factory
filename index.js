class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This car ${this.make} make, is this ${this.model} model, and this ${this.year} year.`
    }
}

class Tesla extends Car{
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }
    
    getDescription() {
        return `${super.getDescription()}, with ${this.range} range.`
    }
   
}

