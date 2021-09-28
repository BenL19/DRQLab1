class BMI
{
    //Create instances of height and weight
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    //Method to calculate BMI
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

//Assigning the bmi to a variable
let myBMI = new BMI(2, 90);

//Assigning a variable to the calculation method
let calc = myBMI.calculateBMI();

//Printing the answer
console.log(calc);