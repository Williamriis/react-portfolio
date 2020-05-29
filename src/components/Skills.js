import React from 'react'
import styled from 'styled-components'
import { MySkills } from './Content'


const Container = styled.div`
  display: flex;
  width: 100%;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 width: 50%;
 text-align: center;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const Header = styled.h1`
  color: red;
  font-weight: bold;
  font-size: 17px;
  font-family: 'Roboto';
  text-decoration: underline;
`
const Skill = styled.li`
font: 17px/28px 'Roboto'
`

export const Skills = () => {

  return (
    <Container>
      {MySkills.map((item) => {
        return (
          <ListContainer>
            <Header>{item.title}</Header>
            <List>
              {item.list.map((skill) => {
                return <Skill>{skill}</Skill>
              })}
            </List>
          </ListContainer>
        )
      })}
    </Container>
  )


}