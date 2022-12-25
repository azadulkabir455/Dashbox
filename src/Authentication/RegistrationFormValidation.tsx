
import {errInputsType, inputsType} from "../assets/TsType/TypeScriptTypes"

const RegistrationFormValidation = (inputs: inputsType) => {

    let errMsg = {
        errName: "Hi",
        errPhone: "Hi",
        errEmail: "Hi",
        errUsername: "Hi",
        errPassword: "Hi",
        errConfirmPassword: "Hi"
    } as errInputsType;
    

    if (!inputs.name) {
        errMsg.errName = "Name must be provided"
    } else if (inputs.name.length < 4 && inputs.name.length >= 0) {
        errMsg.errName = "Name must be at lest 4 charecter"
    } else {
        errMsg.errName = "";
    }

    if (!inputs.email) {
        errMsg.errEmail = "Email must be provided"
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
        errMsg.errEmail = "Email is not valid";
    } else {
        errMsg.errEmail = "";
    }

    if (!inputs.phone) {
        errMsg.errPhone = "Phone must be provided"
    } else if (!/^\d+$/.test(inputs.phone)) {
        errMsg.errPhone = "Phone contact  must be number";
    } else if (inputs.phone.length < 10) {
        errMsg.errPhone = "Phone number is must be 11 character"
    } else {
        errMsg.errPhone = ""
    }
    if (!inputs.username) {
        errMsg.errUsername = "User Name must be provided"
    } else if (!/[A-Za-z]\d/.test(inputs.username)) {
        errMsg.errUsername = "Must combine with text and number"
    } else if (inputs.username.length < 6) {
        errMsg.errUsername = "Must be contain 6 character or more"
    } else {
        errMsg.errUsername = ""
    }

    if (!inputs.password) {
        errMsg.errPassword = "Password must be provided"
    } else if (inputs.password.length < 6 || inputs.password.length >= 14) {
        errMsg.errPassword = "Password Must 6 to 14 character"
    } else {
        errMsg.errPassword = ""
    }

    if (!inputs.confirmPassword) {
        errMsg.errConfirmPassword = "Confirm password must be provided"
    } else if (inputs.confirmPassword !== inputs.password) {
        errMsg.errConfirmPassword = "Password not match"
    } else {
        errMsg.errConfirmPassword = ""
    }
    return {errMsg};
}

export default RegistrationFormValidation;
