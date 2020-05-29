import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'
import { MyProjects, OtherProjects } from './Content'
import { TechChips, ChipsContainer } from './TechChips'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const CardDeck = styled.div`
  display: flex;
 justify-content: space-between;
 align-items: center;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 760px){
    flex-direction: column;
  }
`
const SubHeader = styled.h1`
   display: inline-block;
  text-align: center;   
  padding: 5px 20px;
  font-weight: Bold;
  font-family:'Roboto';
  font-size: 22px;
  color: red;
  margin-bottom: 30px;
`

const OtherProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const OtherProjectsText = styled.p`
  font-family: 'Roboto';
  text-decoration: underline;
  font-size: 17px;
  line-height: 32px;
  margin-bottom: 15px;
  
`

const MediaQueryWrapper = styled.div`
@media (min-width: 760px) {
  display: ${props => props.display}
}
`

const BoldRed = styled.a`
  font-weight: bold;
  color: red;
  text-decoration: underline;
`
export const Projects = () => {

  return (
    <Container>
      <CardDeck>
        {MyProjects.map((project, index) => {
          return <ProjectCard image={project.image} description={project.description}
            header={project.title} slug={project.slug} tech={project.tech} url={project.url}
            display={index > 1 ? 'none' : 'flex'} />
        })}
      </CardDeck>
      <SubHeader>OTHER PROJECTS</SubHeader>
      <OtherProjectsContainer>
        {OtherProjects.map((item, index) => {
          return (
            <MediaQueryWrapper display={index < 2 ? 'none' : 'block'}>
              <OtherProjectsText>
                <BoldRed> {item.slug}</BoldRed> {item.description} <BoldRed href={item.url}
                  target="_blank" rel="noopener noreferrer">>></BoldRed>
              </OtherProjectsText>
              <ChipsContainer>
                {item.tech.map((label) => {
                  return <TechChips>{label}</TechChips>
                })}
              </ChipsContainer>
            </MediaQueryWrapper>
          )
        })}
      </OtherProjectsContainer>
    </Container>
  )
}