class Spaceship {
  constructor(name, crew = [], phasers = 5, shields = 4) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'

    if (this.crew.length > 0){
      this.docked = false
    } else {
      this.docked = true
    }

    this.crew.forEach(crewMember => {
      crewMember.currentShip = this
    }, this)
  }
}