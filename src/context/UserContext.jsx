import React, { createContext } from 'react'
export const DataContext=createContext();

const UserContext = ({children}) => {

    const userData={
        username:"Sarthak",
        age:"21",
        city:"New Delhi"
    }

  return (
    <div>
        <DataContext.Provider value={userData}>
            {children}
        </DataContext.Provider>   
    </div>
  )
}

export default UserContext
