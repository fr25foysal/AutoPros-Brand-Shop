import { createContext, useState } from "react";

export const useProvider = createContext(null)
const UniProvider = ({children}) => {
    const [dark, setDark] = useState(true)
    
   console.log(dark);
    const values = {
        dark,
        setDark,
    }
        

    return (
        <useProvider.Provider value={values}>
            {children}
        </useProvider.Provider>
    );
    
    
};

export default UniProvider;