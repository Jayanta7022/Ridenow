import React, { createContext } from 'react'

const UserContext = ({ children }) => {
    const userDataContext = createContext();
    return (
        <div>
            <userDataContext.Provider>
                {children}
            </userDataContext.Provider>
        </div>
    )
}

export default UserContext