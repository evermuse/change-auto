function getVehicle() {

 //debugger;

  var vehicleType = document.getElementById('vehicle').value.toLowerCase();

  if (vehicleType === null || vehicleType === undefined) {

    alert('Please enter a vehicle');

  } else {

    vehicleFactory(vehicleType);

  }

}

function vehicleFactory(vehicleType) {

  debugger;

  if (vehicleType === '') {

    alert('Please enter a vehicle');

  } else if (vehicleType === 'car' ) {

    var newCar = new Vehicle('car', 'standardChassis', 'white', 'fourCynlinder', 'auto', 'standard', 'standardTrunk');
    console.log(document.getElementById('output').innerHTML = 'Congratulations! A ' + newCar.name + ' was created.' + '<br><br>' + Object.keys(newCar));
    return newCar;

  } else if (vehicleType === 'truck') {

    var newTruck = new Vehicle('truck', 'standardChassis', 'white', 'fourCynlinder', 'auto', 'standard', 'standardCargoBed');
    console.log(document.getElementById('output').innerHTML = 'Congratulations! A ' + newTruck.name + ' was created.' + '<br><br>' + Object.keys(newTruck));
    return newTruck;

  } else if (vehicleType === 'minivan') {

    var newMinivan = new Vehicle('minivan', 'standardChassis', 'white', 'fourCynlinder', 'auto', 'standard', 'standardRearDoor');
    console.log(document.getElementById('output').innerHTML = 'Congratulations! A ' + newMinivan.name + ' was created.' + '<br><br>' + Object.keys(newMinivan));
    return newMinivan;

  } else {

    alert('Hmm... can\'t find that vehicle. Please enter \'car\' \'truck\', or \'minivan\'. K-thx!');

  }

}

function Vehicle(name, chassis, color, engine, transmission, tires) {

  this.name = name;
  this._chassis = chassis;
  this._color = color;
  this._engine = engine;
  this._transmission = transmission;
  this._tires = tires;

}

function Car(name, chassis, color, engine, transmission, tires, trunk) {

  Vehicle.call(this, name, chassis, color, engine, transmission, tires, trunk);

  this.trunk = trunk;

}

Car.prototype = Object.create(Vehicle.prototype, {

  constructor : {
    value : Car
  }

});

function Truck(name, chassis, color, engine, transmission, tires, cargoBed) {

  Vehicle.call(this, name, chassis, color, engine, transmission, tires, cargoBed);

  this.cargoBed = cargoBed;

}

Truck.prototype = Object.create(Vehicle.prototype, {

  constructor : {
    value : Truck
  }

});

function Minivan(name, chassis, color, engine, transmission, tires, rearDoor) {

  Vehicle.call(this, name, chassis, color, engine, transmission, tires, rearDoor);

  this.rearDoor = rearDoor;

}

Minivan.prototype = Object.create(Vehicle.prototype, {

  constructor : {
    value : Minivan
  }

});
