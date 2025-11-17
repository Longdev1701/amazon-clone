class Car{
    brand;
    model;
    speed = 0;
    isTrunkOpen = false;

    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    displayInfo(){
        console.log(`${this.brand} ${this.model} Speed: ${this.speed}`);
    }

    checkSpeed(){
        return this.speed > 0 && this.speed < 200;
    }

    go(){
        if(this.speed >= 0 && this.speed < 200 && this.isTrunkOpen === false){
            this.speed += 5;
        }
    }

    brake(){
        if(this.speed > 0 && this.speed <= 200){
            this.speed -= 5; 
        }

    }

    openTrunk()
    {
        if(this.speed === 0) 
            this.isTrunkOpen === true;
    }

    closeTrunk()
    {   
        return this.isTrunkOpen === false;
    }
}

class RaceCar extends Car{
    acceleration;

    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }
}



const car1 = new Car('Toyota','Corolla');
const car2 = new Car('Tesla','Model 3');
car1.displayInfo();
car2.displayInfo();
car1.brake();
car2.go();
car1.displayInfo();
car2.displayInfo();
car2.closeTrunk();
console.log(car2.isTrunkOpen);


