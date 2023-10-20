/*check if the given number is odd or even */

let a=prompt("enter the value")
let value=(num)=>{
    if(num%2!=0){
        return `Odd no`
    }
    else if(num%2==0){
        return `Even no`
    }
}
console.log(`The given no is: ${value(a)}`); 
