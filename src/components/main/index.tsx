import { useState } from "react";
import { styled } from "styled-components";
import Menu from "./menu";
import Newly from "./newly";
import WeeklyEvent from "./weeklyEvent";
import WeeklyWork from "./weeklyWork";
import Write from "./write";

const Main = () => {
  const [selectMenu, setSelectMenu] = useState("최근");
  return (
    <Container>
      <Wrapper>
        <Menu selectMenu={selectMenu} setSelectMenu={setSelectMenu} />
        {selectMenu === "최근" && <Newly />}
        {selectMenu === "주간업무보고" && <WeeklyWork />}
        {selectMenu === "주간행사일정" && <WeeklyEvent />}
      </Wrapper>
      <Write />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div``;

export default Main;
