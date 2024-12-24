import React, { useState } from 'react'
import logo from '../assets/ridenow-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';
    
const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setuserData] = useState({})


    const navigate = useNavigate();
    const { user, setUser } = React.useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
       const logindetails = {
            email,
            password
       }
        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, logindetails)

        if (response.status == 200) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token', data.token);
            console.log("login");
            navigate("/home");
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