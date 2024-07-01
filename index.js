// Code your solution in this file!
let hqStreet = 42;
const feetPerBlock = 264;
 function distanceFromHqInBlocks(street){
  
    let blocks
    blocks = Math.abs(street - hqStreet);
    return  blocks   //returns the number of blocks given a value
 }



function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    let feet = blocks * feetPerBlock;
    return feet;
}
function distanceTravelledInFeet(start,destination){
    let distance_travelled = Math.abs(start - destination);
    let distance_in_feet = distance_travelled * feetPerBlock;
    return distance_in_feet

}
function calculatesFarePrice(start,destination){
   
    let price =0;
    let distance_travelled = Math.abs(start - destination);
    let distance_in_feet = distance_travelled * feetPerBlock;

    if(distance_in_feet <= 400){
        return price;
    }
     if(distance_in_feet > 400 && distance_in_feet <= 2000){
        price = (distance_in_feet - 400 ) * 0.02;
        return price;
     }
     else if(distance_in_feet > 2000 && distance_in_feet <=2500 ){
        price = 25
        return price
     }
     else {
        return 'cannot travel that far'; // Handle distances over 2500 feet
    }
 
     } 