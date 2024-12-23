import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/ridenow-logo.svg';


const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [userData, setuserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setuserData({
            fullName: {
                firstName,
                lastName
            },
            email,
            password
        })
        console.log(userData);

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');

    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img
                    className='w-[150px] ml-20'
                    src={logo}

                    alt="RideNow Logo"

                />
                <form action="" onSubmit={(e) => submitHandler(e)}>
                    <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
                    <div className='flex gap-4 mb-5'>
                        <input
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='bg-[#eeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                            type="text"
                            placeholder='First Name'
                        />
                        <input
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='bg-[#eeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                            type="text"
                            placeholder='Last Name'
                        />
                    </div>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="password"
                        placeholder='*******' />
                    <button
                        className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    >signup</button>
                    <p>Alresdy have a account?<Link to='/login' className='text-blue-600'>Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default UserSignup