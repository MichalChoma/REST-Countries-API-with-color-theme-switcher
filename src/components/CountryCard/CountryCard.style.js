import styled from "styled-components";

export const CardWrapper = styled.div`
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

export const ContentWrapper = styled.div`
  padding: 1rem 1rem 3rem 1rem;

  h3 {
    padding: 0.5rem 0;
  }
`;

export const InfoLabel = styled.div`
  display: flex;
  font-weight: 600;

  p {
    margin-left: 5px;
    font-weight: 300;
  }
`;