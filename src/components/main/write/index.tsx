import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { getLatestList } from "../../../utils/apis/main";

const Write = () => {
  const { data } = getLatestList();
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <WriteBoxWrapper>
          <WriteBox>
            <WriteBtn
              onClick={() => {
                navigate("/workReport");
              }}
            >
              주간 업무 보고 작성하러 가기
            </WriteBtn>
            <span>
              {/* {data?.workReportStartDate} {data?.workReportEndDate} */}
              2023-12-19 ~ 2023-12-31
            </span>
          </WriteBox>
          <WriteBox>
            <WriteBtn
              onClick={() => {
                navigate("/writeSchedule");
              }}
            >
              주간 행사 일정 작성하러 가기
            </WriteBtn>
            <span>
              {/* {data?.eventScheduleStartDate} {data?.eventScheduleEndDate} */}
              2023-12-19 ~ 2023-12-31
            </span>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 160px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  font: ${({ theme }) => theme.fonts.Regular16};
  color: ${({ theme }) => theme.colors.White};
  span {
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.Black};
  }
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
