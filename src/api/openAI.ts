import { Configuration, OpenAIApi } from "openai";
import openAIKey from "./openAIKey";

const configuration = new Configuration({
  apiKey: openAIKey || "",
});

const getChatCompletion = async (content: string): Promise<string | undefined> => {
  const openAI = new OpenAIApi(configuration);
  try {
    const response = await openAI.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: content }],
    });
    return response.data.choices[0].message?.content;
  } catch (error) {
    alert(error);
    return undefined;
  }
};

export default getChatCompletion;
