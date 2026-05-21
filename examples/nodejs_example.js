/**
 * 蓝鹰AI网关 (BlueEagle AI Gateway) - Node.js 调用示例
 * 官方网站: https://ahg.codes
 * Base URL: https://ahg.codes/v1
 *
 * 安装依赖: npm install openai
 */

import OpenAI from "openai";

// ============ 配置 ============
const API_KEY = "YOUR_API_KEY"; // 替换为您的蓝鹰API Key
const BASE_URL = "https://ahg.codes/v1";

// ============ 初始化客户端 ============
const client = new OpenAI({
  apiKey: API_KEY,
  baseURL: BASE_URL,
});

// ============ 基础对话 ============
async function basicChat() {
  console.log("=".repeat(50));
  console.log("📝 基础对话示例 - GPT-4o");
  console.log("=".repeat(50));

  const response = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "你是一个专业的AI助手。" },
      { role: "user", content: "请用3句话介绍蓝鹰AI网关的核心优势。" },
    ],
    temperature: 0.7,
  });

  console.log(`模型: ${response.model}`);
  console.log(`回答: ${response.choices[0].message.content}`);
  console.log(`Token用量:`, response.usage);
  console.log();
}

// ============ Claude 调用 ============
async function claudeChat() {
  console.log("=".repeat(50));
  console.log("📝 Claude 4 Sonnet 对话示例");
  console.log("=".repeat(50));

  const response = await client.chat.completions.create({
    model: "claude-4-sonnet",
    messages: [
      {
        role: "user",
        content: "Explain the concept of AI gateway in simple terms.",
      },
    ],
    temperature: 0.5,
  });

  console.log(`模型: ${response.model}`);
  console.log(`回答: ${response.choices[0].message.content}`);
  console.log();
}

// ============ 流式输出 ============
async function streamingChat() {
  console.log("=".repeat(50));
  console.log("🌊 流式输出示例");
  console.log("=".repeat(50));

  const stream = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: "写一首关于蓝鹰的短诗" }],
    stream: true,
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || "";
    process.stdout.write(content);
  }
  console.log("\n");
}

// ============ Embedding ============
async function embeddingExample() {
  console.log("=".repeat(50));
  console.log("🔢 Embedding 向量示例");
  console.log("=".repeat(50));

  const response = await client.embeddings.create({
    model: "text-embedding-3-large",
    input: "蓝鹰AI网关提供全球顶尖大模型统一API接入服务",
  });

  console.log(`向量维度: ${response.data[0].embedding.length}`);
  console.log(`前5个分量: ${response.data[0].embedding.slice(0, 5)}`);
  console.log();
}

// ============ 多模型对比 ============
async function multiModelComparison() {
  console.log("=".repeat(50));
  console.log("🔄 多模型对比示例");
  console.log("=".repeat(50));

  const models = ["gpt-4o", "claude-4-sonnet", "gemini-2.5-pro"];
  const question = "What is 2+2?";

  for (const model of models) {
    const response = await client.chat.completions.create({
      model,
      messages: [{ role: "user", content: question }],
      max_tokens: 50,
    });
    console.log(`[${model}] ${response.choices[0].message.content.trim()}`);
  }
  console.log();
}

// ============ 主函数 ============
async function main() {
  console.log("🦅 蓝鹰AI网关 - Node.js 调用示例集");
  console.log(`🌐 官网: https://ahg.codes`);
  console.log(`📡 Base URL: ${BASE_URL}`);
  console.log();

  await basicChat();
  // await claudeChat();
  // await streamingChat();
  // await embeddingExample();
  // await multiModelComparison();
}

main().catch(console.error);
