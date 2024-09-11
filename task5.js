function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input" ;
    }
    if(waitingTimes.length > serialNumber){
        return "Serial number should be greater than the length of array";
    }
    let sum = 0;
    for(let time of waitingTimes){
        sum += time;
    }
    let avg = sum / waitingTimes.length;
    let roundedAvg = Math.round(avg);
    let x = serialNumber - 1;
    let y = x - waitingTimes.length;
    let waitTime = roundedAvg * y ;
    return waitTime ;
}
const result = waitingTime([7, 8, 3, 4, 5], 2);
console.log(result);
