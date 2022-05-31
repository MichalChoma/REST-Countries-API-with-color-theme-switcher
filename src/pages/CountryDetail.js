import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../context/ContextStore';
import Spinner from '../components/Spinner/Spinner';
const CountryDetail = () => {
  const {countryName} = useParams();
  const {apiData, filterByCode} = useContext(Context)

  let content;
  const country = filterByCode(countryName)

  console.log(country)

  if(!apiData){
    content = (<Spinner />)
  } else {
    content = country.map(el => (
      <>
      <h1>{el.name.nativeName ? Object.values(el.name.nativeName)[0].common : el.name.official}</h1>
      <p>{el.population.toLocaleString()}</p>
      <p>{el.region}</p>
      <p>{el.subregion}</p>
      <p>{el.capital ? el.capital[0] : "none"}</p>
      <p>{el.tld[0]}</p>
      {el.currencies && <p>{Object.values(el.currencies)[0].name} {Object.values(el.currencies)[0].symbol}</p>}
      {el.languages && <p>{Object.values(el.languages).join(", ")}</p>}
      {el.borders && <p>borders: {el.borders.map(el => {
        const borderCountry = filterByCode(el)
        return <Link to={`/${borderCountry[0].cca3}`}>{borderCountry[0].name.common}</Link>
      })}</p>}
      </>
    ))
  }

  
  


  


  
  return (
    <div style={{marginTop: "8rem"}}>
      {content}
    </div>
  )
}

export default CountryDetail