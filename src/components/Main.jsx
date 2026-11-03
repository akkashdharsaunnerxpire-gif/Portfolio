import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

import { YinYang } from "./AllSvgs";
import Intro from "./Intro";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 2;
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 2;
  transition: color 0.5s ease 0.8s;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: 2;

  @media (max-width: 600px) {
    bottom: 1.5rem;
    gap: 1rem;
  }
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  transition: color 0.5s ease 0.8s;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;

const rotate = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.$click ? "85%" : "50%")};
  left: ${(props) => (props.$click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: top 1s ease, left 1s ease;
  z-index: 3;

  & > :first-child {
    width: ${(props) => (props.$click ? "120px" : "200px")};
    height: ${(props) => (props.$click ? "120px" : "200px")};
    transition: width 1s ease, height 1s ease;
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.$click ? "none" : "inline-block")};
    padding-top: 1rem;
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 600px) {
    & > :first-child {
      width: ${(props) => (props.$click ? "80px" : "140px")};
      height: ${(props) => (props.$click ? "80px" : "140px")};
    }
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: #000;
  z-index: 1;

  width: ${(props) => (props.$click ? "50%" : "0%")};
  height: ${(props) => (props.$click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const hoverTap = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick((prev) => !prev);

  return (
    <MainContainer>
      <DarkDiv $click={click} />

      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center $click={click} onClick={handleClick}>
          <YinYang fill="currentColor" />
          <span>Explore My Portfolio</span>
        </Center>

        <Contact
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:akkashdharsaun02@gmail.com"
        >
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 1 }}
            {...hoverTap}
          >
            Say hi..
          </motion.h2>
        </Contact>

        <WORK to="/work" $click={click}>
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 1 }}
            {...hoverTap}
          >
            Work
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about" $click={click}>
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 1.5, delay: 1 }}
              {...hoverTap}
            >
              About.
            </motion.h2>
          </ABOUT>

          <SKILLS to="/skills">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 1.5, delay: 1 }}
              {...hoverTap}
            >
              My Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>

      <AnimatePresence>{click && <Intro key="intro" />}</AnimatePresence>
    </MainContainer>
  );
};

export default Main;