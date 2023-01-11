// function to return errors object
function ValidateInfo(inputValues) {
    let errors = {}
    // for validating firstname field
    if (inputValues.firstName==="") {
        errors.firstnameerror = "this FirstName field is required"}
    else {errors.firstnameerror = "" }
    // for validating lastname field
    if (inputValues.lastName==="") {
        errors.lastnameerror = "this Last Name field is required"}
    else { errors.lastnameerror = ""}
    // for validating email field
    if (!inputValues.email) {
        errors.emailerror = "this field is required"
    }
    else if (!(/\w+\d+@gmail.(com|std|org)/ig.test(inputValues.email))) {
        errors.emailerror = "this email is invalid"
    }
    else{  errors.emailerror = ""}
    // for validating password1 field
    if (!inputValues.password1) {
        errors.password1error = "this field is required"
    }
    else if (inputValues.password1.length < 6) {
        errors.password1error = "the password should be greater than 6"
    }
    else{ errors.password1error = ""}
    // for validating password2 field
    if (!inputValues.password2) {
        errors.password2error = "this field is required"
    }
    else if (inputValues.password2!==inputValues.password1){
            if(inputValues.password2.length<6){
               errors.password2error = "the password should be greater than 6"}
            else{ errors.password2error = "the passwords do not match"}}
        
    else { errors.password2error = ""}
    
    return errors
}

export default ValidateInfo