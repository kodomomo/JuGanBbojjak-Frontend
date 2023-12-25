import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import DefaultInput from "../../common/input";

interface ArrayItems {
  content: string;
  detail: string;
}

const WorkReportComponent: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [contentAdd, setContentAdd] = useState<ArrayItems[]>([
    { content: "", detail: "" },
  ]);

  const addContent = () => {
    setContentAdd([...contentAdd, { content: "", detail: "" }]);
  };

  const removeContent = (index: number) => {
    if (contentAdd.length > 1) {
      const newArray = [...contentAdd];
      newArray.splice(index, 1);
      setContentAdd(newArray);
    }
  };

  const contentChange = (
    index: number,
    field: "content" | "detail",
    value: string
  ) => {
    const newArray = [...contentAdd];
    newArray[index][field] = value;
    setContentAdd(newArray);
  };

  return (
    <Wrapper>
      <DefaultInput width={68} placeholder="제목을 입력해주세요" text="제목" />
      <Div>
        <ContentText>내용입력</ContentText>
        <ButtonWrapper>
          <Button onClick={addContent}>항목 추가</Button>
          <Button onClick={() => removeContent(contentAdd.length - 1)}>
            항목 삭제
          </Button>
        </ButtonWrapper>
      </Div>
      {contentAdd.map((item, index) => (
        <div key={index}>
          <ContentInput
            value={item.content}
            onChange={(e) => contentChange(index, "content", e.target.value)}
            placeholder="항목을 입력해주세요"
          />
          <DetailInput
            value={item.detail}
            onChange={(e) => contentChange(index, "detail", e.target.value)}
            placeholder="상세내용을 입력해주세요"
          />
          <ButtonWrapper>
            <Button onClick={() => setIsModalOpened(true)}>
              {}표 추가하기
            </Button>
          </ButtonWrapper>
        </div>
      ))}
    </Wrapper>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  width: 130px;
  height: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #d2d2d2;
  margin-left: auto;
  &:hover {
    background: #1a9fff;
  }
  border: none;
  outline: none;
`;

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
  resize: none;
`;
const Wrapper = styled.div`
  border-radius: 20px;
  border: 1px solid #1a9fff;
  background: ${({ theme }) => theme.color?.White};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  height: 791px;
  padding: 60px 80px;
  overflow-y: scroll;
  margin-top: 60px;
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
