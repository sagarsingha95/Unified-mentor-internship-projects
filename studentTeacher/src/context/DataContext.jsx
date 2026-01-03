import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider = ({children}) =>{
    const [isStudent,setIsStudent] = useState(true);
    return(
        <DataContext.Provider value={{
            isStudent,
            setIsStudent
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider