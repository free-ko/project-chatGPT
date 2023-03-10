import {
  CreateCompletionRequest,
  CreateChatCompletionRequest,
} from "openai/api";

import type { BmPlanCreatorServiceForm } from "./bmPlanCreatorService.types";

const { Configuration, OpenAIApi } = require("openai");

const OPEN_API_KEY = "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";

const configuration = new Configuration({
  apiKey: OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

const createPrompt = (data: BmPlanCreatorServiceForm) => {
  const { itemName, itemDescription, nation } = data;

  return `
      Business Items Name: ${itemName}\n
      Business Items Description: ${itemDescription}\n
      Target Country: ${nation}\n
      
      The above information is about business items. 
      Based on this information, please fill out the business plan according to the form below.
      (I hope that additional specific indicators will be included and Please write the ${nation} as a target.)
       
      1. Vision and Purpose\n
      2. Customer Analysis\n
      3. Market Size or Trend Analysis\n
      4. Prospects\n
      5. Operational Plan\n
      6. Financial Plan\n
      7. Risk Management Plan\n
      8. Summarize.
      \n
      and Please tell me the answer in Korean.
      (There is no need to show business item information with fewer users again.)
    `;
};

export const getBMPlanByDavinci = async (
  data: BmPlanCreatorServiceForm
): Promise<string> => {
  const completionParams: CreateCompletionRequest = {
    model: "text-davinci-003",
    max_tokens: 3500,
    prompt: createPrompt(data),
  };

  try {
    const response = await openai.createCompletion(completionParams);

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("에러가 발생 했습니다. = ", error);
    return "에러가 발생했습니다.";
  }
};

export const getBMPlanByTurbo = async (
  data: BmPlanCreatorServiceForm
): Promise<string> => {
  const completionParams: CreateChatCompletionRequest = {
    model: "gpt-3.5-turbo",
    max_tokens: 3000,
    messages: [
      {
        role: "system",
        content: `
        You are an expert in writing business plans well around the world.
        You're an expert at writing up a business plan very carefully.
        You writing up a business plan using figures and indicators well.
        `,
      },
      {
        role: "user",
        content: createPrompt(data),
      },
      { role: "assistant", content: "Q: " },
    ],
  };

  try {
    const response = await openai.createChatCompletion(completionParams);

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("에러가 발생 했습니다. = ", error);
    return "에러가 발생했습니다.";
  }
};
