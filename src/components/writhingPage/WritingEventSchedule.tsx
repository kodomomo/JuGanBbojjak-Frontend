import styled from "styled-components";
import Header from "../header";
import WritingComponent from "./WritingComponent";
import { useNavigate } from "react-router";

const WritingEventSchedule = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <MainText>주간 행사 일정 작성</MainText>
        <WritingComponent />
        <Button type="button">+</Button>
        <ButtonWrapper>
          <Cancelbutton
            onClick={() => {
              navigate("/main");
            }}
          >
            취소
          </Cancelbutton>
          <Savebutton onClick={() => navigate("/main")}>저장</Savebutton>
        </ButtonWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: var(--White, #fff);
  padding: 0 7%;
`;

const MainText = styled.div`
  font-size: 32px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Button = styled.button`
  border-radius: 8px;
  background-color: #1a9fff;
  display: flex;
  height: 60px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #ffff;
  font-size: 45px;
  border: none;
  &:hover {
    filter: brightness(1.25);
    transition: all 0.3s;
  }
  margin-top: 50px;
`;

const Cancelbutton = styled.button`
  border-radius: 8px;
  background: var(--Gray-300, #d2d2d2);
  display: flex;
  width: 80px;
  height: 40px;
  padding: 15px 0px 16px 0px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  &:hover {
    background: #1a9fff;
  }
  border: none;
`;

const Savebutton = styled.button`
  border: none;
  border-radius: 8px;
  background: var(--Gray-300, #d2d2d2);
  display: flex;
  width: 80px;
  height: 40px;
  padding: 15px 0px 16px 0px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  &:hover {
    background: #1a9fff;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 150px;
`;

export default WritingEventSchedule;
