let driverId = 0
let passagerId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
  }

  trips () {
    store.trips.filter(function(trip) {
      this.driverId === driver.id
    }).bind(this)
  }
}
