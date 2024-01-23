import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdvertsThunk } from "../redux/adverts/advertsThunk";
import { toast } from "react-toastify";
import { selectAdverts, selectIsLoading } from "../redux/adverts/selectors";
import AdvertItem from "../components/Adverts/AdvertItem";
import Modal from "../components/Modal/Modal";
import Filter from "../components/Filter/Filter";
import { selectAllAdverts } from "../redux/filter/selectors";

const Catalog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // const [advertsData, setAdvertsData] = useState([]);
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const filterAdverts = useSelector(selectAllAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvertsThunk({ page: pageNumber, limit: 12 }))
      .unwrap()
      .catch((error) => toast.error(error.message));
  }, [dispatch, pageNumber]);

  const loadMore = () => {
    setPageNumber((prev) => prev + 1);
  };

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
      <Filter pageNumber={pageNumber} />
      <StyledUl>
        {filterAdverts.length > 0
          ? filterAdverts.map((advert) => (
              <AdvertItem
                toggleModal={toggleModal}
                key={advert.id}
                advert={advert}
              />
            ))
          : adverts.map((advert) => (
              <AdvertItem
                toggleModal={toggleModal}
                key={advert.id}
                advert={advert}
              />
            ))}
      </StyledUl>
      {pageNumber < 3 ? (
        <WrapButton>
          <LoadMoreButton onClick={loadMore} disabled={isLoading}>
            Load more
          </LoadMoreButton>
        </WrapButton>
      ) : (
        <WrapButton>You`ve reached the end of the list</WrapButton>
      )}
      {isOpen ? <Modal advert={selectedAdvert} close={toggleModal} /> : null}
    </ListWrapper>
  );
};

export default Catalog;
const StyledUl = styled.ul`
  display: grid;
  gap: 33px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const ListWrapper = styled.div`
  padding-left: 128px;
  padding-right: 128px;
  padding-bottom: 150px;
  padding-top: 50px;
`;
export const LoadMoreButton = styled.button`
  text-align: center;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  border: none;
  background-color: transparent;

  cursor: pointer;
  padding: 20px 10px;
`;
export const WrapButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  text-align: center;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
