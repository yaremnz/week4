
//JAVASCRIPT ARRAYS(AKA LISTS)

fruit = [] //array literal

fruit = ["apple", "bannana", "cherry"]
console.log(fruit[2]) //cherry

fruit.push("pear")
fruit.push("orange")
fruit.push("grape")

console.log(fruit.length); //6

console.log(fruit[fruit.length-1]) //last one

console.log(fruit)

console.log(fruit.pop()) //destructive

console.log(fruit[fruit.length-1]) //last one

for(let i=0; i < fruit.length; i++){
    console.log(i, fruit[i])
}


// fruit = array(); //Constructor/Factory fruncttion explicit

// x = 123
// x = number(123)

// d = Date()

// text = "ABC" //String Literal

// text = String("ABC"); //Contructor/Factory Function