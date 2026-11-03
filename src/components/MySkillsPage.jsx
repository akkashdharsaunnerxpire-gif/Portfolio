import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

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
  align-items: stretch;
  gap: 3rem;
  padding: 120px 5% 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 110px 5% 60px;
  }
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};

  padding: 1.5rem;
  width: 100%;
  max-width: 560px;
  flex: 1;
  min-height: 480px;

  z-index: 3;
  line-height: 1.6;
  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;

  transition:
    color 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 900px) {
    max-width: 100%;
    flex: none;
    min-height: auto;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: calc(1em + 1vw);
  margin-bottom: 0.5rem;

  & > * {
    transition: fill 0.3s ease;
  }

  ${Main}:hover & > * {
    fill: ${(props) => props.theme.body};
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

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

  p {
    margin: 0;
    line-height: 1.8;
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

        <Main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Title>
            <Design width={40} height={40} />
            Frontend Development
          </Title>

          <Description>
            I build responsive, interactive and user-friendly web interfaces
            with modern frontend technologies.
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

          <Description>
            <strong>Cloud, Hosting & Services</strong>
            <ul>
              <li>Render (Hosting and Deployment)</li>
              <li>MongoDB Atlas (Cloud Database)</li>
              <li>Cloudinary (Image and Media Upload)</li>
              <li>Twilio (SMS and OTP Verification)</li>
            </ul>
          </Description>
        </Main>

        <Main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <Title>
            <Develope width={40} height={40} />
            Backend Development
          </Title>

          <Description>
            I develop backend applications, REST APIs and database-driven
            systems with a focus on functionality and maintainable code.
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
            <strong>Databases & Caching</strong>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Redis (Caching)</li>
            </ul>
          </Description>

          <Description>
            <strong>Tools & Other Skills</strong>
            <ul>
              <li>Git and GitHub</li>
              <li>Postman (API Testing)</li>
              <li>Java</li>
              <li>Debugging and Software Testing</li>
              <li>Database Design</li>
            </ul>
          </Description>

          <Description>
            <strong>AI Tools</strong>
            <p>
              Claude, ChatGPT, DeepSeek, Copilot, Grok, Cursor, Bolt
            </p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="10%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;