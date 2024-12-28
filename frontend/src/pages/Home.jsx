import React, { useRef, useState } from 'react';
import logo from '../assets/ridenow-logo.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import WaitForCaptain from '../components/WaitForCaptain';
import LookingForCaptain from '../components/LookingForCaptain';

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setpanelOpen] = useState(false)
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePanelRef = useRef(null)
    const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
    const [confirmRidePanel, setconfirmRidePanel] = useState(false);
    const confirmRidePanelRef = useRef(null)
    const [vehicleFound, setVehicleFound] = useState(false);
    const vehicleFoundRef = useRef(null)
    const [waitingForCaptain, setWaitingForCaptain] = useState(false);
    const waitingForCaptainRef = useRef(null);



    const submitHandler = (e) => {
        e.preventDefault();
    };

    useGSAP(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: "70%",
                padding: 24
            });
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: "0%",
                padding: 0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }

    }, [panelOpen])
    useGSAP(() => {
        if (vehiclePanelOpen) {
            gsap.to(vehiclePanelRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [vehiclePanelOpen])

    useGSAP(() => {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [confirmRidePanel]);


    useGSAP(() => {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [vehicleFound])

    useGSAP(() => {
        if (waitingForCaptain) {
            gsap.to(waitingForCaptainRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(waitingForCaptainRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [waitingForCaptain])


    return (
        <div className="h-screen relative">
            <img
                className="w-[150px] absolute left-5 top-5"
                src={logo}
                alt="RideNow Logo"
            />
            <div className="h-screen w-screen">
                {/* div for map image */}
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt=""
                />
            </div>
            <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
                <div className="h-[30%] p-5 bg-white relative">
                    <h5 ref={panelCloseRef} onClick={() => setpanelOpen(false)} className='absolute right-6 top-6 text-2xl opacity-0'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className="text-3xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e) => submitHandler(e)}>
                        <div className="line absolute h-16 w-1 top-[60%] -translate-y-1/2 left-9 bg-gray-700 rounded-full"></div>
                        <input
                            className="bg-[#eee] px-12 py-3 text-lg rounded-lg w-full mt-4"
                            type="text"
                            placeholder="Add a pick up location"
                            value={pickup}
                            onChange={(e) => { setPickup(e.target.value) }}
                            onClick={() => setpanelOpen(true)}
                        />
                        <input
                            className="bg-[#eee] px-12 py-3 text-lg rounded-lg w-full mt-3"
                            type="text"
                            placeholder="Enter your destination"
                            value={destination}
                            onChange={(e) => { setDestination(e.target.value) }}
                            onClick={() => setpanelOpen(true)}
                        />
                    </form>
                </div>
                <div ref={panelRef} className="h-0 bg-white overflow-hidden">
                    <LocationSearchPanel setpanelOpen={setpanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
                </div>
            </div>
            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 '>
                <VehiclePanel setconfirmRidePanel={setconfirmRidePanel } setVehiclePanelOpen={setVehiclePanelOpen } />
            </div>
            <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 '>
                <ConfirmedRide setconfirmRidePanel={setconfirmRidePanel} setVehicleFound={setVehicleFound } />
            </div>
            <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 '>
                <LookingForCaptain setVehicleFound={setVehicleFound } />
            </div>
            <div ref={waitingForCaptainRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 '>
                <WaitForCaptain setWaitingForCaptain={setWaitingForCaptain} />
            </div>
        </div>
    );
};

export default Home;
