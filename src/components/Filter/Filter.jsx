import React from "react";
import { useForm } from "react-hook-form";
import makes from "../data/makes.json";
import { toast } from "react-toastify";
import styled from "styled-components";

const numbers = [];
const generatePriceOptions = () => {
  for (let i = 10; i < 550; i += 10) {
    numbers.push(i);
  }
};
generatePriceOptions();

const Filter = ({ handleFilter, setFiltered }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.make === "" && data.price === "") {
      toast.info("Select the option!");
    }

    handleFilter(data);

    reset();
  };

  const deleteADverts = () => {
    setFiltered(false);
  };
  return (
    <WrapForm>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <SelectBox>
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
        </SelectBox>

        <SelectBox>
          <StyledLabel $price={true}>Price/ 1 hour</StyledLabel>
          <StyledSelect {...register("price")} placeholder="$">
            <option value=""> To $</option>
            {numbers.map((number, index) => {
              return (
                <option key={index} value={number}>
                  {number}
                </option>
              );
            })}
          </StyledSelect>
        </SelectBox>

        <SearchButton type="submit">Search</SearchButton>
        <AllButton type="button" onClick={deleteADverts}>
          All Cars
        </AllButton>
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
  border: none;
  appearance: none;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;

  option {
    color: rgba(18, 20, 23, 0.2);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    background-color: white;
  }
`;
export const SelectBox = styled.div`
  position: relative;
  display: flex;
`;
export const StyledLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  position: absolute;
  margin-top: -25px;
  margin-left: ${(props) => (props.price === true ? "250px" : "0px")};
`;
export const SearchButton = styled.button`
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
