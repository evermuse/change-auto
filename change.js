function getVehicle() {

  var vehicleType = document.getElementById('vehicle').value.toLowerCase();

  if (vehicleType === null || vehicleType === undefined || vehicleType === '') {

    alert('Please enter a vehicle');

  } else {

    var newVehicle = vehicleFactory(vehicleType);
    console.log(document.getElementById('output').innerHTML = 'Congratulations! A ' + newVehicle.name + ' was created.' + '<br><br>' + Object.keys(newVehicle));

  }

}

function vehicleFactory(vehicleType) {

  if (vehicleType === 'car' ) {

    return new Car('car', 'standardChassis', 'white', 'fourCynlinder', 'auto', 'standard', 'standardTrunk');

  } else if (vehicleType === 'truck') {

    return new Truck('truck', 'standardChassis', 'white', 'fourCynlinder', 'auto', 'standard', 'standardCargoBed');

  } else if (vehicleType === 'minivan') {

    return new Minivan('minivan', 'standardChassis', 'white', 'fourCynlinder', 'auto', 'standard', 'standardRearDoor');

  } else {

    alert('Hmm... can\'t find that vehicle. Please enter \'car\' \'truck\', or \'minivan\'. Thx!');

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

  Vehicle.call(this, name, chassis, color, engine, transmission, tires);

  this.trunk = trunk;

}

Car.prototype = Object.create(Vehicle.prototype, {

  constructor : {
    value : Car
  }

});

function Truck(name, chassis, color, engine, transmission, tires, cargoBed) {

  Vehicle.call(this, name, chassis, color, engine, transmission, tires);

  this.cargoBed = cargoBed;

}

Truck.prototype = Object.create(Vehicle.prototype, {

  constructor : {
    value : Truck
  }

});

function Minivan(name, chassis, color, engine, transmission, tires, rearDoor) {

  Vehicle.call(this, name, chassis, color, engine, transmission, tires);

  this.rearDoor = rearDoor;

}

Minivan.prototype = Object.create(Vehicle.prototype, {

  constructor : {
    value : Minivan
  }

});
