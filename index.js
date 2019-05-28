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
  }
}

class Trip {
  constructor() {

  }
}
