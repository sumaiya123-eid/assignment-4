function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input";
    }
    let difference = income-expenses;
    let tax = difference * .20;
    return tax;
}
const result=calculateTax(6000, -1500);
console.log(result);

