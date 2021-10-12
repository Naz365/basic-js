function seerToMon(seer) {
    // review the input type where is it number or not  
   if(typeof seer != "number"){
       return "Please enter a number"
   }
   // review the input is <= 0 or not 
   else if( seer <= 0 ){
    return "Please enter a positive number"
   }
    return seer*0.025; //return the output
}
//  console.log(seerToMon(2));


function totalSales(Shirt,Pant,Shoes){
    let  perShirt = 100; // t-shirt price
    let perPant = 200; // pant price
    let perShoes = 500; // Shoes price
    // review the input type where is it number or not
    if(typeof Shirt != "number" ||typeof Pant != "number" ||typeof Shoes != "number"){
        return "Please enter a number"
    }
    // review the input is <= 0 or not 
    else if(Shirt < 0 || Pant < 0 || Shoes < 0){
     return "Please enter a positive number"
    }
    
   else {
        return (perShirt*Shirt) + (perPant*Pant) + (perShoes*Shoes) //return the output
    }
    
}
//  console.log(totalSales(2,3,2)) 

function deliveryCost (tShirt){


    const deliveryCost1stPertShirt = 100; // when oder shirt <= 100
    const deliveryCost2ndPertShirt = 80; // when oder shirt > 100 <= 200
    const deliveryCostrestPertShirt = 50; // when oder shirt > 200 
    let  restLotforShirt ;

     // review the input type where is it number or not  
    if(typeof tShirt != "number"){
        return "Please enter a number"
    }
    // review the input is <= 0 or not 
    else if( tShirt <= 0 ){
     return "Please enter a positive number"
    }

    // check the condition where tShirt value <=100 or not

    else if(tShirt <=100 ){
        restLotforShirt = tShirt*deliveryCost1stPertShirt; //multiply for the output
        return restLotforShirt; //  return the output
    }
    // check the condition where tShirt value > 100 and <= 200 or not
    else if(tShirt > 100 && tShirt <= 200){
    var firstLottShirt = 100*deliveryCost1stPertShirt ; //multiply for the output
         restLotforShirt = tShirt - 100; //subtract the value from output 01  
       var secondLottShirt = restLotforShirt*deliveryCost2ndPertShirt;//multiply
    var deliveryCostforSecondLot =  firstLottShirt + secondLottShirt; // adding the value 
        return deliveryCostforSecondLot; //return the output
    }
    // check the condition where tShirt value > 200 or not
    else {
        const firstLottShirt = 100*deliveryCost1stPertShirt ;//multiply for the output
        const secondLottShirt = 100*deliveryCost2ndPertShirt;//multiply for the output
        restLotforShirt = tShirt - 200; //subtract the value from output 01 and 02
        const restLottShirt = restLotforShirt*deliveryCostrestPertShirt;//multiply
        const deliveryCostforrestLot =  firstLottShirt + secondLottShirt + restLottShirt; // adding the value 
        return deliveryCostforrestLot;//return the output
    }
}
//  console.log(deliveryCost(215));


function perfectFriend (arr){
    let fname = 0;
// review the input type where is it object or not  
    if(typeof arr != "object"){
        return "Please enter an array"
    }
    
    for(var i = 0; i < arr.length; i++){

        if(arr[i].length == 5 ){
          fname = arr[i]; // store the value
             break; // break the condition immediately
        }
        
    }
   return fname //return the output
 }
//  console.log(perfectFriend(["Shawon","Fahima","jonayed","Nazmul","Saeid"]))
function print(){
for (let i=0; i<=3;i++){
     return("print 4 times")
}
}
console.log(print())