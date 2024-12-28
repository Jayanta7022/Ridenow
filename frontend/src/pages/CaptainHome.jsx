import React, { useRef, useState } from 'react'
import logo from '../assets/ridenow-logo.svg';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {
    const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
    const ridePopUpPanelRef = useRef(null)

    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
    const confirmRidePopupPanelRef = useRef(null);

    useGSAP(() => {
        if (confirmRidePopupPanel) {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [confirmRidePopupPanel])

    useGSAP(() => {
        if (ridePopUpPanel) {
            gsap.to(ridePopUpPanelRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(ridePopUpPanelRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [ridePopUpPanel])

    return (
        <div className='h-screen'>
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
            <div className='h-1/2'>
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt=""
                />
            </div>
            <div className='h-1/2 p-4'>
                <CaptainDetails/>
            </div>
            <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 '>
                <RidePopUp setRidePopUpPanel={setRidePopUpPanel } setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
            </div>
            <div ref={confirmRidePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 '>
                <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopUpPanel={setRidePopUpPanel } />
            </div>
        </div>
    )
}

export default CaptainHome
