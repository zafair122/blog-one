import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost/8800/api/auth/register", inputs)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='Username' name='username' onChange={handleChange} required />
        <input type="email" placeholder='Email' name='email' onChange={handleChange} required />
        <input type="password" placeholder='Password' name='password' onChange={handleChange} required />
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error message!</p>
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register