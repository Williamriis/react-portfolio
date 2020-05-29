import React from 'react'
import styled from 'styled-components'
import { TechChips, ChipsContainer } from './TechChips'


const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 40%;
  text-decoration: none;
  margin-bottom: 12px;
`

const HoverWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 400px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`
const Image = styled.img`
  width: 100%;
  filter: brightness(40%);
${HoverWrapper}:hover & {
    filter: brightness(20%)
}
`

const ImageOverlay = styled.p`
  margin: 0;
  position: absolute;
  color: #FDDFE7;
  font: bold 20px 'Montserrat';
`

const CardText = styled.p`
  margin: 0;
  color: black;
  text-decoration: none;
  font-size: 17px;
  line-height: 32px;
  font-family: 'Roboto';
`


export const ProjectCard = ({ image, header, description, slug, tech }) => {

  return (
    <CardContainer href="" target="_blank">
      <HoverWrapper>
        <Image src={image}></Image>
        <ImageOverlay>{header}</ImageOverlay>
      </HoverWrapper>
      <CardText><span style={{ color: "red", fontWeight: "bold", textDecoration: "underline" }}>{slug} </span>
        {description} <a style={{ color: "red", textDecoration: "underline" }}>>></a></CardText>
      <ChipsContainer>
        {tech.map((item) => {
          return <TechChips>{item}</TechChips>
        })}
      </ChipsContainer>
    </CardContainer>
  )
}