import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import styled from 'styled-components';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../../redux/favorites/slice';

const AdvertItem = ({ advert, toggleModal }) => {
  const addresses = advert.address.split(',').slice(1);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleInputCheckboxChange = ({ target }) => {
    console.log(favorites);
    console.log(advert);
    if (target.checked) {
      dispatch(addToFavorites(advert));
    } else {
      dispatch(deleteFromFavorites(advert.id));
    }
  };

  return (
    <StyledCard>
      <WrapCheckbox>
        <input
          onChange={handleInputCheckboxChange}
          type="checkbox"
          name={advert.id}
        />
      </WrapCheckbox>
      <div>
        <WrapImg>
          <StyledImg src={advert.img} alt="" />
        </WrapImg>

        <WrapMainInfo>
          <span>
            {advert.make}, {advert.year}
          </span>
          <span>{advert.rentalPrice}</span>
        </WrapMainInfo>
        <WrapInfo>
          <SpanInfo>{addresses[0]}</SpanInfo>
          <SpanInfo>{addresses[1]}</SpanInfo>
          <SpanInfo>{advert.rentalCompany}</SpanInfo>
          <SpanInfo>
            {
              advert.accessories[
                Math.floor(Math.random() * advert.accessories.length)
              ].split(' ')[0]
            }
          </SpanInfo>
          <SpanInfo>{advert.type}</SpanInfo>
          <SpanInfo>{advert.model}</SpanInfo>
          <SpanInfo>{advert.mileage}</SpanInfo>
          <SpanInfo>
            {
              advert.functionalities[
                Math.floor(Math.random() * advert.functionalities.length)
              ].split(' ')[0]
            }
          </SpanInfo>
        </WrapInfo>
      </div>
      <DeleteButton onClick={() => toggleModal(advert)}>
        Learn more
      </DeleteButton>
    </StyledCard>
  );
};

export default AdvertItem;

const StyledCard = styled.li`
  position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  flex-shrink: 0;
`;

export const WrapImg = styled.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

export const WrapInfo = styled.div`
  font-size: 12px;
  color: rgb(18, 20, 23, 0.5);
  font-weight: 400;
  margin-bottom: 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const SpanInfo = styled.span`
  padding-left: 6px;
  padding-right: 6px;
  border-right: 1px solid rgb(18, 20, 23, 0.1);

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
    border-right: none;
  }
`;

export const WrapMainInfo = styled.div`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
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
  &:hover {
    background: #0b44cd;
  }
`;
export const WrapCheckbox = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;
