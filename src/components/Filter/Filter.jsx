import React from "react";
import { useForm } from "react-hook-form";
import makes from "../data/makes.json";

import { toast } from "react-toastify";
import styled from "styled-components";

const Filter = ({ handleFilter, handleAllAdverts }) => {
  const { register, handleSubmit, reset, watch } = useForm();

  const onSubmit = (data) => {
    if (data.make.value === "") {
      toast.info("Choose an option!");
    } else {
      handleFilter(data);
    }
    reset();
  };

  return (
    <WrapForm>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel>Car Brand</StyledLabel>
        <StyledSelect {...register("make")} placeholder="Enter the text">
          <option value="">Select car brand</option>
          {makes.map((make, index) => {
            return (
              <option key={index} value={make}>
                {make}
              </option>
            );
          })}
        </StyledSelect>
        <SearchButton type="submit" disabled={!watch("make")}>
          Search
        </SearchButton>
        <AllButton onClick={handleAllAdverts}>All Cars</AllButton>
      </StyledForm>
    </WrapForm>
  );
};

export default Filter;

export const WrapForm = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledSelect = styled.select`
  display: flex;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
`;
export const StyledLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  position: absolute;
  margin-top: -80px;
`;
export const SearchButton = styled.button`
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
    background: #bdd1ff;
  }
`;
export const AllButton = styled.button`
  text-align: center;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 20px 10px;
`;
