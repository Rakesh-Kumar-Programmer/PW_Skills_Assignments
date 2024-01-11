// Curry function

function add(a){
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}
/**
let two = add(2)
let three = two(3)
let four = three(4)
**/                           // or use another way

console.log(`this is total sum of three given number in curry function ${add(2)(3)(4)}`)    // add 2+3+4 =9