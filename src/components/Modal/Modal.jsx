import React, { useEffect } from "react";
import styled from "styled-components";
import numeral from "numeral";
import { SpanInfo, WrapInfo } from "../Adverts/AdvertItem";
import { Link } from "react-router-dom";

const Modal = ({ close, advert }) => {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);

  return (
    <StyledOverlay onClick={handleClickOutside}>
      <StyledModal>
        <StyledCloseButton onClick={() => close()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledCloseButton>
        <StyledImgWrap>
          <StyledImg src={advert.img} alt="" />
        </StyledImgWrap>

        <StyledUl>
          <StyledCarName>
            {advert.make} <span>{advert.model}</span>, {advert.year}
          </StyledCarName>
          <WrapInfo>
            <div>
              <SpanInfo>{advert.address}</SpanInfo>
              <SpanInfo>Id:{advert.id}</SpanInfo>
              <SpanInfo>Year:{advert.year}</SpanInfo>
            </div>
            <div>
              <SpanInfo>Type:{advert.type}</SpanInfo>
              <SpanInfo>Fuel Consumption: {advert.fuelConsumption}</SpanInfo>
              <SpanInfo>Engine Size: {advert.engineSize}</SpanInfo>
            </div>
          </WrapInfo>
          <StyledInfo>
            <p>{advert.description}</p>
          </StyledInfo>
          <StyledInfo>
            <p>Accessories and functionalities:</p>
            <WrapInfo>
              <div>
                {advert.accessories.map((item, index) => {
                  return <SpanInfo key={index}>{item}</SpanInfo>;
                })}
              </div>
              <div>
                {advert.functionalities.map((item, index) => {
                  return <SpanInfo key={index}>{item}</SpanInfo>;
                })}
              </div>
            </WrapInfo>
          </StyledInfo>
          <StyledInfo>
            <p>Rental Conditions:</p>
            <WrapOptions>
              {advert.rentalConditions.split("\n").map((item, index) => {
                return <StyledOptions key={index}>{item}</StyledOptions>;
              })}
              <StyledOptions>
                Mileage: {numeral(advert.mileage).format("0,0")}
              </StyledOptions>
              <StyledOptions>Price: {advert.rentalPrice}</StyledOptions>
            </WrapOptions>
          </StyledInfo>
        </StyledUl>
        <StyledButton to="tel:+380730000000">Rental car</StyledButton>
      </StyledModal>
    </StyledOverlay>
  );
};

export default Modal;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  overflow: scroll;
`;
export const StyledModal = styled.div`
  width: 541px;
  //height: 752px;
  background-color: white;
  border-radius: 24px;
  padding: 40px;
  overflow: hidden;
  position: relative;
  @media (max-width: 425px) {
    padding: 10px;
  }
`;

export const StyledImgWrap = styled.div`
  margin-bottom: 8px;
`;
export const StyledImg = styled.img`
  width: 541px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
`;
export const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const StyledInfo = styled.li`
  p {
    color: #121417;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 14px;
  }
`;
export const StyledCarName = styled.li`
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
  span {
    color: #3470ff;
  }
`;
export const StyledButton = styled(Link)`
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  border: none;
`;

export const StyledOptions = styled.span`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const WrapOptions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;
export const StyledUl = styled.ul`
  margin-bottom: 34px;
`;
