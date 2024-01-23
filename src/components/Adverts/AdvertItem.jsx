import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import styled from "styled-components";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../../redux/favorites/favoritesSlice";
import numeral from "numeral";
import PropTypes from "prop-types";

const AdvertItem = ({ advert, toggleModal }) => {
  const addresses = advert.address.split(",").slice(1);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavoriteCar = favorites?.some(
    (favorite) => favorite.id === advert.id
  );

  const handleInputCheckboxChange = (advert) => {
    if (!isFavoriteCar) {
      dispatch(addToFavorites(advert));
    } else {
      dispatch(deleteFromFavorites(advert));
    }
  };

  return (
    <StyledCard>
      <WrapCheckboxButton
        $isFavorite={isFavoriteCar}
        onClick={() => {
          handleInputCheckboxChange(advert);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
        >
          <path d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z" />
        </svg>
      </WrapCheckboxButton>
      <div>
        <WrapImg>
          <StyledImg src={advert.img} alt="" />
        </WrapImg>

        <WrapMainInfo>
          <span>
            {advert.make} <BlueSpan>{advert.model}</BlueSpan>, {advert.year}
          </span>
          <span>{advert.rentalPrice}</span>
        </WrapMainInfo>
        <WrapInfo>
          <div>
            <SpanInfo>{addresses[0]}</SpanInfo>
            <SpanInfo>{addresses[1]}</SpanInfo>
            <SpanInfo>{advert.rentalCompany}</SpanInfo>

            <SpanInfo>
              {
                advert.accessories[
                  Math.floor(Math.random() * advert.accessories.length)
                ].split(" ")[0]
              }
            </SpanInfo>
          </div>
          <div>
            <SpanInfo>{advert.type}</SpanInfo>
            <SpanInfo>{advert.model}</SpanInfo>
            <SpanInfo>{numeral(advert.mileage).format("0,0")}</SpanInfo>
            <SpanInfo>
              {
                advert.functionalities[
                  Math.floor(Math.random() * advert.functionalities.length)
                ].split(" ")[0]
              }
            </SpanInfo>
          </div>
        </WrapInfo>
      </div>
      <LearnMoreButton onClick={() => toggleModal(advert)}>
        Learn more
      </LearnMoreButton>
    </StyledCard>
  );
};

AdvertItem.propTypes = {
  advert: PropTypes.shape({
    id: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default AdvertItem;

const StyledCard = styled.li`
  position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;

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
export const BlueSpan = styled.span`
  color: #3470ff;
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

const LearnMoreButton = styled.button`
  position: absolute;
  bottom: 15px;
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
export const WrapCheckboxButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;

  svg {
    stroke: ${(props) => (props.$isFavorite ? "#3470FF" : "white")};
    fill: ${(props) => (props.$isFavorite ? "#3470FF" : "transparent")};
  }
`;
