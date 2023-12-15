import styled from "styled-components";
import DefaultInput from "../../common/input";
import { useState } from "react";
import Dropdown from "../../common/dropDown";
import {
  monthDropDownItem,
  dayDropDownItem,
  timeDropDownItem
} from "../../constants/DropdownList";

 const WritingComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDropdownOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Wrapper>
      <DefaultInput
        width={65}
        placeholder="행사명을 입력해주세요"
        text="행사"
      />
      <DefaultInput
        width={36}
        placeholder="행사 장소를 입력해주세요"
        text="장소"
      />
      <DropdownWrapper>
        <DropdownText>일시</DropdownText>
        <Dropdown
          options={monthDropDownItem}
          width={113}
          onClick={handleDropdownOption}
        />
        <Dropdown
          options={dayDropDownItem}
          width={113}
          onClick={handleDropdownOption}
        />
         <Dropdown
          options={timeDropDownItem}
          width={113}
          onClick={handleDropdownOption}
        />
      </DropdownWrapper>
      <Div>
        <DefaultInput
          width={28}
          placeholder="인원을 입력해주세요"
          text="인원"
        />
        <Allpeople>전 직원</Allpeople>
        <CheckBox
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </Div>
    </Wrapper>
  );
};

const DropdownText = styled.div`
  color: var(--Black, #000);
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;

const DropdownWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;
const Div = styled.div`
  display: flex;
`;

const Allpeople = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  margin-left: 45px;
`;
const Wrapper = styled.div`
  border-radius: 20px;
  border: 1px solid #1a9fff;
  background: ${({ theme }) => theme.color?.White};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  height: 510px;
  padding: 60px 80px;
`;

export default WritingComponent
