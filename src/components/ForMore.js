import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GitHub } from '../git-large.svg';
import { ReactComponent as LinkedIn } from '../linked-large.svg';
import { ReactComponent as Stack } from '../stack-large.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    opacity: .7;
}
`
const Vector = styled.a`
  border: 3px solid #fa382f;
  border-radius: 50%;
  padding: 12px 14px;
`
const Caption = styled.figcaption`
font: bold 11px 'Roboto';
color: #fa382f;
margin-top: 5px;
`



export const ForMore = () => {

    return (

        <Container>
            <Figure>
                <Vector href="https://www.linkedin.com/in/william-jensen-94521919a/" target="_blank"
                    rel="noopener noreferrer">
                    <LinkedIn />
                </Vector>
                <Caption>LINKEDIN</Caption>
            </Figure>
            <Figure>
                <Vector href="https://github.com/Williamriis" target="_blank" rel="noopener noreferrer">
                    <GitHub />
                </Vector>
                <Caption>GITHUB</Caption>
            </Figure>
            <Figure>
                <Vector href="https://stackoverflow.com/users/12671093/william" target="_blank" rel="noopener noreferrer">
                    <Stack />
                </Vector>
                <Caption>STACK OVERFLOW</Caption>
            </Figure>

        </Container>
    )
}