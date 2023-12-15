import { styled } from "styled-components";
import { EventDetailList } from "../../contance";
import Header from "../header";
import EventScheduleList from "./eventScheduleList";
import { useState } from "react";

const EventScheduleDetail = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleModifyButtonClick = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <>
      <Header />
      <Container>
        <TitleSection>
          <p>주간 행사 일정</p>
        </TitleSection>
        <SemititleSection>
          <p>2023.11.3 ~ 2023.11.10</p>
        </SemititleSection>
        <ButtonSection>
          <ModifyButton onClick={handleModifyButtonClick}>
            {isEditMode ? "저장" : "수정"}
          </ModifyButton>
        </ButtonSection>
        {EventDetailList.map((item) => (
          <EventScheduleList
            title={item.title}
            date={item.date}
            place={item.place}
            personnel={item.personnel}
          />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 80px 200px 0;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  p {
    font: ${({ theme }) => theme.fonts.Bold32};
    margin-bottom: 15px;
  }
`;

const SemititleSection = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.Black700};
  p {
    font: ${({ theme }) => theme.fonts.Medium20};
    margin-bottom: 12px;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  margin-bottom: 20px;
`;

const ModifyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 16px 0px;
  outline: none;
  border: none;
  border-radius: 8px;
  font: ${({ theme }) => theme.fonts.Semibold16};
  color: ${({ theme }) => theme.colors.Grey500};
  background-color: ${({ theme }) => theme.colors.Menubar};
  &:hover {
    color: ${({ theme }) => theme.colors.White};
    background-color: ${({ theme }) => theme.colors.Main};
  }
`;

export default EventScheduleDetail;
