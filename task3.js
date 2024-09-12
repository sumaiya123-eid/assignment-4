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

