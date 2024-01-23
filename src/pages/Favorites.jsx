import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/favorites/selectors";
import AdvertItem from "../components/Adverts/AdvertItem";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";

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
      <StyledUl>
        {favorites?.map((item) => {
          return (
            <AdvertItem key={item.id} advert={item} toggleModal={toggleModal} />
          );
        })}
      </StyledUl>
      {isOpen ? <Modal advert={selectedAdvert} close={toggleModal} /> : null}
    </ListWrapper>
  );
};

export default Favorites;

const StyledUl = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
`;
export const ListWrapper = styled.div`
  padding-left: 128px;
  padding-right: 128px;
  padding-bottom: 150px;
`;
