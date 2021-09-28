class Vehicle
{
    //Create instances of make, model, year
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //Method to print info on car
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

//Class that inherits from vehicle, extends to add value for doors
class Cars extends Vehicle {
    constructor(make, model, year, doors){
        super(make, model, year)
        this.doors = doors;
    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

//Assigns variable for car with all info
let myCar = new Cars('Ford', 'Fiesta', 2012, 4);
myCar.Information();