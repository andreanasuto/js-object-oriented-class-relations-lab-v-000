let driverId = 0
let passagerId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips () {
    store.trips.filter(function(trip) {
      this.driverId === driver.id
    }).bind(this)
  }

  passengers () {
    store.passagers.filter(function(passanger) {
      this.trips.filter(function(trip) {
        this.tripId === trip.id
      }).bind(passanger)
    }).bind(this)
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passagerId
    this.name = name
    store.passengers.push(this)
  }

  trips() {
    store.trips.filter(function(trip){
      this.id === trip.passengerId
    }).bind(this)
  }

  drivers() {
    store.drivers.filter(function(driver){

    }).bind(this)
    store.trips.filter(function(trip){

    }).bind(this)
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  driver() {
    store.drivers.find(function(driver){
       this.driverId === driver.id
    }).bind(this)
    }

  passenger() {
    store.passengers.find(function(passenger){
      this.passengerId === passenger.id
    }).bind(this)
    }
  }
