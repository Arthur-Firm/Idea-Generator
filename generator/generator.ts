import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

async function gerar(area: string, stacks: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `Gere uma ideia de projeto para um programador, essa ideia deve ser baseada as tendencias do mercado de hoje e ser o mais original possível, esse projeto deve ser na área da ${area} e deve utilizar as stacks: ${stacks}, gere no seguinte formato(sem usar *): Nome:(Nome_Projeto) Descrição:(resuma o projeto aqui, sendo simples e direto mostrando os objetivos)`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  return text;
}

export async function gerar_dividido(area: string, stacks: string): Promise<[string, string] | null> {
  const resposta = await gerar(area, stacks);

  const match = resposta.match(/Nome:\s*(.*?)\s*Descrição:\s*(.*)/s);

  if (match) {
    return [match[1].trim(), match[2].trim()];
  } else {
    console.log("Formato não reconhecido na resposta:");
    console.log(resposta);
    return null;
  }
}

