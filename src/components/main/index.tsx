import { useState } from "react";
import { styled } from "styled-components";
import Menu from "./menu";
import WeeklyEvent from "./weeklyEvent";
import WeeklyWork from "./weeklyWork";
import Write from "./write";

const Main = () => {
  const [selectMenu, setSelectMenu] = useState("WORK_REPORT");
  return (
    <Container>
      <Wrapper>
        <Menu selectMenu={selectMenu} setSelectMenu={setSelectMenu} />
        {selectMenu === "WORK_REPORT" && <WeeklyWork />}
        {selectMenu === "EVENT_SCHEDULE" && <WeeklyEvent />}
      </Wrapper>
      <Write />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0 7%;
`;

const Wrapper = styled.div``;

export default Main;
