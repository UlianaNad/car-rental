import React, { useEffect } from 'react';
import styled from 'styled-components';

const Modal = ({ close, advert }) => {
  const handleClickOutside = e => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  return (
    <StyledOverlay onClick={handleClickOutside}>
      <StyledModal>
        <button onClick={() => close()}>close</button>
        <img src={advert.img} width={200} alt="" />
        <ul>
          <li>
            {advert.model}
            {advert.make}, {advert.year}
          </li>
          <li>
            <span>{advert.address}</span>
            <span>Id:{advert.id}</span>
            <span>Year:{advert.year}</span>
            <span>Type:{advert.type}</span>
            <span>Fuel Consumption: {advert.fuelConsumption}</span>
            <span>Engine Size: {advert.engineSize}</span>
          </li>
          <li>{advert.description}</li>
          <li>
            <h3>Accessories and functionalities:</h3>
            {advert.accessories.map(item => {
              return <span>{item}</span>;
            })}
            {advert.functionalities.map(item => {
              return <span>{item}</span>;
            })}
          </li>
          <li>
            <h3>Rental Conditions:</h3>
            {advert.rentalConditions.split('\n').map(item => {
              return <span>{item}</span>;
            })}
            <span>Mileage: {advert.mileage}</span>
            <span>Price: {advert.rentalPrice}</span>
          </li>
        </ul>
        <button>Rental car</button>
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
`;
export const StyledModal = styled.div`
  width: 541px;
  height: 752px;
  background-color: white;
  border-radius: 24px;
  padding: 40px;
  overflow: hidden;
  position: relative;
  padding: 20px;
  @media (max-width: 425px) {
    padding: 10px;
  }
`;
