import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CardWrapper,ContentWrapper, InfoLabel } from "./CountryCard.style";

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
    <motion.div
      layout
      variants={{
        hidden: {
          opacity: 0,
          x: 100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      whileHover={{ scale:1.05 }}
      initial="hidden"
      exit="hidden"
      animate="visible"
    >
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
    </motion.div>
  );
};

export default CountryCard;
