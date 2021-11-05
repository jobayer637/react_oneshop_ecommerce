import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [user, setUser] = useState({
        name: '', email: '', phone: '', password: ''
    })

    const handleInput = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleRegister = event => {
        event.preventDefault()
        axios.post('/api/user/register', {
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: user.password
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <section className="signin-page account">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="block text-center">
                                <a className="logo" href="index.html">
                                    <img src="images/logo.png" alt="" />
                                </a>
                                <h2 className="text-center">Create Your Account</h2>
                                <form onSubmit={handleRegister} className="text-left clearfix">
                                    <div className="form-group">
                                        <input type="text" name="name" onChange={handleInput} className="form-control" value={user.name} placeholder="Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" onChange={handleInput} className="form-control" value={user.email} placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" id="phone" onChange={handleInput} name="phone" className="form-control" value={user.phone} placeholder="Phone" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" onChange={handleInput} className="form-control" placeholder="Password" value={user.password} required />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-main text-center">Sign In</button>
                                    </div>
                                </form>
                                <p className="mt-20">Already hava an account ?<Link exact to="/login"><a href=""> Login</a></Link></p>
                                <p><Link exact to="/forgot-passward"><a href=""> Forgot your password?</a></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register
