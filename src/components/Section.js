import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import { Projects } from './Projects'
import { Thoughts } from './Thoughts'
import { Skills } from './Skills'
import { ForMore } from './ForMore'
import { Contact } from './Contact'


const SectionContainer = styled.div`
  padding: 50px 36px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 50px 140px
  }
`

const Title = styled.h1`
   display: inline-block;
  text-align: center;   
  padding: 5px 20px;
  font-weight: Bold;
  font-family:'Roboto';
  font-size: 22px;
  color: ${props => props.color};
  background-color: ${props => props.color === 'white' ? 'red' : 'transparent'};
  margin-bottom: 30px;
`

const TextBlock = styled.p`
  font: 20px/32px 'Montserrat';
  margin: 0;

`
const Point = keyframes`
0% {left: -8px};
50% {left: -3px};
100% {left: -8px};
`

const Hand = styled.span`
  color: red;
  font-size: 24px;
  position: relative;
  left: -8px;
  top: 4px;
  animation: ${Point} .5s infinite ease-in;
`

const Icon = <FontAwesomeIcon className="hand" icon={faHandPointRight} />


export const Section = ({ backgroundColor, titleText, textBody, icon }) => {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      {titleText && <Title color="white">{titleText}</Title>}
      {textBody && <TextBlock>{icon && <Hand>{Icon}</Hand>}{textBody}</TextBlock>}
      {titleText === "FEATURED PROJECTS" && <Projects />}
      {titleText === "MY THOUGHTS" && <Thoughts />}
      {titleText === "SKILLS" && <Skills />}
      {titleText === "FOR MORE" && <ForMore />}
      {backgroundColor === "#133bce" && <Contact />}
    </SectionContainer >
  )
}