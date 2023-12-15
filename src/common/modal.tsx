import styled from "styled-components";
import { ReactElement } from "react";

interface props {
  open: boolean;
  close: (v: boolean) => void;
  children: React.ReactNode;
  height: number;
}

const DefaultModal = (props: props): ReactElement => {
  const { children, height } = props;
  

  return (
    <ModalContainer>
      <ModalBox height={height}>{children}</ModalBox>
    </ModalContainer>
  );
};

const ModalContainer=styled.div`
`

const ModalBox=styled.div<{ height: number }>`
height: ${({ height }) => height}px;`


export default DefaultModal