
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


export const CaptainLogout = () => {
    const token = localStorage.getItem('captainToken');
    const navigate = useNavigate();
    console.log("token from logout " + token);

    if (!token) {
        navigate('/captain-login');
        return;
    }
    useEffect(() => {
        axios.post(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            console.log("logout success");

            if (response.status === 200) {
                localStorage.removeItem('captainToken');
                navigate('/captain-login');
            }
        }).catch((err) => {
            console.log(err);

        }, []);
    })

    return (
        <div>CaptainLogout</div>
    )
}

export default CaptainLogout