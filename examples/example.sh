#!/bin/bash
# BlueEagle AI Gateway - cURL 调用示例
# 官方文档: https://ahg.codes

API_KEY="YOUR_API_KEY"  # 替换为您的API Key
BASE_URL="https://ahg.codes/v1"

# 示例1: 基础对话
echo "=== GPT-4o 基础对话 ==="
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello, BlueEagle!"}
    ]
  }' | jq -r '.choices[0].message.content'

# 示例2: 调用 Claude
echo -e "\n=== Claude 3.5 Sonnet ==="
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "messages": [
      {"role": "user", "content": "你好，Claude！"}
    ]
  }' | jq -r '.choices[0].message.content'

# 示例3: 调用 Gemini
echo -e "\n=== Gemini 1.5 Pro ==="
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gemini-1.5-pro",
    "messages": [
      {"role": "user", "content": "你好，Gemini！"}
    ]
  }' | jq -r '.choices[0].message.content'
