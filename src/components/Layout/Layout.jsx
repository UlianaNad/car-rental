import NavBar from "../NavBar/NavBar";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </div>
  );
};

export default Layout;

export const Wrapper = styled.main`
  padding-top: 30px;

  &.modal-open {
    overflow: hidden;
  }
`;
