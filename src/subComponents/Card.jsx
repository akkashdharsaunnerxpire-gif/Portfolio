import { motion } from "framer-motion";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Github } from "../components/AllSvgs";

const Box = styled(motion.li)`
  width: 19rem;
  min-width: 19rem;
  min-height: 350px;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  padding: 1.5rem 2rem;
  margin-right: 5rem;

  border-radius: 0 50px 0 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid ${(props) => props.theme.body};

  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    min-width: 16rem;
    width: 16rem;
    margin-right: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 1.35rem;
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
`;

const Badge = styled.span`
  display: block;
  width: fit-content;
  margin-top: 0.8rem;
  padding: 0.25rem 0.8rem;
  font-size: 0.7rem;
  font-family: "Karla", sans-serif;
  font-weight: 600;
  letter-spacing: 0.04em;
  border: 1px solid currentColor;
  border-radius: 20px;
  animation: ${pulse} 1.8s ease-in-out infinite;
`;
const Description = styled.p`
  font-size: 0.95rem;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  line-height: 1.6;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  transition: border-color 0.3s ease;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  font-size: 0.8rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const VisitLink = styled.a`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.7rem 1.5rem;
  border-radius: 0 0 0 25px;
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;

  & > * {
    transition: fill 0.3s ease;
  }

  ${Box}:hover & > * {
    fill: ${(props) => props.theme.text};
  }
`;

const Item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { type: "spring", duration: 0.5 },
  },
};

const Card = (props) => {
  const { name, status, description, tags, demo, github } = props.data;

  return (
    <Box variants={Item}>
      <div>
        <Title>{name}</Title>
        {status && <Badge>🚧 {status}</Badge>}
      </div>

      <Description>{description}</Description>

      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </Tags>

      <Footer>
        {demo ? (
          <VisitLink href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo ↗
          </VisitLink>
        ) : (
          <span />
        )}

        {github && (
          <Git
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${name}`}
          >
            <Github width={30} height={30} />
          </Git>
        )}
      </Footer>
    </Box>
  );
};

export default Card;