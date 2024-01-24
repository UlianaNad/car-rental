import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/favorites/selectors";
import AdvertItem from "../components/Adverts/AdvertItem";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";
import { WrapButton } from "./Catalog";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  const toggleModal = (advert) => {
    const body = document.body;

    if (!isOpen) {
      body.classList.add("modal-open");
      setSelectedAdvert(advert);
    } else {
      body.classList.remove("modal-open");
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <ListWrapper>
      {favorites.length !== 0 ? (
        <StyledUl>
          {favorites?.map((item) => {
            return (
              <AdvertItem
                key={item.id}
                advert={item}
                toggleModal={toggleModal}
              />
            );
          })}
        </StyledUl>
      ) : (
        <WrapButton>
          Your list of favorites is empty. Add the new cars to favorites!
        </WrapButton>
      )}

      {isOpen ? <Modal advert={selectedAdvert} close={toggleModal} /> : null}
    </ListWrapper>
  );
};

export default Favorites;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 29px;
  li {
    margin-bottom: 50px;
  }
`;
export const ListWrapper = styled.div`
  padding-bottom: 150px;
`;
