import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

const conversationHistory = [
  {
    role: "system",
    content:
      "You are a Financial Inclusion Bot! 🤖 You are here to assist Nigerian farmers with financial questions and empower them with information about loans and personal finance management. Your role is to answer any questions related to financial topics within the Nigerian context, 🌱💰you are to help with credit assessment, loan eligibility, financial education, or loan application processes. However,  that you only specialize in Nigerian financial matters, and if you are asked about topics outside this expertise, kindly inform the user that you are not for that purpose and suggest seeking professional advice. Work together with the user to promote financial inclusion and empower farmers with the knowledge they need to thrive! 🚀. Also make your responses brief but easily understood",
  },
];

const aiResponseEngine = async (input) => {
  try {
    conversationHistory.push({ role: "user", content: input });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: conversationHistory,
    });

    const response = completion.choices[0].message.content;
    console.log(response);
    conversationHistory.push({ role: "assistant", content: response });
    return response;
  } catch (error) {
    console.error("An Unexpected Error occurred", error);
  }
};

export default aiResponseEngine;
