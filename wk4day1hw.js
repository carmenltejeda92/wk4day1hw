/*  Author: C. Tejeda
    Date: 10.23.2023
    Purpose: Creating a Hamster class to practice creating classes & factories */

let owner = ''
let name 
let price = 15

class Hamster{
    wheelRun(){
        console.log("squeak, squeak")
    }

    eatFood(){
        console.log("nibble, nibble")
    }

    getPrice(){
        console.log(price)
    }

}

const cupid = new Hamster()
cupid.getPrice()























