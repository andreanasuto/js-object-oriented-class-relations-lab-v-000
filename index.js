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
    return store.trips.filter(function(trip) {
      return this.driverId === driver.id
    }.bind(this))
  }

  passengers () {
    return store.passagers.filter(function(passanger) {
      return this.trips.filter(function(trip) {
        return this.id === trip.passangerId
      }.bind(passanger))
    }.bind(this))
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passagerId
    this.name = name
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(function(trip){
      return this.id === trip.passagerId
    }.bind(this))
  }

  drivers() {
    return driver.trips().filter(function(trip){
      trip.passagerId === this.id
    }.bind(this))
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
    return store.drivers.find(function(driver){
       return this.driverId === driver.id
    }.bind(this))
    }

  passenger() {
    return store.passengers.find(function(passenger){
      return this.passengerId === passagerId.id
    }.bind(this))
    }
  }
