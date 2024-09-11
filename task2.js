function sendNotification(email) {
    if(!email.includes("@")){
        return "Invalid Email";
    }
    let x = email.split("@").join(" sent you an email from ");
    return x;
}
const result = sendNotification( "zihad@gmail.com");
console.log(result);

