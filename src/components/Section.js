import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
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



export const Section = ({ backgroundColor, titleText, textBody, anchor }) => {

  return (
    <Fade>
      <SectionContainer id={anchor} backgroundColor={backgroundColor}>
        {titleText && <Title color="white">{titleText}</Title>}
        {textBody && <TextBlock>{textBody}</TextBlock>}
        {titleText === "FEATURED PROJECTS" && <Projects />}
        {titleText === "MY THOUGHTS" && <Thoughts />}
        {titleText === "SKILLS" && <Skills />}
        {titleText === "FOR MORE" && <ForMore />}
        {backgroundColor === "#133bce" && <Contact />}
      </SectionContainer >
    </Fade>
  )
}