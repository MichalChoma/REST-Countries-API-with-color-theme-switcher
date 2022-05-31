import React from 'react'
import styled from 'styled-components'

const StyledBtn = styled.button`
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.fontColor};
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: .5rem 1rem;
    border-radius: .5rem;
    transition: background-color .3s ease-in-out;

    &:hover,&:active{
        background-color: ${props => props.theme.backgroundColor};
    }
`

const Button = ({children, onClick}) => {
  return (
    <StyledBtn onClick={onClick}>{children}</StyledBtn>
  )
}

export default Button