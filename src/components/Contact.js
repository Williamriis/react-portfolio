import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  margin-bottom: 60px;
`

const Header = styled.h1`
  font: bold 21px 'Montserrat';
  color: white;
  margin-bottom: 30px; 
`
const Text = styled.p`
  color: white;
  font: 17px 'Roboto';
  letter-spacing: .5px;
  font-weight: lighter;
  
`

export const Contact = () => {

    return (
        <Container>
            <Header>CONTACT</Header>
            <Text style={{ fontWeight: "bold" }}>William Jensen</Text>
            <Text>+46 73 39 00 059</Text>
            <Text>william.riis93@gmail.com</Text>
        </Container>
    )
}