import styled from "styled-components";

interface props {
  placeholder: string;
  width: number;
  text: string;
}

const DefaultInput = (props: props) => {
  const { width, text, placeholder } = props;

  return (
    <Container>
      <Text>{text}</Text>
      <Input type="Text" width={width} placeholder={placeholder} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Text = styled.div`
  color: var(--Black, #000);
  font-size: 24px;
  font-weight: 600;
`;

const Input = styled.input<{ width: number }>`
  width: ${({ width }) => width}px;
  border-radius: 8px;
  border: 1px solid var(--Gray-300, #d2d2d2);
  background: #fff;
  margin-left: 30px;
  height: 60px;
  ::placeholder {
    color: #9d9d9d;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }
`;

export default DefaultInput;
