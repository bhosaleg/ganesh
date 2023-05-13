import { useState,axios } from "react";
import {  Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

async function submit(e) {
    e.preventDefault();
    try {
        await axios.post("http://localhost:8000/signup", {
            email: Email, 
            password: Password
        })
        .then(res => {
            if (res.data === "exist") {
                alert("User already exists")
            }
            else if (res.data === "notexist") {
                history.push("/home", { state: { id:Email } })
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




function login() {

    const history = useNavigate();

    // const [emails, setEmail] = useState('')
    // const [Passwords, SetPassword] = useState('')

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/", {
                email, Password 
            })
            .then(res => {
                if (res.data === "exist") {
                    history("/home", { state: { id: emails } })
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

            <form action="post">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name="id" />
                <input type="Password" onChange={(e) => { SetPassword(e.target.value) }} placeholder="SetPassword" name="id" />
                <input type="submit" onClick={submit} />
            </form>
            <br />
            <p>OR</p>
            <br />
            {/* <Link to="/signup">signup page</Link> */}
            <Link to="/signup">signup page</Link>
        </div>
    )
}

export default Home;