import React from 'react'
import { Header } from './components/Header'
import { Section } from './components/Section'

const AboutMe = "Hello! I’m a creative frontend developer who loves working in JavaScript and React. I have a passion for making fun and interactive apps and websites."
const TechList = "HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux, Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github."
export const App = () => {
  return (
    <div>
      <Header />
      <Section backgroundColor="#F4F4F4" textBody={AboutMe} />
      <Section backgroundColor="white" titleText="TECH" textBody={TechList} />
      <Section backgroundColor="#F4F4F4" titleText="FEATURED PROJECTS" subTitle="OTHER PROJECTS" projectCard="true" />
      <Section backgroundColor="white" titleText="MY THOUGHTS" subTitle="OTHER THOUGHTS" />
      <Section backgroundColor="#F4F4F4" titleText="SKILLS" />
      <Section backgroundColor="white" titleText="FOR MORE" />
      <Section backgroundColor="blue" />
    </div>
  )
}
