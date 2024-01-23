import React from "react";
import { Audio } from "react-loader-spinner";
import styled from "styled-components";

const Loader = () => {
  return (
    <WrapLoader>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </WrapLoader>
  );
};

export default Loader;

export const WrapLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;
