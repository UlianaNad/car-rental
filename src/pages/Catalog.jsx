import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdvertsThunk } from "../redux/adverts/advertsThunk";
import { toast } from "react-toastify";
import AdvertItem from "../components/Adverts/AdvertItem";
import Modal from "../components/Modal/Modal";
import Filter from "../components/Filter/Filter";
import { selectAllAdverts } from "../redux/filter/selectors";
import { fetchAllAdvertsThunk } from "../redux/filter/filterThunk";
import { selectAdverts, selectIsLoading } from "../redux/adverts/selectors";
import Loader from "../components/Loader/Loader";

const Catalog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(12);
  const dispatch = useDispatch();
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const allAdverts = useSelector(selectAllAdverts);
  const adverts = useSelector(selectAdverts);
  const [filtered, setFiltered] = useState(false);
  const isLoadingAdverts = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAdvertsThunk({ page: pageNumber, limit: pageSize }))
      .unwrap()
      .catch((error) => toast.error(error.message));
    dispatch(fetchAllAdvertsThunk());
  }, [dispatch, pageNumber, pageSize]);

  const loadMore = () => {
    setPageNumber((prev) => prev + 1);
  };

  const handleFilter = (data) => {
    const messageNoCars = `Sorry.There is no ${data.make} under ${data.price}`;

    if (data.make.length > 0 && data.price === "") {
      const filterByModel = allAdverts.filter(
        (item) => item.make === data.make
      );
      setFilteredAdverts(filterByModel);
      setPageNumber(1);
      setFiltered(true);
      toast.success(`We found ${filterByModel.length} ${data.make}`);
    } else if (data.price > 0 && data.make === "") {
      const filterByPrice = allAdverts.filter(
        (item) => item.rentalPrice <= Number(data.price)
      );

      if (filterByPrice.length !== 0) {
        setFilteredAdverts(filterByPrice);
        setPageNumber(1);
        setFiltered(true);
        toast.success(`We found ${filterByPrice.length} ${data.make} cars`);
      } else {
        toast.error(messageNoCars);
      }
    } else if (data.make.length > 0 && data.price > 0) {
      const filterByPriceAndModel = allAdverts.filter(
        (item) =>
          item.make === data.make && item.rentalPrice <= Number(data.price)
      );

      if (filterByPriceAndModel.length !== 0) {
        setFilteredAdverts(filterByPriceAndModel);
        setPageNumber(1);
        setFiltered(true);
        toast.success(
          `We found ${filterByPriceAndModel.length} ${data.make} with price under ${data.price}$`
        );
      } else {
        toast.error(messageNoCars);
      }
    }
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
    <>
      <ListWrapper>
        <Filter handleFilter={handleFilter} setFiltered={setFiltered} />
        {isLoadingAdverts ? (
          <Loader />
        ) : (
          <StyledUl>
            {filtered &&
              filteredAdverts
                .slice(0, pageNumber * pageSize)
                .map((advert) => (
                  <AdvertItem
                    toggleModal={toggleModal}
                    key={advert.id}
                    advert={advert}
                  />
                ))}
            {!filtered &&
              adverts
                .slice(0, pageNumber * pageSize)
                .map((advert) => (
                  <AdvertItem
                    toggleModal={toggleModal}
                    key={advert.id}
                    advert={advert}
                  />
                ))}
          </StyledUl>
        )}
        {pageNumber < Math.ceil(filteredAdverts.length / pageSize) ? (
          <WrapButton>
            <p>There is only {filteredAdverts.length} cars by your search.</p>
            <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
          </WrapButton>
        ) : null}
        {pageNumber < 3 && !filtered ? (
          <WrapButton>
            <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
          </WrapButton>
        ) : (
          !filtered && (
            <WrapButton>You've reached the end of the list</WrapButton>
          )
        )}
        {isOpen ? <Modal advert={selectedAdvert} close={toggleModal} /> : null}
      </ListWrapper>
    </>
  );
};

export default Catalog;

const StyledUl = styled.ul`
  /* display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  justify-items: center; */
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
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  text-align: center;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
