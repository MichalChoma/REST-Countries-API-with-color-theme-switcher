// import { useState, useEffect } from "react";

// export const getCountryByName = (data,name) => {
//   if(!data) return
//   return data.filter(el => el.name.common.toLowerCase() === name);
// }

// const useFetch = (debouncedApi, selectRegion) => {
//   const [apiData, setApiData] = useState([]);
//   const [loading,setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(debouncedApi);
//         const data = await response.json();

//         // if (selectRegion === "All") { //get all
//         setApiData(data);
//         setLoading(false);
//         // } else { //get by region
//         //   setApiData(
//         //     data.filter((country) => {
//         //       return country.region === selectRegion;
//         //     })
//         //   )
//         //   setLoading(false);
//         // }
//       } catch (error) {
//         setApiData(error);
//         setLoading(false);
//       }
      
//     };

//     fetchData();
//   }, [debouncedApi,selectRegion]);


//   return { apiData,loading };
// };

// export default useFetch;
