import React, { useState,useEffect,useCallback } from "react";

const Context = React.createContext();

const ContextStore = ({ children }) => {
  const [isDarkMode, setDarkmode] = useState(false);
  const darkModeToggler = () => setDarkmode(!isDarkMode);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterCountries = useCallback((name,region)=>{
    if(!apiData) return
    return apiData.filter(el => el.name.common.toLowerCase().includes(name.toLowerCase())).filter(el => el.region.includes(region))
  },[apiData])

  const filterByCode = useCallback((code) => {
    if(!apiData) return
    return apiData.filter(el => el.cca3 === code)
  },[apiData])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        const sortedData = data.sort((a,b) => a.name.common.localeCompare(b.name.common))
        setApiData(sortedData);
        setLoading(false);
      } catch (error) {
        setApiData(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Context.Provider value={{ isDarkMode, darkModeToggler, loading, apiData, filterCountries, filterByCode}}>
      {children}
    </Context.Provider>
  );
};

export { ContextStore, Context };
