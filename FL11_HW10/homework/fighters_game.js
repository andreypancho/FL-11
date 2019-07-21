class Fighter {
    constructor({ name, damage, hp, agility }) {
        this.name = name;
        this.damage = damage;
        this.hp = hp;
        this.agility = agility;
        this.wins = 0;
        this.losses = 0;
    }

    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getAgility() {
        return this.agility;
    }
    getHealth() {
        return this.hp;
    }
    attack(enemy) {
        let maximumChanceOfSuccessfulAttack = 100;
        let enemyAgility = enemy.getAgility();
        let successAttack = Math.round(Math.random() * maximumChanceOfSuccessfulAttack);
        if (successAttack > enemyAgility) {
            let damage = this.getDamage();
            enemy.dealDamage(damage);
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${enemy.getName()}`);
            return;
        } else {
            console.log(`${this.getName()} attack missed`);
            return;
        }
    }
    logCombatHistory() {
        console.log(`Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.losses} `)
    }
    heal(hp) {
        this.hp += hp
        return this.hp;
    }
    dealDamage(hp) {
        if (hp > this.hp) {
            this.hp = 0;
            return this.hp;
        }
        this.hp -= hp
        return this.hp;
    }
    addWin() {
        return this.wins++;
    }
    addLoss() {
        return this.losses++;
    }
}

Object.defineProperty(Fighter, 'name', { writable: false, enumerable: false })

function battle(hero1, hero2) {
    if (hero1.getHealth() === 0) {
        console.log(`${hero1.getName()} is dead and can't fight.`);
        return;
    }
    if (hero2.getHealth() === 0) {
        console.log(`${hero1.getName()} is dead and can't fight.`);
        return;
    }

    let startBattle = true;
    let flag = true;
    // let i = 0;
    while (startBattle) {
        if (flag) {
            hero1.attack(hero2);
            if (hero2.getHealth() === 0) {
                hero1.addWin();
                hero2.addLoss();
                // console.log(i);
                return;
            }
        } else {
            hero2.attack(hero1);
            if (hero1.getHealth() === 0) {
                hero2.addWin();
                hero1.addLoss();
                // console.log(i);
                return;
            }
        }
        flag = !flag;
        // i++;
    }
}