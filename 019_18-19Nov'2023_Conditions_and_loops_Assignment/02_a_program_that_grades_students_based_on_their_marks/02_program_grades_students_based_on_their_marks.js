// A program  that grades students based on their marks

let grade = 75;

if(grade >= 90){
    console.log(`student score : ${grade} Grade Obtain A`)
}else if(grade >= 70 && grade <90 ){
    console.log(`student score : ${grade} Grade Obtain B`)
}else if(grade >= 50 && grade <70 ){
    console.log(`student score : ${grade} Grade Obtain C`)
}else if(grade <50 ){
    console.log(`student score : ${grade} Grade Obtain F`)
}