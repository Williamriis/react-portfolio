import React from 'react'
import styled from 'styled-components'
import { ThoughtsCard } from './ThoughtsCard'
import { MyThoughts, OtherThoughts } from './Content'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

const Date = styled.span`
  color: red;
  text-decoration: underline;
  font-weight: normal;
`
const Title = styled.p`
  text-decoration: underline;
  font-weight: bold;
`
const Link = styled.a`
  color: red;
`

export const Thoughts = () => {

    return (
        <Container>
            <CardContainer>
                {MyThoughts.map((item, index) => {
                    return <ThoughtsCard image={item.image} title={item.title}
                        date={item.date} description={item.description} display={index % 2 !== 0 ? 'none' : 'block'} />
                })}
            </CardContainer>
            <SubHeader>OTHER THOUGHTS</SubHeader>
            {OtherThoughts.map((item) => {
                return <Title><Date>{item.date} </Date>{item.title}<Link> >></Link></Title>
            })}
        </Container>
    )
}