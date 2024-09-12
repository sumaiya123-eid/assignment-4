function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input";
    }
    let difference = income-expenses;
    let tax = difference * .20;
    return tax;
}

function sendNotification(email) {
    if(!email.includes("@")){
        return "Invalid Email";
    }
    let x = email.split("@").join(" sent you an email from ");
    return x;
}

function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input";
    }
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    for(let number of numbers){
        let numString = number.toString();
        if(name.includes(numString)){
            return true;
        }
    }
    return false;
}

function calculateFinalScore(obj) {
    if(typeof obj !== "object" || Array.isArray(obj)){
        return  "Invalid Input";
    }
    let finalScore = 0;
    if(typeof obj.isFFamily === "boolean" && obj.isFFamily===true){
        finalScore += 20;
    }
    if(typeof obj.testScore === "number" && obj.testScore<=50){
        finalScore += obj.testScore; 
    }
    if(typeof obj.schoolGrade === "number" && obj.schoolGrade<=30){
        finalScore += obj.schoolGrade;
    }
    if(finalScore>=80){
        return true;
    }
    return false;
}

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