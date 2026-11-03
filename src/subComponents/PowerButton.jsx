import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { PowerBtn } from "../components/AllSvgs";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;

  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  z-index: 3;

  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
    transform: translateX(-50%) scale(1.1);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      // Already home: full reset to starting state
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <Power onClick={handleClick} aria-label="Go to home">
      <PowerBtn width={30} height={30} fill="currentColor" />
    </Power>
  );
};

export default PowerButton;