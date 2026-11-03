import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background:
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  @media (max-width: 768px) {
    width: 85vw;
    height: 40vh;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;

  .pic {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 125%;
    width: auto;
    max-width: none;
    object-fit: contain;
    object-position: bottom;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    .pic {
      height: 105%;
    }
  }
`;

const Text = styled(motion.div)`
  font-size: calc(1em + 1.2vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    margin: 0;
  }

  h3 {
    font-size: 1.3em;
  }

  h6 {
    font-size: 0.65em;
  }

  .skills {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1vw);
    font-weight: 300;
  }

  @media (max-width: 768px) {
    padding: 0.7rem;

    h3 {
      font-size: 0.9em;
    }
  }
`;

const ResumeBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  align-self: flex-start;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.body};

  padding: 0.6rem 1.4rem;
  font-size: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0 0 0 20px;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.4rem 0.9rem;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      exit={{ height: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      transition={{ type: "spring", duration: 1.8, delay: 1.2 }}
    >
      <SubBox>
        <Text
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <h1>Hi,</h1>
          <h3>I'm Akkash Dharsaun</h3>
          <h6>Full Stack Developer</h6>
          <h6 className="skills">React.js | Node.js | Python</h6>

          <ResumeBtn
            href="/AkkashDharsaunATSResume.pdf"
            download="AkkashDharsaunATSResume.pdf"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            ⬇ Download Resume
          </ResumeBtn>
        </Text>
      </SubBox>

      <SubBox>
        <motion.div
          style={{ width: "100%", height: "100%", position: "relative" }}
          initial={{ opacity: 0, y: 120, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{
            opacity: 0,
            y: 60,
            scale: 0.8,
            transition: { duration: 0.3 },
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            mass: 0.8,
            delay: 2.6,
          }}
        >
          <motion.img
            className="pic"
            src={Me}
            alt="Akkash Dharsaun"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 4,
            }}
          />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;