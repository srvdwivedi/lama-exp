import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "http://localhost:11434/v1/",
  apiKey: "ollama",
});

const messages = [
  { role: "user", content: "Explain what an LLM is in one sentence." },
];

const response = await openai.chat.completions.create({
  model: "llama3.2",
  messages,
});

console.log(response.choices[0].message.content);