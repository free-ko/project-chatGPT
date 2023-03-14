import styled from "@emotion/styled";

import { Color } from "~/degins/color";
import { FontSize, FontWeight } from "~/degins/font";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;
`;

export const Title = styled.h1`
  ${FontSize.h1};
`;

export const SubTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
`;

export const SubTitle = styled.h3`
  align-items: start;

  ${FontSize.h3};
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormTitle = styled.h1`
  width: 100%;

  ${FontSize.p1};
  ${FontWeight.medium};
  color: ${Color.naturalGray8};
`;

const TextArea = styled.textarea`
  width: 100%;

  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid ${Color.naturalGray2};

  ${FontSize.p2};
`;

export const QuestionTextArea = styled(TextArea)`
  height: 120px;
`;

export const AnswerTextArea = styled(TextArea)`
  height: 300px;
`;
