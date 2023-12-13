import React, { useState } from "react";
import styled from "styled-components";
import { DropDownImg } from "../assets/logo";

interface DropdownProps {
  options: { initialState: string; option: string[] };
  width: number;
  onClick: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, width, onClick }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectItem, setSelectItem] = useState<string>(options.initialState);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setSelectItem(option);
    setIsOpen(false);
    onClick(option);
  };

  return (
    <DropContainer width={width}>
      <input
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        value={selectItem}
      />
      {isOpen && (
        <OptionList current={options.option.length > 4} width={width}>
          {options.option.map((option) => {
            return (
              <li key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            );
          })}
        </OptionList>
      )}
    </DropContainer>
  );
};

const DropContainer = styled.div<{ width: number }>`
  display: block;
  input {
    text-align: left;
    padding-left: 14px;
    color: #9d9d9d;
    font-size: 20px;
    font-weight: 400;
    width: ${({ width }) => width}px;
    height: 40px;
    border-radius: 8px;
    background-color: #ffff;
    border: 1px solid var(--Gray-300, #d2d2d2);
    background: no-repeat calc(100% - 9px) center url(${DropDownImg});
  }
  margin-right: 25px;
  margin-left: 30px;
`;

const OptionList = styled.ul<{ width: number; current: boolean }>`
  background-color: #ffff;
  position: absolute;
  margin-top: 5px;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 176px;
  list-style-type: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 13px 7px;
  z-index: 1;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: ${(props) => (props.current ? "block" : "none")};
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #1a9fff;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #d2d2d2;
    border-radius: 10px;
    border-radius: 8px;
    box-shadow: inset 0px 0px 5px white;
  }
  li {
    width: 100%;
    font-size: 20px;
    :hover {
      background-color: #d2d2d2;
    }
    cursor: pointer;
  }
`;
export default Dropdown;
