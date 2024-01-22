import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/favorites/selectors";
import AdvertItem from "../components/Adverts/AdvertItem";
import styled from "styled-components";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  console.log(favorites);

  return (
    <div>
      <StyledUl>
        {favorites?.map((item) => {
          return <AdvertItem key={item.id} advert={item} />;
        })}
      </StyledUl>
    </div>
  );
};

export default Favorites;

const StyledUl = styled.ul`
  display: grid;
  gap: 33px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
