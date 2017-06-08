

function VehicleConstructor(name, num_wheels, num_passengers){
    this.name = name;
    this.wheels = num_wheels;
    this.passengers = num_passengers;
    this.makeNoise = function(){
        console.log("toot toot");
    }
}

var Bike = new VehicleConstructor('bicycle', 2, 0);
Bike.makeNoise = function(){console.log("ring ring");}
Bike.makeNoise();

var Sedan = new VehicleConstructor('sedan', 4, 0);
Sedan.makeNoise = function(){console.log("Honk Honk!");}
Sedan.makeNoise();

var Bus = new VehicleConstructor('bus', 6, 1);
Bus.addPassengers = function(pickup_passengers){
    this.passengers += pickup_passengers;
}
Bus.addPassengers(10);
console.log(Bus);