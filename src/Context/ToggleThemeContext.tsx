import { createContext, useState } from 'react';

// ===> Context to make the Grouplist from the useState public
type ContextProps = {
    theme: string;
    setTheme: (value: any) => void;
};
//context variable with initial values
const initValues: ContextProps = {
    theme: '', /* ist das hier richtig?! */
    setTheme: function (value: any): void {
        throw new Error('Function not implemented.');
    }
};
export const ToggleThemeContext = createContext<ContextProps>(initValues);

// ===> Provider of the Context
type ProviderProps = {
    children?: React.ReactNode;
};
export const ToggleThemeContextProvider = (props: ProviderProps) => {

    // Liste soll bereits test bzw default fragen als inital wert bekommmen!

    // erstellung der Frageliste und zuweisung der default fragen per useState
    const [theme, setTheme] = useState("light");


    return (
        <ToggleThemeContext.Provider
            value={{
                theme: theme,
                setTheme: setTheme,
            }}
        >
            {props.children}
        </ToggleThemeContext.Provider>
    );
};
