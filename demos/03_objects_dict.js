//OBJECTS - KEYS AND VALUES like words and defs in a dict 
let productCodes = {
    aaa: "Apple", 
    bbb: "Banana",
    ccc: "Cherry"
}

productCodes["ggg"] = "Grape"

// delete productCodes.bbb;
delete productCodes["bbb"];

// accesssing by key by using square brackets
let key = "ggg"
let value = productCodes [key]
console.log(value);

console.log(productCodes.ccc) // cherry, dot-notation

//looping requires a lsit, but we can get a list of keys.
const keyList = Object.keys(productCodes); 
console.log(keyList);
for(let i=0;i<keyList.length;i++){
    const key = keyList[i]; //get the key
    const value = productCodes[key]; // use the key 
    console.log(i, key, value)
}
 const person = {firstName:"Yareli", lastName:"Cerda"}
 person.age = 25; // add new kay value pair using dot-notation

 console.log(person.firstName,person.lastName,person.age);

 function displayPerson(p){
    return `
        ${p.lastName}, ${p.firstName} (${p.age})
    `;
 }

 const dandy ={firstName:"Dandy", lastName:"yankee poodle", age: 3}
 console.log(displayPerson(person)); //pass argument from person
 console.log(displayPerson(dandy));
