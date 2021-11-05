import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { rootContext } from '../../api/context/ContextProvider'

const Login = (props) => {
    const { oAuth } = useContext(rootContext)
    const [auth, setAuth] = oAuth
    const prePath = props.location.state ? props.location.state.from.pathname : '/login'
    const [user, setUser] = useState({ email: '', password: '' })

    const handleInput = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = event => {
        event.preventDefault()
        axios.post('/api/user/login', {
            email: user.email,
            password: user.password
        })
            .then(res => {
                console.log(res.data)
                setAuth({isAuth: true})
            })
            .catch(err => console.log(err))
    }

    if (auth.isAuth) {
        return <Redirect to={prePath} />
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
                                <h2 className="text-center">Welcome Back</h2>
                                <form onSubmit={handleLogin} className="text-left clearfix">
                                    <div className="form-group">
                                        <input name="email" value={user.email} type="email" onChange={handleInput} className="form-control" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" value={user.password} onChange={handleInput} className="form-control" placeholder="Password" required />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-main text-center" >Login</button>
                                    </div>
                                </form>
                                <p className="mt-20">New in this site ?<Link exact to="/register"><a href=""> Create New Account</a></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
