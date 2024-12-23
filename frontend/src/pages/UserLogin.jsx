import React, { useState } from 'react'
import logo from '../assets/ridenow-logo.svg';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setuserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setuserData({
            email,
            password
        })
        console.log(userData);
        
        setEmail('');
        setPassword('');
        
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img
                    className='w-[150px] ml-20'
                    src={logo}

                    alt="RideNow Logo"

                />
                <form action="" onSubmit={(e)=>submitHandler(e)}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="password"
                        placeholder='*******' />
                    <button
                        className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    >login</button>
                    <p>New here?<Link to='/signup' className='text-blue-600'>Create new account</Link>
                    </p>
                </form>
            </div>
            <div>
                <Link
                    className='bg-[#10b461] flex ittems-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    to='/captain-login'
                >Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin