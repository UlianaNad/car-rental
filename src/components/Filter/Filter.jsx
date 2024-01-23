import React from "react";
import { useForm } from "react-hook-form";
import makes from "../data/makes.json";
import { useDispatch } from "react-redux";
import { fetchFilteredAdvertsThunk } from "../../redux/filter/filterThunk";
import { fetchAdvertsThunk } from "../../redux/adverts/advertsThunk";

const Filter = ({ pageNumber }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (data.make.value === "") {
      dispatch(fetchAdvertsThunk({ page: pageNumber, limit: 12 }));
    } else {
      console.log(data.make);
      dispatch(fetchFilteredAdvertsThunk(data));
    }
    reset();
  };

  //   const numbers = [];
  //   const priceOptions = () => {
  //     for (let i = 10; i < 500; i += 10) {
  //       numbers.push(i);
  //     }
  //     return numbers;
  //   };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="carBrand">Car Brand</label>

        <select {...register("make")} placeholder="Enter the text">
          <option value="">Select car brand</option>
          {makes.map((make, index) => {
            return (
              <option key={index} value={make}>
                {make}
              </option>
            );
          })}
        </select>
        {/* <label htmlFor="price">Rental price</label>
        <select {...register("rentalPrice")}>
          <option value="">Select rental price</option>
          {priceOptions().map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select> */}
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Filter;
