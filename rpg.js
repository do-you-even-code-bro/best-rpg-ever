class Hero {
    constructor() {
        this.hitPoints = 100
        this.manaPoints = 500
        this.characterName = "Greg"

    }
    punch(monster) {
        monster.hitPoints -= 100
    }
    burn(monster) {
        if (this.manaPoints > 100) {
            this.manaPoints -= 100
            monster.hitPoints -= 200
        }
    }
}

class Monster {
    constructor() {
        this.hitPoints = 400
        this.manaPoints = 500
        this.characterName = "Bruh"
    }

}

function main() {
    console.log("Best RPG EVER!!!")
    const monster = new Monster()
    const hero = new Hero()

    // punch the monster
    hero.punch(monster)
    //burn the monster
    hero.burn(monster)

    console.log(monster.hitPoints)
}

 main()



 /**
  * 
  * There's a monster dude! What will you do?
  * 
  * 1. Punch it!
  * 2. Burn it with fire!
  * 
  * <message>
  * if the hit points is 0
  * <victory message>
  * else
  * <repeat options>
  */