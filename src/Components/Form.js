import React, { Fragment} from 'react'
import useForm from './useForm'
import ValidateInfo from './ValidateInfo'

function Form() {
  let { inputValues, changeHandler, submitHandler, errors,showSuccessSubmit } = useForm(ValidateInfo)
  let { firstName, lastName, email, password1, password2 } = inputValues
  return (
    <Fragment>
      <form onSubmit={(e) => { submitHandler(e)}} >
      <div className="form_input name">
        <label htmlFor="first_name">First name :</label>
        <input id="first_name" type="text" name="firstName" value={firstName} placeholder="Enter first name" onChange={e => { changeHandler(e) }} />
      </div>
      {errors.firstnameerror && <p className="error">{errors.firstnameerror}</p>}
      <div className="form_input name">
        <label htmlFor="last_name">Last name :</label>
        <input id="last_name" type="text" name="lastName" value={lastName} placeholder="Enter last name" onChange={e => { changeHandler(e) }} />
      </div>
      {errors.lastnameerror && <p className="error">{errors.lastnameerror}</p>}

      <div className="form_input email">
        <label htmlFor="email">Email :</label>
        <input id="email" type="email" name="email" value={email} placeholder="Enter Email" onChange={e => { changeHandler(e) }} />
      </div>
      {errors.emailerror && <p className="error">{errors.emailerror}</p>}
      <div className="form_input password">
        <label htmlFor="password">Password :</label>
        <input id="password" type="password" name="password1" value={password1} placeholder="Enter password" onChange={e => { changeHandler(e) }} />
      </div>
      {errors.password1error && <p className="error">{errors.password1error}</p>}

      <div className="form_input password">
        <label htmlFor="confirmed_password">Confirmed Password :</label>
        <input id="confirmed_passwordpassword" type="password" name="password2" value={password2} placeholder="Repeat password" onChange={e => { changeHandler(e) }} />
      </div>
      {errors.password2error && <p className="error">{errors.password2error}</p>}
      <div className="create_account">
        <button type="submit" >Create account</button>
        <p>Already have an account?</p>
      </div>
    </form>
    {showSuccessSubmit&&Object.values(errors).every(error =>error==="")?<p style={{textAlign: 'center',textWeight: 'bolder',color:"green"}}>All data sent successfully</p>:""}
    </Fragment>
  )
}

export default Form
