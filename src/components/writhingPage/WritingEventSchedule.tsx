import styled from "styled-components";
import Header from "../header";
import DefaultInput from "../../common/input";

const WritingEventSchedule = () => {
  return (
    <>
      <Header />
      <Container>
        <MainText>주간 행사 일정 작성</MainText>
        <Wrapper>
          <DefaultInput width={1228} placeholder="행사명을 입력해주세요" text="행사"/>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: var(--White, #fff);
  padding: 0 10%;
`;

const MainText = styled.div`
  font-size: 32px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  border-radius: 20px;
  border: 1px solid var(--Main, #1a9fff);
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  height: 510px;
  display: flex;
  justify-content: center;
  padding: 60px 0;
`;

export default WritingEventSchedule;
