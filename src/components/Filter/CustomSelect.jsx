import styled from "styled-components";
import { useState } from "react";

export const CustomSelectComponent = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <CustomSelect>
      <div onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Select car brand"}
      </div>
      <StyledDropdown isOpen={isOpen}>
        {options.map((option, index) => (
          <StyledOption key={index} onClick={() => handleSelect(option)}>
            {option}
          </StyledOption>
        ))}
      </StyledDropdown>
    </CustomSelect>
  );
};

const CustomSelect = styled.div`
  position: relative;
  display: inline-flex;
`;

const StyledDropdown = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  z-index: 10;
`;

const StyledOption = styled.div`
  padding: 14px 8px 14px 18px;
  justify-content: flex-end;
  align-items: flex-start;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
