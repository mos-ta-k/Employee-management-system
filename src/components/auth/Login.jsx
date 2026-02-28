import { useState } from 'react'
import '../styles/login.min.css'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("fhaaaaaaaaa!!")
        console.log("Your form is submitted");

        setEmail("")
        setPassword("")
        setMessage("fahhhhh!! form submitted!")
    }
      
  return (   
    <div className="login-page">
      <div className="login-container">

    <form className="login-form"
    onSubmit={(e)=>{
        submitHandler(e);
    }}
    >
        <h2>Login</h2>
        <div className="input-box">
            <input type="email" required
                value = {email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            />
            <label>Email</label>
        </div>

        <div className="input-box">
            <input type="password" required 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            />
            <label>Password</label>
        </div>

        <button className='login-button' type="submit">Login</button>

        {message && <p className="success-msg">{message}</p>}

    </form>

      </div>
    </div>
  )
}

export default Login