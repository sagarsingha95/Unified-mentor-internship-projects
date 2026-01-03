import { createContext, useState } from "react"
import { sampleData } from "../data/sampleData";


export const DataContext = createContext();



const DataProvider = ({children}) =>{
    const [data,setData] = useState(sampleData)
    const [login,setLogin] = useState(false)

    return (
        <DataContext.Provider value={{
            data,
            setData,
            login,
            setLogin
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider