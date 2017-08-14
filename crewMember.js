
class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = "Looking for a Rig"
  }
 
  sayHello() {
    console.log("Hello, my name is "+ this.name)
  }

  engageWarpDrive(){
    if (typeof this.currentShip === "string" || this.position != "Pilot"){
      return 'had no effect'
    } else {
        this.currentShip.warpDrive = 'engaged!'
    }
  }
  setsInvisibility(){
    if (typeof this.currentShip === "string" || this.position != "Defender"){
      return 'had no effect'
    } else {
        this.currentShip.cloaked = true
    }
  }
  chargePhasers(){
    if (typeof this.currentShip === "string" || this.position != "Gunner"){
      return 'had no effect'
    } else {
        this.currentShip.phasersCharge = 'charged!'
    }
  }
}