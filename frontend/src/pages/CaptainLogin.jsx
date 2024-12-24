import React, { useState } from 'react'
import logo from '../assets/ridenow-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { captain, setCaptain } = React.useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            email,
            password
        };


        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)
        if (response.status === 200) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('captainToken', data.token);
            navigate('/captain-home')
        }
        
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
                    >Login As a captain</button>
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