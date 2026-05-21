#!/bin/bash
# ============================================
# 蓝鹰AI网关 (BlueEagle AI Gateway) - cURL 调用示例
# 官方网站: https://ahg.codes
# Base URL: https://ahg.codes/v1
# ============================================

# ============ 配置 ============
API_KEY="YOUR_API_KEY"  # 替换为您的蓝鹰API Key
BASE_URL="https://ahg.codes/v1"

echo "🦅 蓝鹰AI网关 - cURL 调用示例集"
echo "🌐 官网: https://ahg.codes"
echo "📡 Base URL: ${BASE_URL}"
echo ""

# ============ 1. 基础对话 - GPT-4o ============
echo "=========================================="
echo "📝 基础对话示例 - GPT-4o"
echo "=========================================="

curl -s "${BASE_URL}/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "你是一个专业的AI助手。"},
      {"role": "user", "content": "请用3句话介绍蓝鹰AI网关的核心优势。"}
    ],
    "temperature": 0.7
  }' | python3 -m json.tool 2>/dev/null || echo "请安装python3以格式化JSON输出"

echo ""
echo ""

# ============ 2. Claude 4 Sonnet 对话 ============
echo "=========================================="
echo "📝 Claude 4 Sonnet 对话示例"
echo "=========================================="

curl -s "${BASE_URL}/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "claude-4-sonnet",
    "messages": [
      {"role": "user", "content": "Explain the concept of AI gateway in simple terms."}
    ],
    "temperature": 0.5
  }' | python3 -m json.tool 2>/dev/null || echo "请安装python3以格式化JSON输出"

echo ""
echo ""

# ============ 3. Gemini 2.5 Pro 对话 ============
echo "=========================================="
echo "📝 Gemini 2.5 Pro 对话示例"
echo "=========================================="

curl -s "${BASE_URL}/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "gemini-2.5-pro",
    "messages": [
      {"role": "user", "content": "What are the latest advances in large language models?"}
    ],
    "temperature": 0.7
  }' | python3 -m json.tool 2>/dev/null || echo "请安装python3以格式化JSON输出"

echo ""
echo ""

# ============ 4. 流式输出 ============
echo "=========================================="
echo "🌊 流式输出示例"
echo "=========================================="

curl -s "${BASE_URL}/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "user", "content": "写一首关于蓝鹰的短诗"}
    ],
    "stream": true
  }'

echo ""
echo ""

# ============ 5. Embedding 向量 ============
echo "=========================================="
echo "🔢 Embedding 向量示例"
echo "=========================================="

curl -s "${BASE_URL}/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "text-embedding-3-large",
    "input": "蓝鹰AI网关提供全球顶尖大模型统一API接入服务"
  }' | python3 -m json.tool 2>/dev/null || echo "请安装python3以格式化JSON输出"

echo ""
echo "✅ 所有示例执行完毕！"
