import React, { useState } from 'react'
import logo from '../assets/ridenow-logo.svg';
import { Link } from 'react-router-dom';


const CaptainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setcaptainData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setcaptainData({
            email,
            password
        })
        console.log(captainData);
        
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
                    <p>Want to join a fleet ?<Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link>
                    </p>
                </form>
            </div>
            <div>
                <Link
                    className='bg-[#d5622d] flex ittems-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    to='/login'
                >Sign in as User</Link>
            </div>
        </div>
  )
}

export default CaptainLogin