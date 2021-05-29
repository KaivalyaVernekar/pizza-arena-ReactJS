import React, { useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Sidebar from "./Sidebar";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroPara>Ready in 15 minutes</HeroPara>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;

//styling via styled-components//

const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("images/pizza-3.jpg");
  height: 100vh;
  background-position: center top;
  background-size: cover;
  overflow: hidden;
`;

const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0 calc((100vw-1300px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  margin-left: 10px;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

const HeroPara = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

const HeroBtn = styled.button`
  font-size: 1.4rem;
  cursor: pointer;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-in-out;
    color: #000;
    transform: translateY(-0.3rem);
  }

  &:active {
    transform: translateY(-0.1rem);
  }
`;
