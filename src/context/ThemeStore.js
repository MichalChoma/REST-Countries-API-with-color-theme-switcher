import React, { useState } from 'react'

const ThemeContext = React.createContext();

const ThemeStore = ({children}) => {

    const [isDarkMode, setDarkmode] = useState(false);
    const darkModeToggler = () => setDarkmode(!isDarkMode);
    
  return (
    <ThemeContext.Provider value={{isDarkMode, darkModeToggler}}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ThemeStore, ThemeContext}