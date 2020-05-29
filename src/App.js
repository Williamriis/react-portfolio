import React from 'react'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { AboutMe, TechList } from './components/Content'

export const App = () => {
  return (
    <div>
      <Header />
      <Section backgroundColor="#F4F4F4" textBody={AboutMe} icon="true" />
      <Section backgroundColor="white" titleText="TECH" textBody={TechList} />
      <Section backgroundColor="#F4F4F4" titleText="FEATURED PROJECTS" />
      <Section backgroundColor="white" titleText="MY THOUGHTS" />
      <Section backgroundColor="#F4F4F4" titleText="SKILLS" />
      <Section backgroundColor="white" titleText="FOR MORE" />
      <Section backgroundColor="#133bce" />
    </div>
  )
}
