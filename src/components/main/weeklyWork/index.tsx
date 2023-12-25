import { styled } from "styled-components";
import { ListText } from "../../../constants/main";
import { getWeeklyList } from "../../../utils/apis/main";
import { useNavigate } from "react-router";

const WeeklyWork = () => {
  const { data } = getWeeklyList("WORK_REPORT");
  const navigate = useNavigate();
  const typeGenerator: Record<string, string> = {
    WORK_REPORT: "주간 업무 보고",
  };
  return (
    <Container>
      <ListType>
        {ListText.map((item, index) => {
          return <Cell key={index}>{item.value}</Cell>;
        })}
      </ListType>
      <hr />
      <Content>
        {data?.weeklyList?.map((item, index) => {
          return (
            <CellWrapper
              onClick={() => {
                navigate(`/WeeklyWorkDetail/${index}`);
              }}
            >
              <Cell>
                {item.startDate} ~ {item.endDate}
              </Cell>
              <Cell>{typeGenerator[item.type]}</Cell>
              <Cell>진행중</Cell>
            </CellWrapper>
          );
        })}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 65vw;
  height: 75vh;
  background-color: ${({ theme }) => theme.colors.White};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0 10px 10px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

const ListType = styled.div`
  display: flex;
  justify-content: space-around;
  font: ${({ theme }) => theme.fonts.Medium20};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font: ${({ theme }) => theme.fonts.Medium16};
`;

const CellWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  cursor: pointer;
`;

const Cell = styled.span`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default WeeklyWork;
