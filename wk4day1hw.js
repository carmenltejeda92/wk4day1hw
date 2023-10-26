/*  Author: C. Tejeda
    Date: 10.23.2023
    Purpose: Creating a Hamster class to practice creating classes & factories */


class Hamster{
    constructor(_name){
        this.name = _name
    }

    owner = ''
    price = 15

    wheelRun(){
        console.log("squeak, squeak")
    }

    eatFood(){
        console.log("nibble, nibble")
    }

    getPrice(){
        return this.price
    }

}

// console.log(cupid)
// cupid.getPrice()




class Person{
    constructor(_name){
        this.name = _name
    }

    age = 0
    height = 0
    weight = 0
    mood = 0
    hamsters = []
    bankAccount = 0

    setAge(age){
        for(let i=0; i<age; i++){
            this.ageUP()
        }
    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getWeight(){
        return this.weight
    }

    greet(name){
        console.log('Hello, ' + name + '!')
    }

    eat(){
      this.weight++
      this.mood++
    }

    exercise(){
        this.weight--
    }

    ageUP(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }

    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood +=10
        this.bankAccount -= hamster.getPrice()
        console.log(this.hamsters)
    }
}

const carmen = new Person('carmen')

//2.
carmen.age = 5

//3.
for(let i=0; i <=5; i++){
    carmen.eat()
}

//4.
for(let i=0; i <=5; i++){
    carmen.exercise()
}

//5.
carmen.age = 9

//6.
const cupid = new Hamster('cupid')

//7.
cupid.owner = carmen.getName()

//8.
carmen.buyHamster(cupid)

//9
carmen.age = 15

//10.
for(let i=0; i <=2; i++){
    carmen.eat()
}

//11.
for(let i=0; i <=2; i++){
    carmen.exercise()
}



console.log(carmen)
// carmen.getAge(71)
// carmen.greet('Carmen')
// carmen.eat(10)















