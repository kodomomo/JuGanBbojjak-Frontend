import { styled } from "styled-components";
import {
  ContentTable,
  ContentTableTop,
  ListContent,
  ListTitle,
} from "../../constants/weekWorkDetail";

const List = () => {
  return (
    <>
      <BoxWrapper>
        <p>유성구청 프로젝트 시연</p>
        <Content>
          <ul>
            {ListTitle.map((item, index) => {
              return (
                <li key={index}>
                  {item} <span>{ListContent[index]}</span>
                </li>
              );
            })}
          </ul>
          {/* <Table>
            <thead>
              <tr>
                {ContentTableTop.map((item, index) => {
                  return <th key={index}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {ContentTable.map((item, index) => {
                return (
                  <tr>
                    <td key={index}>{item}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table> */}
        </Content>
      </BoxWrapper>
    </>
  );
};

const BoxWrapper = styled.div`
  width: 1000px;
  height: 500px;
  border-radius: 20px;
  background-color: white;
  ul {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  li {
    font: ${({ theme }) => theme.fonts.Medium16};
  }
  span {
    font: ${({ theme }) => theme.fonts.Regular12};
    margin-left: 40px;
  }
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  padding: 40px 65px;
  p {
    font: ${({ theme }) => theme.fonts.Semibold20};
    margin-bottom: 50px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25px;
`;

const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 8px;
  margin: 10px;
  tr {
  }
  td {
    height: 40px;
    /* border-right: 1px solid ${({ theme }) => theme.colors.ThColor};
    border-left: 1px solid ${({ theme }) => theme.colors.ThColor}; */
    border: 1px solid ${({ theme }) => theme.colors.ThColor};
    text-align: center;
  }
  th {
    background-color: ${({ theme }) => theme.colors.Gray100};
    border: 1px solid ${({ theme }) => theme.colors.ThColor};
  }
`;
export default List;
