import React, { useState } from 'react'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { AboutMe, TechList } from './components/Content'
import { ReactNative } from './components/ReactNative'

export const App = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Header />
      <ReactNative show={show} setShow={setShow} />
      <Section backgroundColor="#F4F4F4" textBody={AboutMe} icon="true" setShow={setShow} />
      <Section backgroundColor="white" titleText="TECH" textBody={TechList} setShow={setShow} />
      <Section backgroundColor="#F4F4F4" titleText="FEATURED PROJECTS" />
      <Section backgroundColor="white" titleText="MY THOUGHTS" />
      <Section backgroundColor="#F4F4F4" titleText="SKILLS" />
      <Section backgroundColor="white" titleText="FOR MORE" />
      <Section backgroundColor="#133bce" />
    </div>
  )
}
