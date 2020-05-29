import React from "react"
import styled from 'styled-components'


const Container = styled.a`
  display: flex;
  flex-direction: column;
  width: 40%;
  text-decoration: none;
  color: black;
  @media (max-width: 760px) {
    display: ${props => props.display};
    width: 100%;
  }
`
const Image = styled.img`
width: 100%;
max-width: 400px;
  &hover : {
      opacity: .7;
  }
  
`
const DatePosted = styled.p`
  color: red;
  text-decoration: underline;
  font-family: 'Roboto';
  font-size: 17px;
`
const Headline = styled.p`
 font-weight: bold;
 font-size: 21px;
 line-height: 32px;
 font-family: 'Roboto';
`

const TextSample = styled.p`
  font-size: 17px;
  line-height: 32p;
  font-family: 'Roboto';
`
const RedLink = styled.a`
  color: red;
  text-decoration: underline;
`


export const ThoughtsCard = ({ image, date, title, description, display, url }) => {

  return (
    <Container display={display} href={url} target="_blank" rel="noopener noreferrer">
      <Image src={image} />
      <DatePosted>{date}</DatePosted>
      <Headline>{title}</Headline>
      <TextSample>{description} <RedLink href={url} target="_blank" rel="noopener noreferrer">>></RedLink></TextSample>
    </Container>
  )
}