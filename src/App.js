import React, { useState } from 'react'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { AboutMe, TechList } from './components/Content'
import { MemoryGame } from 'components/ReactNative'


export const App = () => {
  const [showRodal, setShowRodal] = useState(false)
  return (
    <div>
      <Header />
      <MemoryGame showRodal={showRodal} setShowRodal={setShowRodal} />
      <Section backgroundColor="#F4F4F4" textBody={<AboutMe setShowRodal={setShowRodal} />} anchor="about-me" />
      <Section backgroundColor="white" titleText="TECH" textBody={TechList} />
      <Section backgroundColor="#F4F4F4" titleText="FEATURED PROJECTS" anchor="projects" />
      <Section backgroundColor="white" titleText="MY THOUGHTS" anchor="thoughts" />
      <Section backgroundColor="#F4F4F4" titleText="SKILLS" anchor="skills" />
      <Section backgroundColor="white" titleText="FOR MORE" />
      <Section backgroundColor="#133bce" anchor="contact" />
    </div>
  )
}
