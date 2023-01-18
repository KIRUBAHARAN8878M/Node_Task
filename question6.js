function validatePassword(password) {
    let upperCase = false;
    let specialChar = false;
    let numeric = false;
    let specialChars = "!@#$&*$";

    for(let i = 0; i < password.length; i++) {
        if(password[i] >= 'A' && password[i] <= 'Z') {
            upperCase = true;
        } else if(specialChars.indexOf(password[i]) !== -1) {
            specialChar = true;
        } else if(!isNaN(password[i])) {
            numeric = true;
        }
    }
    if(upperCase && specialChar && numeric) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}
validatePassword("Password") // Output : Invalid

validatePassword("Test@123") // Output : Valid