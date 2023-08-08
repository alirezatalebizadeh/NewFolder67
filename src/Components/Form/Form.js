import React, { useState, useEffect } from "react";
import "./Form.css";
import UseInput from "./UseInput";

export default function Form() {

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])

    const [firstValue, firstValueBinding, resetValueFirstname] = UseInput('')
    const [lastNameValue, lastNameValueBinding, resetValueLastName] = UseInput('')
    const [email, emailBinding, resetValueEmail] = UseInput('')



    //!create user and save in db
    const registerHandler = event => {
        event.preventDefault()
        alert(`hello ${firstValue} ${lastNameValue}`)
        resetValueEmail()
        resetValueFirstname()
        resetValueLastName()

        // let userInfo = {
        //     firstName,
        //     lastName,
        //     email
        // }

        // fetch('https://sabzlearn-3f278-default-rtdb.firebaseio.com/users.json', {
        //     method: 'POST',
        //     body: JSON.stringify(userInfo)
        // }).then(response => console.log(response))
    }

    return (
        <div className="form-container">
            <form className="register-form" autoComplete="off" onSubmit={registerHandler}>
                <input
                    id="first-name"
                    {...firstValueBinding}
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                />
                <input
                    id="last-name"
                    {...lastNameValueBinding}
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                />

                <input
                    id="email"
                    value={email}
                    {...emailBinding}
                    className="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                <button className="form-field" type="submit">
                    Register
                </button>
            </form>
        </div>

    )
}