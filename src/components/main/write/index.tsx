import { styled } from "styled-components";
import { useNavigate } from "react-router";

const Write = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <WriteBoxWrapper>
          <WriteBox>
            <WriteBtn onClick={()=>{navigate("/workReport")}} >주간 업무 보고 작성하러 가기</WriteBtn>
          </WriteBox>
          <WriteBox>
            <WriteBtn  onClick={()=>{navigate("/writeSchedule")}}>주간 행사 일정 작성하러 가기</WriteBtn>
          </WriteBox>
        </WriteBoxWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-left: auto;
  margin-top: 55px;
`;

const WriteBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 45px;
`;

const WriteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 160px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  font: ${({ theme }) => theme.fonts.Regular16};
  color: ${({ theme }) => theme.colors.White};
`;

const WriteBtn = styled.div`
  display: flex;
  width: 165px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.Main};
  cursor: pointer;
  display: flex;
  height: 70px;
  padding: 0 37px;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(1.25);
    transition: all 0.3s;
  }
`;

export default Write;
