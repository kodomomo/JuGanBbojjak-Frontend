import styled from "styled-components";
import DefaultInput from "../../common/input";

const WorkReportComponent = () => {
  return (
    <Wrapper>
      <DefaultInput width={71.5} placeholder="제목을 입력해주세요" text="제목" />
      <Div>
        <ContentText>내용입력</ContentText>
        <AddTableButton>항목 추가</AddTableButton>
      </Div>
      <ContentInput placeholder="항목을 입력해주세요" />
      <DetailInput placeholder="상세내용을 입력해주세요" />
    </Wrapper>
  );
};

const Div=styled.div`
display: flex;
`
const AddTableButton=styled.button`
color: #FFF;
font-size: 16px;
font-weight: 500;
width: 130px;
height: 40px;
text-align: center;
justify-content: center;
align-items: center;
border-radius: 8px;
background:  #d2d2d2;
margin-left: auto;
&:hover {
    background: #1a9fff;
  }
  border: none;
outline: none;
`

const DetailInput = styled.textarea`
  width: 100%;
  height: 120px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #d2d2d2;
  background: #fff;
  margin-top: 15px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  padding: 1% 1%;
  outline: none;
`;
const Wrapper = styled.div`
  border-radius: 20px;
  border: 1px solid #1a9fff;
  background: ${({ theme }) => theme.color?.White};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  height: 791px;
  padding: 60px 80px;
`;

const ContentInput = styled.input`
  border-radius: 8px;
  border: 1px solid #d2d2d2;
  background: #fff;
  width: 100%;
  height: 60px;
  margin-top: 25px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  padding: 1% 1%;
  outline: none;
`;

const ContentText = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 600;
`;

export default WorkReportComponent;
