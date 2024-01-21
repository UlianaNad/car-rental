import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <StyledHeader>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="catalog">Catalog</StyledNavLink>
      <StyledNavLink to="favorites">Favorites</StyledNavLink>
    </StyledHeader>
  );
};

export default NavBar;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 20px 30px;
`;
export const StyledNavLink = styled(NavLink)`
  color: darkgray;
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: black;
  }
`;
