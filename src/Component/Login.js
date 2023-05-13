// import React from 'react'

// export const Login = () => {
//   return (
//     <div>Login Page</div>
//   )
// }


import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";

export const Login=()=> {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history("/home", { state: { id: email } })
                    }
                    else if (res.data === "notexist") {
                        alert("User does not exist")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e)

        }
    }

    return (
        <div className="login">
            <h1>login</h1>

            <form>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name="id" />
                <input type="Password" onChange={(e) => { setPassword(e.target.value) }} placeholder="SetPassword" name="id" />
                <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />
            <Link to="/signup">signup page</Link>
        </div>
    )
}

// export default Login;
