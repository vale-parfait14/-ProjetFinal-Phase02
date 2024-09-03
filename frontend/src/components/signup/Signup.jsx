import React from 'react'
import "./Signup.css"
import HeadingCompSignup from './HeadingCompSignup';
const Signup = () => {
    return (
        <div className='signup'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                        <div className=" flex-column d-flex  w-100 ">
                            <input className='p-2 my-3 input-item'
                                type="email"
                                name='email'
                                placeholder='Enter Your Email'
                                required
                            />

                            <input className='p-2 my-3 input-item'
                                type="username"
                                name='username'
                                placeholder='Enter Your username'
                                required
                            />

                            <input className='p-2 my-3 input-item'
                                type="password"
                                name='password'
                                placeholder='Enter Your password'
                                required
                            />

                            <button className='btn-signup p-2'>SignUp</button>
                        </div>
                    </div>
                    <div className="col-lg-4  column col-left d-flex justify-content-center align-items-center">
                       <HeadingCompSignup first="Sign" second="Up"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup;
