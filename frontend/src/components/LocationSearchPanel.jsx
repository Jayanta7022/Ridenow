import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props);
    
    // sample location 
    const locations = [
        "Kestopur kolkata, 7001, near prafulla kanan, west bengal",
        "Kestopur kolkata, 7001, near prafulla kanan, west bengal",
        "Kestopur kolkata, 7001, near prafulla kanan, west bengal",
        "Kestopur kolkata, 7001, near prafulla kanan, west bengal",
        "Kestopur kolkata, 7001, near prafulla kanan, west bengal",
        "Kestopur kolkata, 7001, near prafulla kanan, west bengal"
    ]
    return (
        <div >
            {
                locations.map(function (elem, idx) {
                    return (
                        <div key={idx} onClick={() => {
                            props.setVehiclePanelOpen(true);
                            props.setpanelOpen(false)
                        }} className='flex gap-4 border-2 p3-3 rounded-full my-2 border-gray-150 active:border-black items-centre justify-start'>
                            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                            <h4 className='font-medium'>{elem}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LocationSearchPanel