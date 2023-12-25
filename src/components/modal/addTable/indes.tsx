import styled from "styled-components";

const AddTable = () => {
  return (
    <>
      <Container></Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default AddTable;
