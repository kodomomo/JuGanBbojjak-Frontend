import { styled } from "styled-components";
import { Dispatch, SetStateAction } from "react";

interface PropsType {
  selectMenu: string;
  setSelectMenu: Dispatch<SetStateAction<string>>;
}

const Menu = ({ selectMenu, setSelectMenu }: PropsType) => {
  return (
    <Container>
      <MenuBox
        click={selectMenu === "WORK_REPORT"}
        onClick={() => {
          setSelectMenu("WORK_REPORT");
        }}
      >
        주간업무보고
      </MenuBox>
      <MenuBox
        click={selectMenu === "EVENT_SCHEDULE"}
        onClick={() => {
          setSelectMenu("EVENT_SCHEDULE");
        }}
      >
        주간행사일정
      </MenuBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: start;
  font: ${({ theme }) => theme.fonts.Regular16};
  color: black;
`;

const MenuBox = styled.div<{ click?: boolean }>`
  width: 130px;
  height: 50px;
  border-radius: 8px 8px 0 0;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme, click }) => click && theme.colors.White};
  background-color: ${({ theme, click }) => click && theme.colors.Main};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 2, 0.1);
`;

export default Menu;
