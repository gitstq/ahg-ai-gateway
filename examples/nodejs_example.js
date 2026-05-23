/**
 * 蓝鹰AI网关 - Node.js 调用示例
 * BlueEagle AI Gateway - Node.js Example
 * 
 * 官网: https://ahg.codes
 * 
 * 安装依赖: npm install openai
 */

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY',  // 替换为您的API密钥
  baseURL: 'https://ahg.codes/v1',
});

// 示例1: 简单对话
// Example 1: Simple chat
async function simpleChat() {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: 'Hello, 介绍一下你自己' }],
  });
  console.log('GPT-4o 回复:', completion.choices[0].message.content);
}

// 示例2: 流式输出
// Example 2: Streaming
async function streamingChat() {
  const stream = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: '讲一个短故事' }],
    stream: true,
  });

  process.stdout.write('流式输出: ');
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
  console.log();
}

// 示例3: Claude 模型调用
// Example 3: Claude model
async function claudeChat() {
  const completion = await openai.chat.completions.create({
    model: 'claude-3-5-sonnet-20241022',
    messages: [{ role: 'user', content: '用JavaScript写一个快速排序' }],
  });
  console.log('Claude 回复:', completion.choices[0].message.content);
}

// 示例4: Gemini 模型调用
// Example 4: Gemini model
async function geminiChat() {
  const completion = await openai.chat.completions.create({
    model: 'gemini-1.5-pro',
    messages: [{ role: 'user', content: '解释量子计算的基本原理' }],
  });
  console.log('Gemini 回复:', completion.choices[0].message.content);
}

// 示例5: 获取模型列表
// Example 5: List models
async function listModels() {
  const models = await openai.models.list();
  console.log('支持的模型:');
  models.data.forEach(model => {
    console.log(`  - ${model.id}`);
  });
}

// 主函数
async function main() {
  console.log('='.repeat(50));
  console.log('蓝鹰AI网关 - Node.js 调用示例');
  console.log('BlueEagle AI Gateway - Node.js Examples');
  console.log('='.repeat(50));

  // 请取消注释要运行的示例
  // Uncomment the example you want to run

  // await simpleChat();
  // await streamingChat();
  // await claudeChat();
  // await geminiChat();
  // await listModels();

  console.log('\n请先在代码中设置您的 API Key，然后取消注释要运行的示例函数');
  console.log('Please set your API Key in the code and uncomment the example function to run');
}

main().catch(console.error);
