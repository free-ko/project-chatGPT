import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { Button } from "~/degins/button";
import { Input } from "~/degins/input";
import { GapUpDownBy } from "~/components";

import { useBMPlanCreatorService } from "./bmPlanCreatorService";
import type { BmPlanCreatorServiceForm } from "./bmPlanCreatorService.types";

import * as Styled from "./BmPlanCreator.styled";

const BmPlanCreator = () => {
  const [reqDavinciButtonText, setReqDavinciButtonText] = useState("요청하기");
  const [reqDavinciButtonIsLoading, setReqDavinciButtonIsLoading] =
    useState(false);

  const [reqTurboButtonText, setReqTurboButtonText] = useState("요청하기");
  const [reqTurboButtonIsLoading, setReqTurboButtonIsLoading] = useState(false);

  const { register, handleSubmit, setValue } =
    useForm<BmPlanCreatorServiceForm>();

  const {
    answerByTurbo,
    setAnswerByTurbo,
    answerByDavinci,
    setAnswerByDavinci,
    getBMPlanByDavinci,
    getBMPlanByTurbo,
  } = useBMPlanCreatorService();

  const handleOnSubmit = async (
    data: BmPlanCreatorServiceForm
  ): Promise<void> => {
    const { itemName, itemDescription, nation, requestModel } = data;
    const isEmptyInputValue = !!(itemName && itemDescription && nation);

    if (!isEmptyInputValue) {
      toast("항목을 모두 입력해주세요");
      return;
    }

    switch (requestModel) {
      case "turbo":
        setReqTurboButtonIsLoading(true);
        const answerDataByTurbo = await getBMPlanByTurbo(data);
        setAnswerByTurbo(answerDataByTurbo);
        setReqTurboButtonIsLoading(false);
        setReqTurboButtonText("재요청하기");

        break;
      case "davinci":
        setReqDavinciButtonIsLoading(true);
        const answerDataByDavinci = await getBMPlanByDavinci(data);
        setAnswerByDavinci(answerDataByDavinci);
        setReqDavinciButtonIsLoading(false);
        setReqDavinciButtonText("재요청하기");

        break;
    }
  };

  const handleCopyText = (target: "turbo" | "davinci") => {
    const hasToAnswerByTurbo = !!answerByTurbo;
    const hasToAnswerByDavinci = !!answerByDavinci;

    if (target === "turbo" && hasToAnswerByTurbo) {
      void navigator.clipboard.writeText(answerByTurbo);
      toast("글자가 복사되었습니다.");
    }

    if (target === "davinci" && hasToAnswerByDavinci) {
      void navigator.clipboard.writeText(answerByDavinci);
      toast("글자가 복사되었습니다.");
    }
  };

  return (
    <Styled.FormWrapper onSubmit={handleSubmit(handleOnSubmit)}>
      <Styled.Title>참 쉬운 사업 계획서</Styled.Title>
      <GapUpDownBy $height={30} />
      <Styled.FormTitle>사업 아이템</Styled.FormTitle>
      <Input
        id="itemName"
        type="text"
        placeholder="사업 아이템을 적어주세요."
        {...register("itemName")}
      />
      <GapUpDownBy $height={20} />
      <Styled.FormTitle>사업 설명</Styled.FormTitle>
      <Input
        id="itemDescription"
        type="text"
        placeholder="사업 아이템을 통해 제공하려는 제품 또는 서비스를 간략하게 설명해주세요."
        {...register("itemDescription")}
      />
      <GapUpDownBy $height={20} />
      <Styled.FormTitle>타겟 국가</Styled.FormTitle>
      <Input
        id="nation"
        type="text"
        placeholder="타겟 국가는 어디인가요?"
        {...register("nation")}
      />

      <GapUpDownBy $height={50} />

      <Styled.SubTitleWrapper>
        <Styled.SubTitle>AI 추천 사업 계획서 1</Styled.SubTitle>
        <Button
          type="submit"
          size="small"
          loading={reqTurboButtonIsLoading}
          text={reqTurboButtonText}
          variant="primary"
          onClick={() => {
            setValue("requestModel", "turbo");
          }}
        />
        <Button
          type="button"
          size="small"
          text="복사하기"
          variant="primary"
          onClick={() => {
            handleCopyText("turbo");
          }}
        />
      </Styled.SubTitleWrapper>

      <GapUpDownBy $height={10} />

      <Styled.AnswerTextArea
        value={answerByTurbo}
        onChange={(event) => setAnswerByTurbo(event.target.value)}
      />

      <GapUpDownBy $height={30} />

      <Styled.SubTitleWrapper>
        <Styled.SubTitle>AI 추천 사업 계획서 2</Styled.SubTitle>
        <Button
          type="submit"
          size="small"
          loading={reqDavinciButtonIsLoading}
          text={reqDavinciButtonText}
          variant="primary"
          onClick={() => {
            setValue("requestModel", "davinci");
          }}
        />
        <Button
          type="button"
          size="small"
          text="복사하기"
          variant="primary"
          onClick={() => {
            handleCopyText("davinci");
          }}
        />
      </Styled.SubTitleWrapper>

      <GapUpDownBy $height={10} />

      <Styled.AnswerTextArea
        value={answerByDavinci}
        onChange={(event) => setAnswerByDavinci(event.target.value)}
      />
    </Styled.FormWrapper>
  );
};

export default BmPlanCreator;
