function sqSum(n){
    let sqsum = 0;
    for(let i=1;i<=n;i++){
    sqsum = sqsum + (i*i);
        
    }
    return sqsum;
}
let result = sqSum(3);
console.log(result);
