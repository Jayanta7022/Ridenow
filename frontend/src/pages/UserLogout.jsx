import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    console.log("token from logout " + token);

    if (!token) {
        navigate('/login');
        return;
    }
    useEffect(() => {
        axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            console.log("logout success");

            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        }).catch((err) => {
            console.log(err);

        }, []);
    })
    return (
        <div>
            userlogout
        </div>
    )
}

export default UserLogout
