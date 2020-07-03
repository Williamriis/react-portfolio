import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as GitHub } from '../github.svg';
import { ReactComponent as LinkedIn } from '../linkedin.svg';
import { ReactComponent as Stack } from '../stack.svg';
import { Link } from 'react-scroll'
import Typing from 'react-typing-animation';
import image from '../bookshelf.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:  center;
  justify-content: space-around;
  background: linear-gradient(to bottom, black, transparent), url(${image});
  padding: 60px 140px 0 140px;
  @media (max-width: 760px){
    // padding: 60px 36px 0 36px;
  }
 @media (max-width: 1000px) {
   padding: 0;
   justify-content: space-between;
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

const FadeIn = keyframes`
 0%{opacity: 0}
 100%{opacity: 1}
`
const VectorContainer = styled.div`
  display: flex;
  animation-name: ${props => props.mobile};
  margin-top: ${props => props.mobile ? '10px' : '0'};
  animation-duration: 1s;
  @media (min-width: 1000px) {
    display: ${props => props.mobile ? 'none' : 'block'};
  }
`
const HeaderVector = styled.a`
  border: 3px solid white;
  border-radius: 50%;
  margin-right: ${props => props.mobile ? '15px' : '5px'};
  padding: 7px 9px;
  &:hover {
    opacity: .7;
}
`
const NavContainer = styled.div`
display: flex;
animation: ${FadeIn} 1s;
animation-fill-mode: forwards;
justify-content: space-between;
align-items: center;
width: 100%;
@media (max-width: 1000px) {
  display: none;
}
`
const NavItems = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  
  @media (max-width: 1000px) {
    display: none;
  }
`

const NavText = styled.p`
  color: white;
  cursor: pointer;
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
  z-index: 5;
  @media (max-width: 760px){
    width: 172px;
    top: 15px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

const Span = styled.span`
  color: white;
  font-size: 7.8vw;
  font-family: 'Montserrat';

  
`

const SubSpan = styled.span`
  color: white;
  font-family: 'Montserrat';
  font-size: 5.5vw;
`

const TypeWriter = styled.audio`
  display: none;
`

const Bob = keyframes`
  0% {top: 0};
  50% { top: -5px};
  100% {top: 0}
`

const Chevron = styled.span`
  color: white;
  cursor: pointer;
  font-size: 60px;
  position: relative;
  animation: ${Bob} 1s infinite ease-in-out;
  @media (min-width: 1000px) {
    display: none;
  }
`

const DummyDiv = styled.div`
  @media (min-width: 1000px) {
    display: ${props => props.pos === 'top' ? 'none' : 'block'}
  }
  @media (max-width: 1000px) {
    display: ${props => props.pos === 'bottom' ? 'none' : 'block'}
  }
 `

const NameAndSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const playSound = () => {
    // document.getElementById('typing').play()
  }
  const stopTyping = () => {
    // document.getElementById('typing').pause()
    // document.getElementById('typing').currentTime = 0;
    // document.getElementById('ding').play()
    setShowNav(true)

  }



  return (
    <HeaderContainer>
      {showNav &&
        <NavContainer>
          <NavItems>
            <Link smooth={true} to="about-me"><NavText style={{ color: "white" }}>ABOUT ME </NavText></Link>
            <Link smooth={true} to="projects"><NavText style={{ color: "white" }}> MY WORK  </NavText></Link>
            <Link smooth={true} to="thoughts"><NavText style={{ color: "white" }}> REFLECTIONS  </NavText></Link>
            <Link smooth={true} to="skills"><NavText style={{ color: "white" }}> SKILLS  </NavText></Link>
            <Link smooth={true} to="contact"><NavText style={{ color: "white" }}> CONTACT ME</NavText></Link>
          </NavItems>
          <VectorContainer>
            <HeaderVector href="https://www.linkedin.com/in/william-jensen-94521919a/"
              target="_blank" rel="noopener noreferrer"><LinkedIn /></HeaderVector>
            <HeaderVector href="https://github.com/Williamriis" target="_blank"
              rel="noopener noreferrer"><GitHub /></HeaderVector>
            <HeaderVector href="https://stackoverflow.com/users/12671093/william"
              target="_blank" rel="noopener noreferrer"><Stack /></HeaderVector>
          </VectorContainer>
        </NavContainer>}
      {/* <TextContainer>
        <HeaderText size="16px" font="Roboto"><span style={{ fontWeight: "normal" }}>PORTFOLIO:</span>  WILLIAM JENSEN</HeaderText>
        <HeaderText size="46px" mobileSize="40px" font="Montserrat">frontend <br></br>developer</HeaderText>
        <HeaderText size="29px" font="Montserrat">+ bookworm</HeaderText>
      </TextContainer> */}
      {/* <TypeWriter id="typing" src={require('../typing.mp3')} preload />
      <TypeWriter id="ding" src={require('../TypeWriterDing.wav')} preload /> */}
      <DummyDiv pos="top"></DummyDiv>
      <NameAndSocials>
        <Typing style={{ display: 'flex', justifyContent: 'center' }} hideCursor="true" speed={50} onStartedTyping={() => playSound()}
          onFinishedTyping={() => stopTyping()}><Span>WILLIAM JENSEN: <br></br></Span> <SubSpan>FRONT-END DEVELOPER</SubSpan>
        </Typing>
        {showNav && <VectorContainer mobile={FadeIn}>
          <HeaderVector mobile={true} href="https://www.linkedin.com/in/william-jensen-94521919a/"
            target="_blank" rel="noopener noreferrer"><LinkedIn /></HeaderVector>
          <HeaderVector mobile={true} href="https://github.com/Williamriis" target="_blank"
            rel="noopener noreferrer"><GitHub /></HeaderVector>
          <HeaderVector mobile={true} href="https://stackoverflow.com/users/12671093/william"
            target="_blank" rel="noopener noreferrer"><Stack /></HeaderVector>
        </VectorContainer>}
      </NameAndSocials>
      <Link to="about-me" smooth={true}><Chevron><FontAwesomeIcon icon={faAngleDoubleDown} /></Chevron></Link>
      <DummyDiv pos="bottom"></DummyDiv>

      {/* <ProfileImage src={require('../profile.jpg')} /> */}
    </HeaderContainer>
  )
}
