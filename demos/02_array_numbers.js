//COLLECTIONS PT1 ARRAYS AKA lists
const subtotals = [12, 21, 33] //create literal array 
console.log("LAST:", subtotals[subtotals.length-1]);

subtotals.push(300); //put one more in this stack

let grandTotal = 0;

//how to add each one to the total? 

for(let i=0; i < subtotals.length; i++){
    const value = subtotals[i]; //extra value
    grandTotal += subtotals[i] //increse by value
    console.log(i, subtotals[i], grandTotal) //display
}

console.log("TOTAL:", grandTotal); //366