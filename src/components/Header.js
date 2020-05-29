import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GitHub } from '../github.svg';
import { ReactComponent as LinkedIn } from '../linkedin.svg';
import { ReactComponent as Stack } from '../stack.svg';
import image from '../bookshelf.jpeg'

const HeaderContainer = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:  flex-end;
  justify-content: space-between;
  background: linear-gradient(to bottom, black, transparent), url(${image});
  padding: 60px 140px 0 140px;
  @media (max-width: 760px){
    padding: 60px 36px 0 36px;
    height: 508px;
  }
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
  @media (max-width: 760px){
    font-size: ${props => props.mobileSize}
  }
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
  @media (max-width: 760px){
    width: 172px;
    top: 15px;
  }
`

export const Header = () => {


  return (
    <HeaderContainer>
      <VectorContainer>
        <HeaderVector href="https://www.linkedin.com/in/william-jensen-94521919a/"
          target="_blank" rel="noopener noreferrer"><LinkedIn /></HeaderVector>
        <HeaderVector href="https://github.com/Williamriis" target="_blank"
          rel="noopener noreferrer"><GitHub /></HeaderVector>
        <HeaderVector href="https://stackoverflow.com/users/12671093/william"
          target="_blank" rel="noopener noreferrer"><Stack /></HeaderVector>
      </VectorContainer>
      <TextContainer>
        <HeaderText size="16px" font="Roboto"><span style={{ fontWeight: "normal" }}>PORTFOLIO:</span>  WILLIAM JENSEN</HeaderText>
        <HeaderText size="46px" mobileSize="40px" font="Montserrat">frontend <br></br>developer</HeaderText>
        <HeaderText size="29px" font="Montserrat">+ bookworm</HeaderText>
      </TextContainer>
      <ProfileImage src={require('../profile.jpg')} />
    </HeaderContainer>
  )
}