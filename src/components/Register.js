import React, { useState } from "react";
import "../styles/Register.css";
import axios from "axios";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    // console.log("Name>>>>", name);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    // console.log("Email>>>>", email);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: "POST",
            url: "http://localhost:3001/registrations",
            data: {
                Name: { name },
                Email: { email },
            },
        }).then((response) => {
            if (response.data.status === "success") {
                alert("Message Sent.");
                setEmail("");
                setName("");
            } else if (response.data.status === "fail") {
                alert("Message failed to send.");
            }
        });
    };
    return (
        <div className="register">
            <h1>Register for Saraswati Classes</h1>
            <form className="register__form">
                Name of the Student
                <input type="text" value={name} onChange={handleNameChange} />
                Email Address
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button onClick={handleSubmit}>Register</button>
            </form>
        </div>
    );
}

export default Register;
