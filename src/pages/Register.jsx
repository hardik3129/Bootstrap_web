import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const  navigate = useNavigate()

    const OnsubmitRegister = async(e) => {
        e.preventDefault()
        if (e.target.terms_conditon.checked === true) {
            const data = {
                name : e.target.name.value,
                email : e.target.email.value,
                password : e.target.password.value,
            }
            await axios({
                method : 'POST',
                url : `${process.env.REACT_APP_BASE_URL}/users`,
                data
            })
            navigate('/')
        }
    }
    
  return (
    <form className='col-md-6 container bg-dark text-light p-4 my-5 rounded' onSubmit={OnsubmitRegister}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group form-check">
            <input type="checkbox" name='terms_conditon' className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
    </form>
  )
}

export default Register
