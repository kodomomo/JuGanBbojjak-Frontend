import { styled } from "styled-components";
import { EventDetailListProps } from "../../models/List";

const EventScheduleList = ({
  title,
  date,
  place,
  personnel,
}: EventDetailListProps) => {
  return (
    <>
      <EventListBox>
        <Title>{title}</Title>
        <Content>
          <Middle>일시</Middle>
          <p>{date}</p>
        </Content>
        <Content>
          <Middle>장소</Middle>
          <p>{place}</p>
        </Content>
        <Content>
          <Middle>인원</Middle>
          <p>{personnel}</p>
        </Content>
      </EventListBox>
    </>
  );
};

const EventListBox = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 80px;
  p {
    font: ${({ theme }) => theme.fonts.Regular20};
  }
`;

const Content = styled.div`
  display: flex;
  padding: 0 80px 30px;
  p {
    color: ${({ theme }) => theme.colors.Black800};
  }
`;

const Title = styled.div`
  padding: 60px 80px;
  font: ${({ theme }) => theme.fonts.Semibold28};
`;

const Middle = styled.div`
  margin-right: 80px;
  font: ${({ theme }) => theme.fonts.Medium24};
  color: ${({ theme }) => theme.colors.Black800};
`;

export default EventScheduleList;
