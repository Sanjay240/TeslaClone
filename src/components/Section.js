import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <Wrap bgImg = {props.backgroundImg}>
      <Fade bottom>
        <ItemText>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
        </ItemText>
      </Fade>
      <Button>
        <Fade right>
        <ButtonGroup>
          <LeftButton>{props.leftBtnText} </LeftButton>
          {props.rightBtnText && 
              <RightButton>{props.rightBtnText}</RightButton>
          }
        </ButtonGroup>
        </Fade>
        <ArrowWarper>
        <DownArrow src="images/down-arrow.svg"></DownArrow>
        </ArrowWarper>
      </Button>
     
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`

    height: 100vh;
    width: 100vw;
    background: ${props => `url("${props.bgImg}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`

    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
    }

`;
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;


`;
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    marign-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`;
const Button = styled.div`
    align-item: center;
`;

const ArrowWarper = styled.div `
     display: flex;
     justify-content: center;
`