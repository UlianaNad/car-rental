import React from "react";
import { useForm } from "react-hook-form";
import makes from "../data/makes.json";
import { toast } from "react-toastify";
import styled from "styled-components";

import { Controller } from "react-hook-form";
import Select from "react-select";

const Filter = ({ handleFilter, setFiltered }) => {
  const deleteADverts = () => {
    setFiltered(false);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "6px 14px 5px 14px ",
      boxShadow: "none",
      border: "none",
      borderRadius: "14px",
      backgroundColor: "#F7F7FB",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "#121417",
      fontFamily: "Manrope",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#171612",
      fontFamily: "Manrope",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "#ffffff",
      color: state.isFocused ? "#000000" : "rgba(18, 20, 23, 0.20)",
    }),
  };

  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.brand === "" && data.price === "") {
      toast.info("Select the option!");
    }

    handleFilter({ make: data.brand.value, price: data.price.value });

    reset();
  };

  const generatePrices = () => {
    const optionsArray = [];
    for (let i = 10; i < 550; i += 10) {
      optionsArray.push({ value: i, label: `${i} $` });
    }
    return optionsArray;
  };

  const brands = makes.map((brand) => ({
    value: brand,
    label: brand,
  }));

  return (
    <WrapForm>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormDiv>
          <Label htmlFor="carBrand">Car brand</Label>
          <Controller
            name="brand"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={brands}
                placeholder="Enter the text"
                styles={customStyles}
              />
            )}
          />
        </FormDiv>
        <FormDiv>
          <Label htmlFor="pricePerHour">Price/ 1 hour</Label>
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={generatePrices()}
                placeholder="To $"
                styles={customStyles}
              />
            )}
          />
        </FormDiv>
        <SearchButton type="submit">Search</SearchButton>
        <AllButton type="button" onClick={deleteADverts}>
          All Cars
        </AllButton>
      </StyledForm>
    </WrapForm>
  );
};

export default Filter;

const WrapForm = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const SearchButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  font-weight: 600;
  line-height: 1.4;
  border: none;
  .disabled {
    background: #a3aec8;
    color: black;
    cursor: not-allowed;
  }
`;
const AllButton = styled.button`
  text-align: center;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px 10px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;
