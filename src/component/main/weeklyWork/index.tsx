import { styled } from "styled-components";
import { ListContent, ListText } from "../../../constants/main";

const WeeklyWork = () => {
  return (
    <Container>
      <ListType>
        {ListText.map((item, index) => {
          return <Cell key={index}>{item.value}</Cell>;
        })}
      </ListType>
      <hr />
      <Content>
        {ListContent.map((item, index) => {
          return (
            <CellWrapper>
              <Cell key={index}>{item.value}</Cell>
              <Cell key={index}>{item.name}</Cell>
              <Cell key={index}>{item.key}</Cell>
            </CellWrapper>
          );
        })}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 900px;
  height: 505px;
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
  margin-top: 20px;
`;

const Cell = styled.span`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default WeeklyWork;
