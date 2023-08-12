import { createContext, useState, useContext } from "react";

const ScreenSelected = createContext();

export function ScreenSelectedProvider({ children }) {

    const [screenSelected, setScreenSelected] = useState("/");


    return (
        <ScreenSelected.Provider
            value={{
                screenSelected,
                setScreenSelected
            }}
        >
            {children}

        </ScreenSelected.Provider>
    )
}

export function useScreenSelected() {

    const data = useContext(ScreenSelected);

    return data;
}

