import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import car from "../../images/car-rental.png";
const NavBar = () => {
  return (
    <StyledHeader>
      <StyledNavLink to="/">
        <img src={car} alt="logo" />
      </StyledNavLink>
      <WrapNavLink>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="catalog">Catalog</StyledNavLink>
        <StyledNavLink to="favorites">Favorites</StyledNavLink>
      </WrapNavLink>
    </StyledHeader>
  );
};

export default NavBar;

export const StyledHeader = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 20px 50px;
`;
export const StyledNavLink = styled(NavLink)`
  color: darkgray;
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: black;
  }
`;

export const WrapNavLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
`;
