import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../context/ContextStore";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner/Spinner";
import {
  Wrapper,
  CardWrapper,
  ImageWrapper,
  Img,
  Title,
  InfoWrapper,
  FirstColumn,
  SecondColumn,
  BordersWrapper,
} from "./CountryDetail.style";

const CountryDetail = () => {
  const { countryName } = useParams();
  const { filterByCode, loading } = useContext(Context);

  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);

  let content;
  const country = filterByCode(countryName);

  if (loading) {
    content = <Spinner />;
  } else {
    content = country.map((el) => (
      <CardWrapper key={el.cca3}>
        <ImageWrapper>
          <Img src={el.flags.png} alt={`${el.name.common} flag`} />
        </ImageWrapper>
        <InfoWrapper>
          <Title>{el.name.common}</Title>
          <FirstColumn>
            <p>
              Native name:{" "}
              <span>
                {el.altSpellings[1] ? el.altSpellings[1] : Object.values(el.name)[1]}
              </span>
            </p>
            <p>
              Population: <span>{el.population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{el.region}</span>
            </p>
            <p>
              Sub Region: <span>{el.subregion}</span>
            </p>
            <p>
              Capital: <span>{el.capital ? el.capital[0] : "none"}</span>
            </p>
          </FirstColumn>
          <SecondColumn>
            {el.tld && (
              <p>
                Top Level Domain: <span>{el.tld[0]}</span>
              </p>
            )}
            {el.currencies && (
              <p>
                Currencies: <span>{Object.values(el.currencies)[0].name}</span>
              </p>
            )}
            {el.languages && (
              <p>
                Languages: <span>{Object.values(el.languages).join(", ")}</span>
              </p>
            )}
          </SecondColumn>
          {el.borders && (
            <BordersWrapper>
              <p>Border Countries: </p>
              <div>
                {el.borders.map((el) => {
                  const borderCountry = filterByCode(el);
                  return (
                    <Link to={`/${borderCountry[0].cca3}`} key={el.cca3}>
                      {borderCountry[0].name.common}
                    </Link>
                  );
                })}
              </div>
            </BordersWrapper>
          )}
        </InfoWrapper>
      </CardWrapper>
    ));
  }

  return (
    <Wrapper
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      exit={{ x: -500 }}
    >
      <Button onClick={handleNavigate}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>Back
      </Button>
      {content}
    </Wrapper>
  );
};

export default CountryDetail;
