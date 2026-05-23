#!/bin/bash
# 蓝鹰AI网关 - cURL 调用示例
# BlueEagle AI Gateway - cURL Examples
#
# 官网: https://ahg.codes

API_KEY="YOUR_API_KEY"  # 替换为您的API密钥
BASE_URL="https://ahg.codes/v1"

echo "=========================================="
echo "蓝鹰AI网关 - cURL 调用示例"
echo "BlueEagle AI Gateway - cURL Examples"
echo "=========================================="

# 示例1: GPT-4o 简单对话
# Example 1: GPT-4o simple chat
echo -e "\n>>> 示例1: GPT-4o 简单对话"
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello!"}]
  }' | jq -r '.choices[0].message.content'

# 示例2: GPT-4o-mini 流式输出
# Example 2: GPT-4o-mini streaming
echo -e "\n>>> 示例2: GPT-4o-mini 流式输出"
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [{"role": "user", "content": "讲一个短故事"}],
    "stream": true
  }'

# 示例3: Claude-3.5-Sonnet
# Example 3: Claude-3.5-Sonnet
echo -e "\n>>> 示例3: Claude-3.5-Sonnet"
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "messages": [{"role": "user", "content": "用Python写一个快速排序"}]
  }' | jq -r '.choices[0].message.content'

# 示例4: Gemini-1.5-Pro
# Example 4: Gemini-1.5-Pro
echo -e "\n>>> 示例4: Gemini-1.5-Pro"
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gemini-1.5-pro",
    "messages": [{"role": "user", "content": "解释量子计算的基本原理"}]
  }' | jq -r '.choices[0].message.content'

# 示例5: 获取模型列表
# Example 5: List models
echo -e "\n>>> 示例5: 获取支持的模型列表"
curl -s "$BASE_URL/models" \
  -H "Authorization: Bearer $API_KEY" | jq '.data[].id'

echo -e "\n=========================================="
echo "示例执行完成"
echo "=========================================="
