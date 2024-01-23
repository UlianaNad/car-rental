import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
  return (
    <div>
      <BackgroundDiv>
        <StyledTitle>Explore the Beauty of Finland</StyledTitle>
        <WrapText>
          <p>Looking to save more on your rental car?</p>
          <p>Discover rental car in Finland</p>
          <p>Select s range of car options and choose your favorite</p>
        </WrapText>
        <StyledLink to="/catalog">Go to car catalog</StyledLink>
      </BackgroundDiv>
    </div>
  );
};

export default HomePage;

export const BackgroundDiv = styled.div`
  height: 700px;
  width: 1200px;
  margin: 0 auto;
  background-image: url("https://img.freepik.com/free-photo/car-rides-road-among-forest-top-view_169016-28467.jpg?w=1060&t=st=1706011836~exp=1706012436~hmac=5eb283099d373c594616d962e82ef3a24c3f330890d752fd39894a9b45f14e21");
  background-size: cover;
  color: rgb(26, 26, 126);
  text-align: center;
  padding-top: 20px;
`;
export const StyledTitle = styled.p`
  font-size: 40px;
  margin-bottom: 210px;
  margin-top: 140px;
  background-color: rgb(255, 255, 255, 0.5);
`;
export const WrapText = styled.div`
  color: white;
  background-color: rgb(255, 255, 255, 0.3);
  p {
    padding: 5px;
  }
  margin-bottom: 20px;
`;
export const StyledLink = styled(NavLink)`
  display: flex;
  width: 274px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: transparent;
  cursor: pointer;
  color: var(--White, #fff);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin: 0 auto;
`;
