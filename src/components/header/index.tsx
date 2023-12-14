import styled from "styled-components";
import { LogoImg } from "../../assets/logo";

const Header = () => {
  return (
    <Container>
      <img src={LogoImg} alt="logo" />
      <ClassName>운영지원과</ClassName>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 7%;
  img {
    cursor: pointer;
  }
  margin-bottom: 60px;
`;

const ClassName = styled.div`
  color: ${({ theme }) => theme.colors.Black700};
  font: ${({ theme }) => theme.fonts.Regular20};
`;

export default Header;
