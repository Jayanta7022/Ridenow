import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h3 className='text-2xl font-semibold mb-5'> Chose a ride </h3>
            <h5 className='p-5 text-center absolute top-0 w-[93%]' onClick={() => props.setVehiclePanelOpen(false)}><i className=" text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
            <div onClick={()=>{props.setconfirmRidePanel(true)}} className='flex mb-2 w-full p-3 items-center justify-between border-2 active:border-black bg-gray-100 rounded-xl'>
                <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>Ride Car <span><i className="ri-user-3-line"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 min away</h5>
                    <p className='font-medium text-xs text-gray-600'>Luxary and affordable</p>
                </div>
                <h2 className='text-xl font-semibold'>₹200</h2>
            </div>

            <div onClick={()=>{props.setconfirmRidePanel(true)}} className='flex mb-2 w-full p-3 items-center justify-between border-2 active:border-black bg-gray-100 rounded-xl'>
                <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>Ride Moto <span><i className="ri-user-3-line"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>2 min away</h5>
                    <p className='font-medium text-xs text-gray-600'>Fast and affordable</p>
                </div>
                <h2 className='text-xl font-semibold'>₹100</h2>
            </div>
            <div onClick={()=>{props.setconfirmRidePanel(true)}} className='flex mb-2 w-full p-3 items-center justify-between border-2 active:border-black bg-gray-100 rounded-xl'>
                <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>Ride Auto <span><i className="ri-user-3-line"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 min away</h5>
                    <p className='font-medium text-xs text-gray-600'>Cheap</p>
                </div>
                <h2 className='text-xl font-semibold'>₹20</h2>
            </div>
        </div>
    )
}

export default VehiclePanel