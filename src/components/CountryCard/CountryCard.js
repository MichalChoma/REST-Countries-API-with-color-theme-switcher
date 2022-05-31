import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  width: 350px;
  background-color: ${(props) => props.theme.secondaryColor};
  overflow: hidden;
  border-radius: 8px;
  opacity: 1;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  img {
    width: 100%;
    height: 200px;
    object-position: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem 1rem 3rem 1rem;

  h3 {
    padding: 0.5rem 0;
  }
`;

const InfoLabel = styled.div`
  display: flex;
  font-weight: 600;

  p {
    margin-left: 5px;
    font-weight: 300;
  }
`;

const CountryCard = ({ name, population, region, capital, flag, id }) => {
  let capitalName;
  if (capital) {
    if (capital.length > 1) {
      capitalName = capital.join(", ");
    } else {
      capitalName = capital[0];
    }
  } else {
    capitalName = "none";
  }

  return (
    <Link to={`/${id}`}>
      <CardWrapper>
        <img src={flag} alt={`${name} flag`} />
        <ContentWrapper>
          <h3>{name}</h3>
          <InfoLabel>
            Population: <p>{population.toLocaleString()}</p>
          </InfoLabel>
          <InfoLabel>
            Region: <p>{region}</p>
          </InfoLabel>
          <InfoLabel>
            Capital: <p>{capitalName}</p>
          </InfoLabel>
        </ContentWrapper>
      </CardWrapper>
    </Link>
  );
};

export default CountryCard;
