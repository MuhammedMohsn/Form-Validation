import { useState } from 'react'

function useForm(validateinfo) {
    let [errors, setErrors] = useState({})
    let [showSuccessSubmit, setShowSuccessSubmit] = useState(false)
    let [inputValues, setInputValues] = useState(
        { firstName: "", lastName: "", email: "", password1: "", password2: "" })

    let changeHandler = (e) => {
        let { name, value } = e.target
        setInputValues({ ...inputValues, [name]: value })
    }
    let submitHandler = (e) => {
        e.preventDefault();
        setErrors(validateinfo(inputValues))
        setShowSuccessSubmit(true)
        if (Object.values(errors).every(error => error == "")) {
            setInputValues({ firstName: "", lastName: "", email: "", password1: "", password2: "" })

        }
    }

    return { inputValues, changeHandler, submitHandler, errors, showSuccessSubmit }
}

export default useForm