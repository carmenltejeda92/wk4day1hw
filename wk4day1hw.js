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

//1.
const Timmy = new Person('Timmy')

//2.
Timmy.age = 5
Timmy.ageUP()

//3.
for(let i=0; i <=5; i++){
    Timmy.eat()
}

//4.
for(let i=0; i <=5; i++){
    Timmy.exercise()
}

//5.
Timmy.age += 9
Timmy.ageUP()


//6.
const Gus = new Hamster('cupid')

//7.
Gus.owner = Timmy.getName()

//8.
Timmy.buyHamster(Gus)

//9
Timmy.age += 15
Timmy.ageUP()


//10.
for(let i=0; i <=2; i++){
    Timmy.eat()
}

//11.
for(let i=0; i <=2; i++){
    Timmy.exercise()
}

Timmy.ageUP()
console.log(Timmy)
















