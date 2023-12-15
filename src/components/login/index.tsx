import { styled } from "styled-components";
import { LoginImg } from "../../assets/logo";
import { useNavigate } from "react-router";

const Login = () => {

  const navigate=useNavigate();

  return (
    <Container>
      <LoginForm>
        <Logo src={LoginImg} alt="" />
        <InputWrapper>
          <Text>아이디</Text>
          <Input placeholder="아이디를 입력해주세요" />
          <Text>비밀번호</Text>
          <Input placeholder="비밀번호를 입력해주세요" />
        </InputWrapper>
        <LoginBtn >로그인</LoginBtn>
      </LoginForm>
    </Container>
  );
};

const InputWrapper = styled.div``;

const Text = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;

const LoginForm = styled.div`
  justify-content: center;
  width: 30%;
  height: 550px;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 15px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  padding: 3% 5%;
`;

const Logo = styled.img`
  width: 233px;
  height: 77px;
  justify-content: center;
  margin-bottom: 50px;
`;

const Input = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 43px;
  outline: none;
  margin-bottom: 25px;
 font-size: 18px;
  padding-left: 10px;
  border-radius: 8px;
  border: 1px solid var(--Gray-300, #d2d2d2);
  background: ${({ theme }) => theme.colors.White};
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 41px;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  font: ${({ theme }) => theme.fonts.Semibold20};
  color: ${({ theme }) => theme.colors.White};
  background-color: #d2d2d2;
  &:hover {
    background-color: ${({ theme }) => theme.colors.Main}};
  
`;

export default Login;
