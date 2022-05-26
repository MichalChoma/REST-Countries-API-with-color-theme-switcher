import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const StyledWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledFormButton = styled.button`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.fontColor};
  border: none;
  cursor: pointer;
  padding: 1rem;
`;

const SearchWrapper = styled.div`
  display: flex;
  background-color: transparent;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 100%;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
    width: 100%;
    content: "";
    height: 2px;
    background-color: ${props => props.theme.fontColor};
  }
  &:focus-within {
    &:before {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
const StyledInput = styled.input`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.fontColor};
  border: none;
  padding: 1rem 0px;
  width: 100%;

  ::placeholder {
    color: ${(props) => props.theme.fontColor};
  }

  :focus {
    outline: none;
  }
`;
const StyledSelect = styled.select`
    margin-top: 3rem;
    border: none;
    padding: 1rem .2rem;
    border-radius: 8px;
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.fontColor}
`

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectRegion, setSelectRegion] = useState("")
  const inputRef = useRef();
  const selectRegionRef = useRef();

  const inputHandler = (e) => {
    e.preventDefault();
    setInputValue(inputRef.current.value);
  };

  const handleSelectRegion = e => {
      e.preventDefault();
      setSelectRegion(selectRegionRef.current.value)

  }

  console.log(inputValue);
  console.log(selectRegion)

  return (
    <StyledWrapper>
      <StyledForm>
        <SearchWrapper>
          <StyledFormButton onClick={inputHandler}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </StyledFormButton>
          <StyledInput
            type="text"
            ref={inputRef}
            placeholder={"Search for a country... "}
            onChange={inputHandler}
          />
        </SearchWrapper>
        <StyledSelect
            ref={selectRegionRef}
            onChange={handleSelectRegion}
        >
            <option value="All" defaultValue>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </StyledSelect>
      </StyledForm>
    </StyledWrapper>
  );
};

export default Home;
