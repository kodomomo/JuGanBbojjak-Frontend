import { styled } from "styled-components";
import List from "./List";
import { useState } from "react";
import { useParams } from "react-router";

const WeeklyWorkDetail = () => {
  const { params } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);

  const handleModifyButtonClick = () => {
    setIsEditMode(!isEditMode);
  };
  console.log(params);
  return (
    <Container>
      {params}
      <a>주간 업무 보고</a>
      <Date>2023.11.3~2023.11.10</Date>
      <ModifyBtn onClick={handleModifyButtonClick}>
        {isEditMode ? "저장" : "수정"}
      </ModifyBtn>
      <List />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    font: ${({ theme }) => theme.fonts.Semibold20};
  }
`;

const Date = styled.span`
  margin-top: 5px;
  font: ${({ theme }) => theme.fonts.Regular12};
`;

const ModifyBtn = styled.div`
  display: flex;
  width: 80px;
  height: 40px;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.Main};
  border-radius: 8px;
  left: 29vw;
  bottom: 1vh;
  font: ${({ theme }) => theme.fonts.Regular16};
  color: ${({ theme }) => theme.colors.White};
  cursor: pointer;
`;

export default WeeklyWorkDetail;
