import React from "react";
import styled from "styled-components";

function Feature() {
  return (
    <div>
      <FeatureContainer>
        <h1>Pizza of the Day</h1>
        <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
        <FeatureBtn>Order Now</FeatureBtn>
      </FeatureContainer>
    </div>
  );
}

export default Feature;

const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("images/featured3.jpg");
  height: 100vh;
  max-height: 500px;
  background-position: center top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    letter-spacing: 1.5px;
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    letter-spacing: 1px;
  }
`;
const FeatureBtn = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    transform: translateY(-0.3rem);
  }

  &:active {
    transform: translateY(-0.1rem);
  }
`;
