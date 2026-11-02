import React from "react";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/spaceman.png";
import styled, { ThemeProvider, keyframes } from "styled-components";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 130px 7% 70px;

  @media (max-width: 768px) {
    padding: 110px 6% 50px;
    overflow-y: auto;
  }
`;

const float = keyframes`
  0% { transform: translateY(-10px); }
  50% { transform: translateY(15px) translateX(15px); }
  100% { transform: translateY(-10px); }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 18vw;
  max-width: 230px;
  animation: ${float} 4s ease infinite;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100px;
    top: 80px;
    right: 5%;
    opacity: 0.5;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2.5rem;
  width: min(720px, 70%);
  min-height: 450px;
  z-index: 3;
  line-height: 1.7;
  font-size: 1.05rem;
  backdrop-filter: blur(8px);
  position: relative;
  font-family: "Ubuntu Mono", monospace;
  background: rgba(255, 255, 255, 0.025);

  h2 {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }

  strong {
    color: ${(props) => props.theme.text};
  }

  .highlight {
    margin-top: 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
    font-size: 0.9rem;
    min-height: auto;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="Astronaut illustration" />
        </Spaceman>

        <Main>
          <h2>About Me</h2>

          I'm <strong>Akkash Dharsaun</strong>, a Full Stack Developer
          from Tamil Nadu, India.

          <br />
          <br />

          I completed my Bachelor of Engineering in Computer Science
          and Engineering from Bethlehem Institute of Engineering
          with a CGPA of <strong>7.89 / 10</strong>.

          <br />
          <br />

          I have hands-on industry experience as a Full Stack Intern
          at <strong>NerXpire Technologies, Nagercoil</strong>, where
          I worked on real-world web applications, frontend-backend
          integration, REST APIs, Git and GitHub.

          <br />
          <br />

          My technical interests include React.js, Node.js, Express.js,
          Python, FastAPI, MongoDB, PostgreSQL and MySQL.

          <br />
          <br />

          I have developed projects including PeopleVoice,
          AI-Based Career Guidance System, SupplyGuard and
          <strong> MNCConnect</strong> — a platform featuring
          mentor-fresher communication, booking, real-time chat,
          video sessions and payment integration.

          <br />
          <br />

          <strong>My goal:</strong> Build scalable, user-friendly
          applications and continuously grow as a software developer.

          <div className="highlight">
            Interested in opportunities, collaboration and
            innovative software projects.
          </div>
        </Main>

        <BigTitle text="ABOUT" top="5%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;