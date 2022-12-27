import { useState } from "react";
import { Navigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import AuthUser from "./AuthUser";
import Header from "./Header";


function Login()
{
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const {http}= AuthUser();
   
   
    function signIn(){
        // let data=[email, password]
        // console.log(data)
        // console.log("raj")
        // console.log(JSON.stringify(data))
        // let test=(JSON.stringify(data))
       http.post('/login',{email:email,password:password}).then((res)=>{
        // console.log(res.data);
        localStorage.setItem("local_token",res.data.access_token);
        
       })

    }

    return(
        <div>
            <Header />
            <div class="col-md-6 offset-sm-3">
                <h1>Login Page</h1>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control' /><br /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='form-control' /><br />
                <button onClick={signIn} className="btn-btn-primary">Register</button>
            </div>
        </div>
    )
}
export default Login;