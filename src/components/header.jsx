import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    useEffect(() => {

    },[])

    const getUserData = async () => {
        await axios({
            method : 'GET',
            url : `${process.env.REACT_APP_BASE_URL}/users`
        })
    }
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light header py-1">
            <div className="container">
            <a className="navbar-brand" href="#">
                <h1 className="text-light fw-bold fs-2">Logis</h1>
            </a>
            <button className="navbar-toggler bg-light type=" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link text-light px-3  active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/about"} className="nav-link text-light px-3 ">About</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/service"} className="nav-link text-light px-3 " tabIndex={-1} aria-disabled="true">Service</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/pricing"} className="nav-link text-light px-3 " tabIndex={-1} aria-disabled="true">Pricing</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/contact"} className="nav-link text-light px-3 " tabIndex={-1} aria-disabled="true">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/register"} className="nav-link text-light px-3 " tabIndex={-1} aria-disabled="true">Register</Link>
                </li>
                </ul>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#login-modal">Sign in</button>
            </div>
            </div>
        </nav>
        {/* ====== SGIN IN MODAL ===== */}
        <div className="modal fade" id="login-modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark text-light">
                <div className="modal-header">
                    <h5 className="modal-title">Sign in</h5>
                    <button className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <form>
                    <input type="email" placeholder="Email" className="form-control my-3" />
                    <input type="password" placeholder="password" className="form-control my-3" />
                    <input type="submit" defaultValue="login" />
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Header
