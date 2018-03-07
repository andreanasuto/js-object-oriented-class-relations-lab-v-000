let driverId = 0
let passagerId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.name = name
    this.id = driverId++
    store.drivers.push(this)
    }

    trips() {
      const driverId = this.id
      return store.trips.filter(function (element) {
        return element.driverId === driverId
      })
    }

    passengers() {
      return this.trip().map(trip => {
        return trip.passenger
      })
      }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = passagerId++
    store.passengers.push(this)
  }

  trips() {
    const passengerId = this.id
    return store.trips.filter(function (element) {
      return element.passengerId === passengerId
    })
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver()
     })
  }
}


class Trip {
  constructor(driver, passenger) {
    this.passengerId = passenger.id
    this.driverId = driver.id
    this.id = tripId++
    store.trips.push(this)
  }
  driver() {
    const driverId = this.driverId
    return store.drivers.find(function(element) {
      return element.id === driverId
    })
  }

  passenger() {
    const passengerId = this.passengerId
    return store.passengers.find(function (element) {
      return element.id === passengerId
    })
  }
}
