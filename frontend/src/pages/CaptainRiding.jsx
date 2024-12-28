import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/ridenow-logo.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';


const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null)


    useGSAP(() => {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [finishRidePanel])

    return (
        <div className='h-screen relative '>
            <div className='fixed flex p-3 top-0 items-center justify-between w-full'>
                <img
                    className="w-[150px] absolute left-5 top-5"
                    src={logo}
                    alt="RideNow Logo"
                />
                <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className='text-large font-bold ri-logout-box-r-line'></i>
                </Link>
            </div>
            <div className='h-4/5'>
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt=""
                />
            </div>
            <div onClick={()=>{setFinishRidePanel(true)}} className='h-1/5 p-6 bg-yellow-400 p-6 flex items-center relative justify-center'>
                <h5 className='p-1 text-center w-full absolute top-0'><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>4 km away </h4>
                <button className='bg-green-600 w-full text-white font-semibold p-2 px-10 rounded-lg'>Complete ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 '>
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>

        </div>
    )
}

export default CaptainRiding