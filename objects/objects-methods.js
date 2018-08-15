//a method is just a OBJECT property(key) whose VALUE is a function
let restaurant = {
  name: 'Wilson\'s Coffee',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft  
  },
  seatParty: function (partySize) {
    return this.guestCount += partySize
  },
  removeParty: function (partySize) {
    return this.guestCount -= partySize
  }
}


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))