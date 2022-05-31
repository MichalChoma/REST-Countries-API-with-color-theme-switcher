import styled from "styled-components";

export const StyledWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1rem;
`;

export const StyledForm = styled.form`
  width: 100%;
  margin-top: 6rem;
`;

export const StyledFormButton = styled.button`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.fontColor};
  border: none;
  cursor: pointer;
  padding: 1rem;
`;

export const SearchWrapper = styled.div`
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
    transform: translateX(-70%);
    width: 100%;
    content: "";
    height: 2px;
    background-color: ${(props) => props.theme.fontColor};
  }
  &:focus-within {
    &:before {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const StyledInput = styled.input`
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
export const StyledSelect = styled.select`
  margin-top: 3rem;
  border: none;
  padding: 1rem 0.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`
