import OpenAI from "openai";

const ollama = new OpenAI({
  baseURL: "http://localhost:11434/v1/",
  apiKey: "ollama",
});

const res = await ollama.chat.completions.create({
  model: "llama3.2",
  messages: [
    { role: "system", content: "You are a funny assistant." },
    { role: "user", content: "Tell me a fun fact." },
  ],
});

console.log(res.choices[0].message.content);