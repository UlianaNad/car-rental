import NavBar from "../NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </div>
  );
};

export default Layout;

export const Wrapper = styled.main`
  overflow: auto;

  &.modal-open {
    overflow: hidden;
  }
`;
