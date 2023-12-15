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
        click={selectMenu === "최근"}
        onClick={() => {
          setSelectMenu("최근");
        }}
      >
        최근
      </MenuBox>
      <MenuBox
        click={selectMenu === "주간업무보고"}
        onClick={() => {
          setSelectMenu("주간업무보고");
        }}
      >
        주간업무보고
      </MenuBox>
      <MenuBox
        click={selectMenu === "주간행사일정"}
        onClick={() => {
          setSelectMenu("주간행사일정");
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
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 2, 0.10);
`;

export default Menu;
