import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast';


function ForgotPassword() {

    const password = Math.random().toString(36).slice(6)
    const form = useRef();

    const handleSendMail = event => {
        event.preventDefault()

        emailjs.sendForm(
            'service_x2q0pcs',
            'template_ho7sfcf',
            form.current,
            'user_5hVbLSRiByeSRaKoSyOY7')
            .then(res => {
                if (res && res.status === 200) {
                    toast.success('goto login page and check email to get OPT', {
                        style: {
                            border: '1px solid #713200',
                            padding: '16px',
                            background: '#333',
                            color: '#fff',
                         },
                        iconTheme: {
                            primary: '#713200',
                            secondary: '#FFFAEE',
                        },
                    });
                }

                toast.error('Bad Credentials', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        background: '#333',
                        color: '#fff',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                });

            })
            .catch(err => {
                toast.error('Bad Credentials', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        background: '#333',
                        color: '#fff',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                });
            })
    }


    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <section className="forget-password-page account">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="block text-center">
                                <a className="logo" href="index.html">
                                    {/* <img src="images/logo.png" alt="" /> */}
                                    <h1>OneShop</h1>
                                </a>
                                <h2 className="text-center">Welcome Back</h2>
                                <form ref={form} onSubmit={handleSendMail}>
                                    <input style={{ display: 'none' }} type="text" name="password" value={password} />
                                    <input name="email" type="email" className="form-control" placeholder="Enter Email and Submit" required />
                                    <br />
                                    <button type="submit" className="btn btn-main text-center" >Submit</button>


                                </form>
                                <p className="mt-20"><Link exact to="/login"><a href="">Back to Login</a></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgotPassword
