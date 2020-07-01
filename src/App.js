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
      <Section backgroundColor="#F4F4F4" textBody={<AboutMe setShowRodal={setShowRodal} />} icon="true" setShowRodal={setShowRodal} />
      <Section backgroundColor="white" titleText="TECH" textBody={TechList} />
      <Section backgroundColor="#F4F4F4" titleText="FEATURED PROJECTS" />
      <Section backgroundColor="white" titleText="MY THOUGHTS" />
      <Section backgroundColor="#F4F4F4" titleText="SKILLS" />
      <Section backgroundColor="white" titleText="FOR MORE" />
      <Section backgroundColor="#133bce" />
    </div>
  )
}
