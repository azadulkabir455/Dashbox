import {loginInputsType, loginErrType} from "../assets/TsType/TypeScriptTypes"

const LoginFormValidation = (inputs:loginInputsType) => {

    let errorMsg = {
        errorEmail:"",
        errorPassword:""
    } as loginErrType;

    if (!inputs.email) {
        errorMsg.errorEmail = "Must be provided email"
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
        errorMsg.errorEmail = "Email is not valided"
    } else {
        errorMsg.errorEmail = ""
    }

    if (!inputs.password) {
        errorMsg.errorPassword = "Must be provided password"
    } else if (inputs.password?.length < 6 && inputs.password?.length > 0) {
        errorMsg.errorPassword = "Password must be 6 charecter or more"
    } else {
        errorMsg.errorPassword = ""
    }
    return {errorMsg};
}

export default LoginFormValidation;