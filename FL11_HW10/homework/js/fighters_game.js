class Fighter {
    constructor({ name, damage, hp, agility }) {
        this.wins = 0;
        this.losses = 0;
        this.setName = (name) => {
            this.name = name;
        }
        this.getName = () => {
            return name;
        }
        this.setDamage = (damage) => {
            this.damage = damage;
        }
        this.getDamage = () => {
            return damage;
        }
        this.heal = (hp) => {
            this.hp = hp;
        }
        this.getHealth = () => {
            return hp;
        }
        this.agility = (agility) => {
            this.agility = agility;
        }
        this.getAgility = () => {
            return agility;
        }
        this.attack = (enemy) => {
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
        this.heal = (heal) => {
            let maxHP = 100;
            if (hp + heal > maxHP) {
                hp = maxHP;
                return hp;
            }
            hp += heal
            return hp;
        }
        this.dealDamage = (damage) => {
            if (damage > hp) {
                hp = 0;
                return hp;
            }
            hp -= damage;
            return hp;
        }
        this.logCombatHistory = () => {
            console.log(`Name: ${name}, Wins: ${this.wins}, Losses: ${this.losses} `)
        }
    }
    addWin() {
        return ++this.wins;
    }
    addLoss() {
        return ++this.losses;
    }
}

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
    while (startBattle) {
        if (flag) {
            hero1.attack(hero2);
            if (hero2.getHealth() === 0) {
                hero1.addWin();
                hero2.addLoss();
                return;
            }
        } else {
            hero2.attack(hero1);
            if (hero1.getHealth() === 0) {
                hero2.addWin();
                hero1.addLoss();
                return;
            }
        }
        flag = !flag;
    }
}