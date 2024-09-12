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

