import { styled } from "styled-components";
import { LoginCloud, LoginImg } from "../../assets/logo";

const Login = () => {
  return (
    <Container>
      <LoginForm>
        <Content>
          <Logo src={LoginImg} alt="" />
          <InputSection>
            <p>아이디</p>
            <Input placeholder="아이디를 입력해주세요."/>
            <p>비밀번호</p>
            <Input placeholder="비밀번호를 입력해주세요." type="password" />
            <Button>로그인</Button>
          </InputSection>
        </Content>
      </LoginForm>
      <BackgroundImg src={LoginCloud} alt="" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  padding: 190px 440px;
  min-width: 1400px;
`;

const LoginForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 15px 0 0 15px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
`;

const Content = styled.div`
  padding: 100px 0 100px;
`;

const Logo = styled.img`
  padding: 0 192.5px;
`;

const InputSection = styled.div`
  padding: 40px 160px 0;
  p {
    color: ${({ theme }) => theme.colors.Black700};
    font: ${({ theme }) => theme.fonts.Semibold12};
    margin-bottom: 5px;
    margin-left: 3px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  margin-bottom: 25px;
  padding-left: 10px;
  border-radius: 8px;
  border: 1px solid var(--Gray-300, #d2d2d2);
  background: ${({ theme }) => theme.colors.White};
  font: ${({ theme }) => theme.fonts.Light12};
`;

const Button = styled.button`
  width: 100%;
  height: 41px;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  font: ${({ theme }) => theme.fonts.Semibold12};
  color: ${({ theme }) => theme.colors.White};
  background: ${({ theme }) => theme.colors.Main};
  &:hover {
    background-color: ${({ theme }) => theme.colors.Main800};
  }
`;

const BackgroundImg = styled.img`
  height: 100%;
  border-radius: 0 15px 15px 0;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
`;

export default Login;
