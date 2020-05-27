import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'
import { Projects } from './Projects'

const SectionContainer = styled.div`
  padding: 50px 140px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
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

const CardDeck = styled.div`
  display: flex;
 justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
 

`

export const Section = ({ backgroundColor, titleText, subTitle, textBody, projectCard }) => {
    return (
        <SectionContainer backgroundColor={backgroundColor}>
            {titleText && <Title color="white">{titleText}</Title>}
            {textBody && <TextBlock>{textBody}</TextBlock>}
            {projectCard && <CardDeck>
                {Projects.map((project) => {
                    return <ProjectCard image={project.image} description={project.description} header={project.title} slug={project.slug} tech={project.tech} />
                })}
            </CardDeck>}
            {subTitle && <Title color="red">{subTitle}</Title>}
        </SectionContainer>
    )
}