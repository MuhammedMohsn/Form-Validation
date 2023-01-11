import {
    useState,
    useEffect
} from 'react'
// custom hook that includes states and handlers
function useForm(validateinfo) {
    let [errors, setErrors] = useState({})
    let [showSuccessSubmit, setShowSuccessSubmit] = useState(false)
    let [inputValues, setInputValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password1: "",
        password2: ""
    })
    // to make input fields empty when successfully submit without errors
     useEffect(() => {
        if (Object.values(errors).every(error => error === "")) {
            setInputValues(prevState => {
                return {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password1: "",
                    password2: ""
                }
            })
        }
    }, [errors, setErrors])
    let changeHandler = (e) => {
        let { name, value} = e.target
        setInputValues(prevState => {
            return {
                ...inputValues,
                [name]: value
            }
        })
    }
    let submitHandler = (e) => {
        e.preventDefault();
        setErrors(prevState => {
            return validateinfo(inputValues)
        })
// to show all data sent successfully after submit without errors
        setShowSuccessSubmit(true)
    }

    return {
        inputValues,
        changeHandler,
        submitHandler,
        errors,
        showSuccessSubmit
    }
}

export default useForm