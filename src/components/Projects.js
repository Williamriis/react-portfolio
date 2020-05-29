import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'
import { MyProjects, OtherProjects } from './Content'
import { TechChips, ChipsContainer } from './TechChips'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardDeck = styled.div`
  display: flex;
 justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
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
const OtherProjectsText = styled.a`
  font-family: 'Roboto';
  text-decoration: underline;
  font-size: 17px;
  line-height: 32px;
  margin-bottom: 15px;
`

const BoldRed = styled.span`
  font-weight: bold;
  color: red;
  text-decoration: underline;
`
export const Projects = () => {

    return (
        <Container>
            <CardDeck>
                {MyProjects.map((project) => {
                    return <ProjectCard image={project.image} description={project.description} header={project.title} slug={project.slug} tech={project.tech} />
                })}
            </CardDeck>
            <SubHeader>OTHER PROJECTS</SubHeader>
            <OtherProjectsContainer>
                {OtherProjects.map((item) => {
                    return (
                        <>
                            <OtherProjectsText><BoldRed> {item.slug}</BoldRed> {item.description} <BoldRed>>></BoldRed> </OtherProjectsText>
                            <ChipsContainer>
                                {item.tech.map((label) => {
                                    return <TechChips>{label}</TechChips>
                                })}
                            </ChipsContainer>
                        </>
                    )
                })}
            </OtherProjectsContainer>
        </Container>
    )
}