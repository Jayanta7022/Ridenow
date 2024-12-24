import React from 'react'
import logo from '../assets/ridenow-logo.svg';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div>
            <div className='bg-cover bg-centre bg-[url(https://images.unsplash.com/photo-1647424825116-fbf8b9415fc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full  '>
                <img 
                    className='w-[150px] ml-7'
                    src={logo}

                    alt="RideNow Logo"
                   
                />
                <div className='bg-white pb-7 py-4 px-4 '>

                    <h2 className='text-3xl font-bold'>Get started with RIDENOW</h2>
                    <Link to ='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start