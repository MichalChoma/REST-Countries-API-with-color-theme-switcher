import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

const SpinnerWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

const LoadingSpinner = styled.div`
    width: 25px;
    height: 25px;
    border: 5px solid ${props => props.theme.secondaryColor}; 
    border-top: 5px solid ${props => props.theme.fontColor}; ;
    border-radius: 50%;
    animation: ${rotate} 1.5s linear infinite;
`


const Spinner = () => (
    <motion.div
    initial={{opacity:0,}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <SpinnerWrapper>
            <LoadingSpinner />
        </SpinnerWrapper>
    </motion.div>
)

export default Spinner