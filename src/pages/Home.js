import React, { useState, useContext } from "react";
import { Context } from "../context/ContextStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  StyledWrapper,
  StyledForm,
  SearchWrapper,
  StyledFormButton,
  StyledInput,
  StyledSelect,
  CardsWrapper,
} from "./HomeUI";
import Spinner from "../components/Spinner/Spinner";
import useDebounce from "../hooks/useDebounce";
import CountryCard from "../components/CountryCard/CountryCard";

const Home = () => {

  const {apiData, loading, filterCountries} = useContext(Context)
  const [inputValue, setInputValue] = useState("");
  const [selectRegion, setSelectRegion] = useState("");

  let content;
  
  const inputHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  

  const handleSelectRegion = (e) => {
    e.preventDefault();
    setSelectRegion(e.target.value);
  };

  const debouncedInput = useDebounce(inputValue,250);

  if(loading){
    content = (<Spinner />)
  } else if(apiData.length) {
    
    const filteredCountries = filterCountries(debouncedInput,selectRegion)
    

    if(filteredCountries.length > 0){
      content = (
        filteredCountries.map(el => (
          <CountryCard
          key={el.cca3}
          id={el.cca3}
          name={el.name.common}
          population={el.population}
          region={el.region}
          capital={el.capital}
          flag={el.flags.png}
        />
        ))
      )
    } else {
      content = (<p>Countries not found</p>)
    }
  } else {
    content = (<p>Error,please refresh</p>)
  }

  return (
    <StyledWrapper>
      <StyledForm>
        <SearchWrapper>
          <StyledFormButton>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </StyledFormButton>
          <StyledInput
            type="text"
            value={inputValue}
            placeholder={"Search for a country... "}
            onChange={inputHandler}
          />
        </SearchWrapper>
        <StyledSelect onChange={handleSelectRegion}>
          <option value="" defaultValue>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </StyledSelect>
      </StyledForm>

      <CardsWrapper>
        {content}
      </CardsWrapper>
    </StyledWrapper>
  );
};

export default Home;
