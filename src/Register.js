import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import Header from './Header';
function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    function signUp() {
        let data = { name, password, email }
        console.log(data);
        fetch("http://localhost:8080/register", {
            method: 'POST',
            headers: {
                'Accept': 'aaplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result);
            localStorage.setItem("user-info", JSON.stringify(data));
            navigate('/addproduct');
        })

    }
    return (
        <>
            <Header />
            <div class="col-md-6 offset-sm-3">
                <h1>Register Page</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control' /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='form-control' /><br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control' /><br /><br />
                <button onClick={signUp} className="btn-btn-primary">Register</button>
            </div>
        </>
    )
}
export default Register;