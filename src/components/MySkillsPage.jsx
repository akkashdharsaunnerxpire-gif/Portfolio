import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  min-height: 100vh;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 100px 5% 70px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};

  padding: 1.5rem;
  width: 38vw;
  min-height: 480px;

  z-index: 3;
  line-height: 1.6;
  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 900px) {
    width: 85%;
    min-height: auto;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: calc(1em + 1vw);

  ${Main}:hover & > * {
    fill: ${(props) => props.theme.body};
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    display: block;
    margin-bottom: 0.7rem;
    text-transform: uppercase;
  }

  ul {
    margin-left: 1.5rem;
  }

  li {
    margin-bottom: 0.4rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <Design width={40} height={40} />
            Frontend Development
          </Title>

          <Description>
            I build responsive, interactive and user-friendly
            web interfaces with modern frontend technologies.
          </Description>

          <Description>
            <strong>Technologies</strong>
            <ul>
              <li>HTML5 and CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Responsive Web Design</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </Description>

          <Description>
            <strong>Application Development</strong>
            <ul>
              <li>UI Development</li>
              <li>Frontend-Backend Integration</li>
              <li>API Integration</li>
            </ul>
          </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} />
            Backend Development
          </Title>

          <Description>
            I develop backend applications, REST APIs and
            database-driven systems with a focus on functionality
            and maintainable code.
          </Description>

          <Description>
            <strong>Backend Technologies</strong>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>FastAPI</li>
              <li>REST API Development</li>
            </ul>
          </Description>

          <Description>
            <strong>Databases</strong>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </Description>

          <Description>
            <strong>Tools & Other Skills</strong>
            <ul>
              <li>Git and GitHub</li>
              <li>Java</li>
              <li>Debugging and Software Testing</li>
              <li>Database Design</li>
            </ul>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="10%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;