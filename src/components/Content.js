import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

export const MyProjects = [
    {
        image: require('../ChessAcademy.png'),
        title: 'ONLINE CHESS',
        description: 'Online Chess made with React, MongoDB and Web Sockets',
        slug: 'ONLINE CHESS',
        tech: ['React', 'JavaScript ES6', 'Node.js', 'MongoDB', 'Web Sockets'],
        url: "https://chessacademy.netlify.app/"
    },
    {
        image: require('../FilmSite.png'),
        title: 'FILM DATABASE',
        description: 'Web app built in React using open film API',
        slug: 'FILM DATABASE.',
        tech: ['HTML5', 'CSS3', 'React', 'JavaScript ES6'],
        url: "https://angry-carson-9ce19e.netlify.app/"
    },
    {
        image: require('../HappyThoughts.png'),
        title: 'MESSENGER APP',
        description: 'Messenger App with Node.js and MongoDB',
        slug: 'MESSENGER APP',
        tech: ['Node.js', 'MongoDB', 'React', 'JavaScript ES6'],
        url: "https://festive-heyrovsky-dd1229.netlify.app/"
    },
    {
        image: require('../ToDoApp.png'),
        title: 'TODO APP',
        description: "Todo list app utilising React and Redux",
        slug: 'TODO APP',
        tech: ["React", "Redux", "JavaScript ES6", "CSS3"],
        url: "https://affectionate-heyrovsky-4d7414.netlify.app/"
    }

]

export const OtherProjects = [

    {
        slug: "MESSENGER APP",
        description: 'Messenger App with Node.js and MongoDB',
        tech: ['Node.js', 'MongoDB', 'React', 'JavaScript ES6'],
        url: "https://festive-heyrovsky-dd1229.netlify.app/"
    },

    {
        slug: "TODO APP",
        description: "Todo list app utilising React and Redux",
        tech: ["React", "Redux", "JavaScript ES6", "CSS3"],
        url: "https://affectionate-heyrovsky-4d7414.netlify.app/"
    },

    {
        slug: "MEMORY GAME",
        description: 'Mobile app built in React Native',
        tech: ['HTML5', 'CSS3', 'React Native', 'JavaScript ES6'],
        url: "https://github.com/Williamriis/project-react-native-app"
    },

    {
        slug: "MUSIC SITE",
        description: "Web app built in React using Spotify API",
        tech: ["HTML5", "CSS3", "React", "JavaScript ES6"],
        url: "https://frosty-neumann-f2d0d2.netlify.app/"
    },

    {
        slug: "FRIDGE APP",
        description: "App builting using React and Redux to scan and categorise food products",
        tech: ["React", "Redux", "JavaScript ES6", "CSS3"],
        url: "https://jovial-edison-eb743b.netlify.app/"
    },
    {
        slug: "WEATHER APP",
        description: "A weather forecast app using an open weather API",
        tech: ["JavaScript ES6", "CSS3", "HTML5"],
        url: "https://zealous-goldberg-f559b8.netlify.app/"
    },

]

export const MyThoughts = [
    {
        image: require('../thoughts-large.png'),
        date: "MAY 2020",
        title: "Async Functions",
        description: "Async functions and trouble-shooting",
        url: "https://medium.com/@william.riis93/async-functions-b9d7a33d1891"
    },
    {
        image: require('../thoughts-diary.jpg'),
        date: "APRIL 2020",
        title: "Diary of a Frontend Developer",
        description: "if('code not working === true')",
        url: "https://medium.com/@william.riis93/diary-of-frontend-developer-e6109edb115a"
    }
]

export const OtherThoughts = [

    {
        date: "APRIL 2020",
        title: "Diary of a Frontend Developer",
        url: "https://medium.com/@william.riis93/diary-of-frontend-developer-e6109edb115a"
    },
    {
        date: "MAR 2020",
        title: "APIs and Fetch",
        url: "https://medium.com/@william.riis93/apis-and-fetch-ecf570406340"
    },
    {
        date: "FEB 2020",
        title: "CSS Basics: Box-sizing",
        url: "https://www.linkedin.com/pulse/box-sizing-border-box-vs-content-box-william-jensen/?published=t"
    }
]

export const MySkills = [
    {
        title: "CODE",
        list: ["HTML5", "CSS3", "JavaScript", "ES6", "React", "React Native", "Redux", "Node.JS", "Mongoose"]
    },
    {
        title: "TOOLBOX",
        list: ["Postman", "GitHub", "JavaScript", "Slack", "Express", "MongoDB"]
    }
]

const ShowRodalButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  text-decoration: underline;
  font: 20px/32px 'Montserrat';
`
const Point = keyframes`
0% {left: -8px};
50% {left: -3px};
100% {left: -8px};
`

const Hand = styled.span`
  color: red;
  font-size: 24px;
  position: relative;
  left: -8px;
  top: 23px;
  animation: ${Point} .5s infinite ease-in;
`

const Icon = <FontAwesomeIcon className="hand" icon={faHandPointRight} />

export const AboutMe = ({ setShowRodal }) => {


    return (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Hand>{Icon}</Hand>
            <p>Hello! I’m a creative frontend developer who loves working in JavaScript and React. I have a passion for making fun and interactive apps and websites. <ShowRodalButton onClick={() => setShowRodal(true)}>Here's</ShowRodalButton> a preview of something I made for mobile.</p>
        </div>
    )


}

export const TechList = "HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux, Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github."

