<div align="center">

[![Stars](https://img.shields.io/github/stars/blueeagle-ai/BlueEagle-AI-Gateway?style=social)](https://github.com/blueeagle-ai/BlueEagle-AI-Gateway)
[![Price](https://img.shields.io/badge/price-0.09x-blue?style=flat-square&logo=money)](https://ahg.codes)
[![Recharge](https://img.shields.io/badge/recharge-1:1-green?style=flat-square&logo=cashapp)](https://ahg.codes)
[![Native](https://img.shields.io/badge/native-official%20pool-orange?style=flat-square&logo=shield)](https://ahg.codes)
[![OpenAI Compatible](https://img.shields.io/badge/OpenAI-Compatible-412991?style=flat-square&logo=openai)](https://ahg.codes)

# 🦅 蓝鹰AI网关 | BlueEagle AI Gateway

### **全球顶尖大模型统一API网关 · 一站式接入所有主流AI模型**

**One API to Rule Them All — 一个API，统御所有大模型**

[🌐 官方网站](https://ahg.codes) · [💰 立即充值](https://ahg.codes) · [🚀 免费测试](https://ahg.codes)

</div>

---

## 📖 简介 | Introduction

**蓝鹰AI网关（BlueEagle AI Gateway）** 是全球领先的AI大模型统一API接入平台。我们提供**100%原生官方号池**，支持一键接入 OpenAI、Claude、Gemini 等全球顶尖大模型，**完全兼容OpenAI接口规范**，零代码迁移成本。

> 💡 **核心优势**：充值比例 **1:1**（充1元=1美元额度），消耗倍率仅 **0.09x**（官方定价的9%），额度永久有效、不清零。

**BlueEagle AI Gateway** is a world-leading unified API platform for AI large models. We provide **100% native official account pools**, supporting one-click access to top global models like OpenAI, Claude, and Gemini — **fully compatible with OpenAI API specifications** with zero migration cost.

> 💡 **Key Advantage**: Recharge ratio **1:1** (1 CNY = 1 USD credit), consumption rate only **0.09x** (9% of official pricing), credits never expire.

---

## ✨ 核心优势 | Key Features

| 特性 | 说明 | Feature | Description |
|------|------|---------|-------------|
| 🔥 **极致性价比** | 消耗仅官方9%，1元=1美元额度 | **Ultimate Cost Efficiency** | Only 9% of official pricing, 1 CNY = 1 USD credit |
| 🛡️ **原生官方号池** | 100%官方账号，无掺假、无共享、无二次中转 | **Native Official Pool** | 100% official accounts, no mixing, no sharing, no secondary relay |
| ⚡ **智能负载均衡** | 多账号毫秒级自动故障切换 | **Smart Load Balancing** | Multi-account auto failover in milliseconds |
| 🔄 **OpenAI兼容** | 完全兼容OpenAI接口，零代码迁移 | **OpenAI Compatible** | Fully compatible with OpenAI API, zero code migration |
| 🎁 **免费测试** | 注册即送测试额度 | **Free Trial** | Free testing credits upon registration |
| ♾️ **永久有效** | 额度不清零，用多少付多少 | **Never Expires** | Credits never expire, pay-as-you-go |

### 💰 价格对比示例 | Pricing Example

调用 **GPT-4o** 模型，官方价格 $5/1M tokens：

| 平台 | 实际成本（1M tokens）| 节省比例 |
|------|---------------------|---------|
| OpenAI 官方 | $5.00 | — |
| 蓝鹰AI网关 | **$0.45** | **91%** |

> 充值100元 = 获得100美元额度，实际可用价值 = 100 / 0.09 ≈ **1111美元等值调用量**

---

## 📋 支持模型 | Supported Models

| 厂商 | 模型系列 | 状态 | Provider | Model Series | Status |
|------|---------|------|----------|-------------|--------|
| OpenAI | GPT-4o, GPT-4o-mini, GPT-4-Turbo, GPT-3.5-Turbo | ✅ 已支持 | OpenAI | GPT-4o, GPT-4o-mini, GPT-4-Turbo, GPT-3.5-Turbo | ✅ Supported |
| Anthropic | Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku | ✅ 已支持 | Anthropic | Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku | ✅ Supported |
| Google | Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini Ultra | ✅ 已支持 | Google | Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini Ultra | ✅ Supported |
| Antigravity | 全系列 | ✅ 已支持 | Antigravity | Full Series | ✅ Supported |
| DeepSeek | DeepSeek-V3, DeepSeek-R1 | 🚧 即将支持 | DeepSeek | DeepSeek-V3, DeepSeek-R1 | 🚧 Coming Soon |
| 通义千问 | Qwen-Max, Qwen-Plus, Qwen-Turbo | 🚧 即将支持 | Qwen | Qwen-Max, Qwen-Plus, Qwen-Turbo | 🚧 Coming Soon |
| Meta | Llama 3, Llama 3.1 | 🚧 即将支持 | Meta | Llama 3, Llama 3.1 | 🚧 Coming Soon |

---

## 🚀 快速开始 | Quick Start

### 1. 获取API Key

访问 [ahg.codes](https://ahg.codes) 注册账号，在控制台获取您的 API Key。

Visit [ahg.codes](https://ahg.codes) to register and get your API Key from the dashboard.

### 2. 修改 base_url

将您的请求地址改为：`https://ahg.codes/v1`

Change your request base URL to: `https://ahg.codes/v1`

### 3. 开始调用

#### cURL 示例 | cURL Example

```bash
curl https://ahg.codes/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello, BlueEagle!"}
    ]
  }'
```

#### Python 示例 | Python Example

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://ahg.codes/v1"
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello, BlueEagle!"}
    ]
)

print(response.choices[0].message.content)
```

#### Node.js 示例 | Node.js Example

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://ahg.codes/v1'
});

async function main() {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Hello, BlueEagle!' }
    ]
  });
  console.log(response.choices[0].message.content);
}

main();
```

---

## 💰 充值与计费 | Recharge & Billing

### 计费规则

- **充值比例**：1元人民币 = 1美元官方额度
- **消耗倍率**：0.09x（仅为官方定价的9%）
- **计费方式**：按量计费，用多少扣多少
- **额度有效期**：**永久有效，不清零**

### 充值示例

| 充值金额 | 获得额度 | 实际等值调用量 | Recharge Amount | Credits Received | Equivalent Value |
|---------|---------|--------------|-----------------|------------------|------------------|
| ¥10 | $10 | ~$111 | ¥10 | $10 | ~$111 |
| ¥50 | $50 | ~$556 | ¥50 | $50 | ~$556 |
| ¥100 | $100 | ~$1,111 | ¥100 | $100 | ~$1,111 |
| ¥500 | $500 | ~$5,556 | ¥500 | $500 | ~$5,556 |

> 计算公式：实际等值调用量 = 额度 / 0.09

---

## ⚔️ 竞品对比 | Competitor Comparison

| 特性 | 蓝鹰AI网关 | 其他中转站A | 其他中转站B | OpenAI官方 |
|------|-----------|-----------|-----------|-----------|
| 消耗倍率 | **0.09x** | 0.15x | 0.2x | 1.0x |
| 充值比例 | **1:1** | 1:0.8 | 1:0.7 | — |
| 原生号池 | ✅ 100% | ❌ 共享池 | ❌ 混合池 | ✅ |
| 额度有效期 | **永久** | 1年 | 6个月 | — |
| 免费测试 | ✅ | ❌ | ❌ | ✅ |
| 负载均衡 | ✅ 智能 | ❌ | ❌ | — |
| 故障切换 | ✅ 毫秒级 | ❌ | ❌ | — |
| Claude支持 | ✅ | ✅ | ❌ | ❌ |
| Gemini支持 | ✅ | ❌ | ✅ | ❌ |

---

## 📞 联系与支持 | Contact & Support

- 🌐 **官方网站**: [https://ahg.codes](https://ahg.codes)
- 💬 **在线客服**: 请访问官网右下角客服窗口
- 📧 **商务合作**: 请通过官网联系表单提交
- 🐦 **更新动态**: 关注本仓库获取最新功能更新

---

## ⚠️ 免责声明 | Disclaimer

1. 蓝鹰AI网关仅作为AI模型的API接入服务平台，不对模型生成内容负责。
2. 用户应遵守各AI厂商的使用条款和相关法律法规。
3. 价格信息可能随市场调整，请以官网实时信息为准。
4. 本服务仅供合法用途，禁止用于任何违法违规场景。

---

<div align="center">

**Made with ❤️ by BlueEagle Team**

[🌐 ahg.codes](https://ahg.codes) · [⭐ Star this repo](https://github.com/blueeagle-ai/BlueEagle-AI-Gateway)

</div>
