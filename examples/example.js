/**
 * BlueEagle AI Gateway - Node.js 调用示例
 * 官方文档: https://ahg.codes
 */

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_API_KEY', // 替换为您的API Key
  baseUrl: 'https://ahg.codes/v1'
});

// 示例1: 基础对话
async function chatCompletion() {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Hello, BlueEagle!' }
    ]
  });
  console.log(response.choices[0].message.content);
}

// 示例2: 流式输出
async function chatStream() {
  const stream = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: '讲一个短故事' }],
    stream: true
  });
  for await (const chunk of stream) {
    if (chunk.choices[0]?.delta?.content) {
      process.stdout.write(chunk.choices[0].delta.content);
    }
  }
}

// 示例3: 调用 Claude 模型
async function chatClaude() {
  const response = await client.chat.completions.create({
    model: 'claude-3-5-sonnet-20241022',
    messages: [{ role: 'user', content: '你好，Claude！' }]
  });
  console.log(response.choices[0].message.content);
}

// 示例4: 调用 Gemini 模型
async function chatGemini() {
  const response = await client.chat.completions.create({
    model: 'gemini-1.5-pro',
    messages: [{ role: 'user', content: '你好，Gemini！' }]
  });
  console.log(response.choices[0].message.content);
}

chatCompletion().catch(console.error);
