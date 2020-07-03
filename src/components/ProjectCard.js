import React from 'react'
import styled from 'styled-components'
import { TechChips, ChipsContainer } from './TechChips'

const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 40%;
  text-decoration: none;
  margin-bottom: 12px;
  @media (max-width: 760px) {
    display: ${props => props.display};
    width: 100%;
    align-items: center;
  }
`

const HoverWrapper = styled.div`
  display: flex;
  overflow: hidden;
  align-self: center;
  position: relative;
  max-width: 400px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all .3s ease-in-out;
`
const Image = styled.img`
  width: 100%;
  filter: brightness(40%);
${HoverWrapper}:hover & {
    filter: brightness(20%);
}
`

const ImageOverlay = styled.p`
  margin: 0;
  position: absolute;
  color: #FDDFE7;
  font: bold 20px 'Montserrat';
  transtiion: all .7s ease-in-out;
  ${HoverWrapper}:hover & {
    transform: scale(1.4);
  }
`

const CardText = styled.p`
  margin: 0;
  color: black;
  text-decoration: none;
  font-size: 17px;
  line-height: 32px;
  font-family: 'Roboto';
  display: inline;
  max-width: 400px;
`


export const ProjectCard = ({ image, header, description, slug, tech, display, url }) => {

  return (

    <CardContainer href={url} target="_blank" rel="noopener noreferrer" display={display}>
      <HoverWrapper>
        <Image src={image}></Image>
        <ImageOverlay>{header}</ImageOverlay>
      </HoverWrapper>
      <CardText><span style={{ color: "red", fontWeight: "bold", textDecoration: "underline" }}>{slug} </span>
        {description} <span style={{ color: "red", textDecoration: "underline" }}>>></span></CardText>
      <ChipsContainer>
        {tech.map((item) => {
          return <TechChips>{item}</TechChips>
        })}
      </ChipsContainer>
    </CardContainer>

  )
}