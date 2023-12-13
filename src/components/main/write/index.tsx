import { styled } from "styled-components";

const Write = () => {
  return (
    <>
      <Container>
        <WriteBoxWrapper>
          <WriteBox>
            <WriteBtn>
              <p>
                주간 업무 보고 <br />
                작성하러 가기
              </p>
            </WriteBtn>
          </WriteBox>
          <WriteBox>
            <WriteBtn>
              <p>
                주간 업무 보고 <br />
                작성하러 가기
              </p>
            </WriteBtn>
          </WriteBox>
        </WriteBoxWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100%;
  p {
    font: ${({ theme }) => theme.fonts.Regular16};
    color: ${({ theme }) => theme.colors.White};
  }
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
`;

const WriteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 70px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.Main};
  cursor: pointer;
`;

export default Write;
