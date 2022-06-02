import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  position: relative;
  @media (min-width: 580px) {
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 500px) {
    padding: 2rem 5rem;
  }
  @media (min-width: 1500px) {
    padding: 2rem 9rem;
  }

  button {
    margin-bottom: 3rem;
    width: 150px;
    position: absolute;
    top: 1rem;
    left: 1rem;
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out;
    @media (min-width: 500px) {
      left: 5rem;
    }
    @media (min-width: 1500px) {
      left:9rem;
  }
    svg {
      margin-right: 0.5rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.secondaryColor};
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 100%;
  p {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  span {
    font-weight: 300;
  }

  @media (min-width: 580px) {
    align-items: center;
  }

  @media (min-width: 850px) {
    flex-direction: row;
    justify-content: center;
    gap: 30px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;

  @media (min-width: 580px) {
    align-items: center;
  }

  @media (min-width: 850px) {
    align-items: flex-start;
  }
`;

export const Img = styled.img`
  width: 100%;
  object-position:center;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  
  @media (min-width: 580px) {
    align-items: center;
  }

  @media (min-width: 850px) {
    align-items: flex-start;
    margin-top: 2rem;
  }
`;

export const Title = styled.h3`
  font-weight: 800;
  font-size: 1.5rem;
  margin:1.5rem 0;

  @media (min-width: 850px) {
    margin-top: 0;
  }
`;

export const FirstColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 580px) {
    align-items: center;
  }
  @media (min-width: 850px) {
    align-items: flex-start;
  }
`;

export const SecondColumn = styled.div`
  margin-top: 2rem;
`;

export const BordersWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  @media (min-width: 580px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 850px) {
    align-items: flex-start;
  }
  div {
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    gap: 10px;
    @media (min-width: 580px) {
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 850px) {
      align-items: flex-start;
      justify-content: start;
    }
    a {
      padding: 5px 10px;
      background-color: ${(props) => props.theme.secondaryColor};
      border-radius: 8px;
      color: ${(props) => props.theme.fontColor};
      box-shadow: none;
      transition: box-shadow 0.3s ease-in-out;

      &:hover {
        background-color: ${(props) => props.theme.secondaryColor};
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
