import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GitHub } from '../github.svg';
import { ReactComponent as LinkedIn } from '../linkedin.svg';
import { ReactComponent as Stack } from '../stack.svg';

const HeaderContainer = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:  flex-end;
  justify-content: space-between;
  background-color: grey;
  padding: 60px 140px 0 140px;
`

const TextContainer = styled.div`
  color: white;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: flex-start;
  font: bold 40px/49px 'Montserrat';
`

const HeaderText = styled.p`
  color: white;
  font-size: ${props => props.size};
  font-weight: bold;
  font-family: ${props => props.font};
  margin: 0;
`
const VectorContainer = styled.div`
  display: flex;
`
const HeaderVector = styled.a`
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 5px;
  padding: 7px 9px;
  &:hover {
    opacity: .7;
}
`

const ProfileImage = styled.img`
  border-radius: 50%;
  border: 3px solid white;
  width: 200px;
  position: relative;
  top: -110px;
`

export const Header = () => {


    return (
        <HeaderContainer>
            <VectorContainer>
                <HeaderVector href="https://www.linkedin.com/in/william-jensen-94521919a/" target="_blank"><LinkedIn /></HeaderVector>
                <HeaderVector href="https://github.com/Williamriis" target="_blank"><GitHub /></HeaderVector>
                <HeaderVector><Stack /></HeaderVector>
            </VectorContainer>
            <TextContainer>
                <HeaderText size="16px" font="Roboto"><span style={{ fontWeight: "normal" }}>PORTFOLIO:</span>  WILLIAM JENSEN</HeaderText>
                <HeaderText size="46px" font="Montserrat">frontend <br></br>developer</HeaderText>
                <HeaderText size="29px" font="Montserrat">+ bookworm</HeaderText>
            </TextContainer>
            <ProfileImage src={require('../profile.jpg')} />
        </HeaderContainer>
    )
}