//  Task 01 on Hacker rank 
function HackerRank(secondInteger){
    const firstInteger = 4;
    console.log(parseInt(secondInteger) + firstInteger)
}
// HackerRank("6");
function HackerRank2(secondDecimal){
    const firstDecimal = 4.0;
    console.log(parseFloat(secondDecimal) + firstDecimal)
}
//  HackerRank2("4.32");
function HackerRank3(secondString){
    const firstString = 'HackerRank ';
    console.log(firstString + secondString )
}
//  HackerRank3("is the best place to learn and practice coding!");
 
function getArea(length, width) {
    let area;
    // Write your code here
    if(length,width >= 1 <= 1000){
        return area = length*width; 
    }
    
    return area;
}
// console.log(getArea(3,4.5));
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    if(length,width >= 1 <= 1000){
        return perimeter = 2*(length+width); 
    }
    return perimeter;
}
// console.log(getPerimeter(3,4.5));
function getfactorial(n){
    let factorial = 1;
    for(let i = 1; i <= n ; i++){
        factorial = factorial * i ;
    }
    return factorial;
}
//  console.log(getfactorial(5));
// recursion factorial
// let fac = 1;
// function factorial1(i){
//     if (i==1){
//         return 1;
//     }
//     return i * factorial1(i-1);
// // 


// recursive fibonacci

function fibo (i){
    if (i==0){
        return 0
    }
    else if (i==1){
        return 1;
    }
    return fibo(i)= fibo(i-1) + fibo(i-2)
}
// console.log(fibo(6))