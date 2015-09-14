function getVehicle(){

  var vehicleType = document.getElementById('vehicle');

  if (vehicle === null || vehicle === undefined) {

    alert('Please enter a vehicle');

  } else {

    vehicleFactory(vehicleType);

  }

}

function vehicleFactory(vehicle) {

  if (vehicle === '') {

    alert('Please enter a vehicle');

  } else if (vehicle.toLowerCase === 'car' ) {

    var newCar = new Vehicle('car', 'standard', 'white', 'fourCynlinder', 'auto', 'standard', 'standardTrunk');
    document.getElementById("output").innerHTML = "<textarea name='result' style='border:0px;text-align:center' border='0' rows = '6' cols = '50'></textarea><br/><input type='reset' value='Reset' />";
    return newCar;

  } else if (vehicle.toLowerCase === 'truck') {

    var newTruck = new Vehicle('truck', 'standard', 'white', 'fourCynlinder', 'auto', 'standard', 'standardCargoBed');
    return newTruck;

  } else if (vehicle.toLowerCase === 'truck') {

    var newMinivan = new Vehicle('minivan', 'standard', 'white', 'fourCynlinder', 'auto', 'standard', 'standardRearDoor');
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

  Vehicle.call(this, name, chassis, color, engine, transmission, tires);

  this.trunk = trunk;

}

function Truck(name, chassis, color, engine, transmission, tires, trunk) {

  Vehicle.call(this, name, chassis, color, engine, transmission, tires);

  this.cargoBed = cargoBed;

}

function Minivan(name, chassis, color, engine, transmission, tires, trunk) {

  Vehicle.call(this, name, chassis, color, engine, transmission, tires);

  this.rearDoor = rearDoor;

}
