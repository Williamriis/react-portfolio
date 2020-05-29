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
  border: 3px solid red;
  border-radius: 50%;
  padding: 12px 14px;
`
const Caption = styled.figcaption`
font: bold 11px 'Roboto';
color: red;
margin-top: 5px;
`



export const ForMore = () => {

    return (

        <Container>
            <Figure>
                <Vector>
                    <LinkedIn />
                </Vector>
                <Caption>LINKEDIN</Caption>
            </Figure>
            <Figure>
                <Vector>
                    <GitHub />
                </Vector>
                <Caption>LINKEDIN</Caption>
            </Figure>
            <Figure>
                <Vector>
                    <Stack />
                </Vector>
                <Caption>LINKEDIN</Caption>
            </Figure>

        </Container>
    )
}