import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginError, setLoginError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setLoginError('');
            props.history.push('/');
        }).catch(err => setLoginError(err.message))
    }

    return (
        <div className=' text-center '>
                <h2 className=''>Login</h2>
               
                <form autoComplete="off" className='form-group  '
                    onSubmit={handleLogin}>
                    <div className="input-group w-100">
                        <label className='input-group-text'>Enter Email</label>
                        <input type="email" className='form-control'
                            required onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className="input-group mt-2 w-100">

                        <label className='input-group-text'>Enter Password</label>
                        <input type="password" className='form-control w-50'
                            required onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>



                    <div className='text-center mt-2'>
                        <button type="submit" className='btn btn-success mybtn2'>
                            Login
                        </button>
                    </div>

                </form>

            {loginError && <div className='error-msg'>
                {loginError}
            </div>}

            <div className='d-flex justify-content-center'>
                <span className=''>Don't have an account? Create One
                    <Link to="signup"> here</Link></span>
            </div>

        </div>
    )
}
