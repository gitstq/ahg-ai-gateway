<div align="center">

# 🦅 蓝鹰AI网关 | BlueEagle AI Gateway

**一个API，接入全球顶尖AI模型 — 官方品质，十分之一价格**
**One API, All Leading AI Models — Official Quality, 1/10th the Price**

[![0.09x Ultra Low Rate](https://img.shields.io/badge/消耗倍率-0.09x-brightgreen)](https://ahg.codes)
[![1:1 Recharge](https://img.shields.io/badge/充值比例-1%3A1-blue)](https://ahg.codes)
[![100% Official Pool](https://img.shields.io/badge/号池-100%25原生官方-orange)](https://ahg.codes)
[![OpenAI Compatible](https://img.shields.io/badge/接口-OpenAI兼容-purple)](https://ahg.codes)
[![Free Trial](https://img.shields.io/badge/免费测试-注册即送-success)](https://ahg.codes)
[![Multi Model](https://img.shields.io/badge/支持模型-GPT%20%7C%20Claude%20%7C%20Gemini-informational)](https://ahg.codes)

**🌐 官方网站：[https://ahg.codes](https://ahg.codes)**

[立即注册](https://ahg.codes) · [查看文档](https://ahg.codes) · [充值入口](https://ahg.codes)

</div>

---

## 📖 项目简介 | About

**蓝鹰AI网关（BlueEagle AI Gateway）** 是一个面向全球开发者的高质量AI大模型统一API网关服务。我们提供 **100%原生官方号池**，无掺假、无共享、无二次中转，确保您获得与官方完全一致的模型响应质量。

**BlueEagle AI Gateway** is a premium unified API gateway for global AI developers. We provide a **100% native official account pool** — no mixing, no sharing, no secondary proxying — ensuring you get the exact same model response quality as the official API.

### 🔥 为什么选择蓝鹰？| Why BlueEagle?

| 特性 | Feature | 蓝鹰AI网关 | 其他中转站 |
|------|---------|-----------|-----------|
| 消耗倍率 | Cost Multiplier | **0.09x（仅9%）** | 0.3x ~ 1.0x |
| 充值比例 | Recharge Rate | **1:1（1元=1美元）** | 1:5 ~ 1:10 |
| 号池质量 | Pool Quality | **100%原生官方** | 混合/共享/降质 |
| 故障切换 | Failover | **毫秒级自动切换** | 手动/无 |
| 负载均衡 | Load Balancing | **多账号智能均衡** | 单账号/无 |
| 接口兼容 | Compatibility | **OpenAI原生兼容** | 部分兼容 |
| 额度有效期 | Credit Validity | **永久有效，不清零** | 30天~1年 |

---

## ✨ 核心优势 | Core Advantages

### 💰 极致性价比 — 0.09x 倍率

仅需官方定价的 **9%**，即可调用全球顶尖AI模型。按量计费，用多少付多少。

> **示例**：官方GPT-4o每百万Token约$5，蓝鹰仅需 **$0.45**。

### 💳 1:1 充值比例

充 **1元人民币 = 1美元官方额度**，无任何汇率加价、无隐藏费用。

> **示例**：充值100元 = 获得100美元额度 = 可调用约2亿次GPT-4o Token。

### 🛡️ 100% 原生官方号池

- ❌ 无掺假模型、无降质响应
- ❌ 无共享账号、无并发冲突
- ❌ 无二次中转、无额外延迟
- ✅ 与官方API完全一致的响应质量

### ⚡ 企业级稳定性

- 多账号智能负载均衡，高并发无忧
- 毫秒级自动故障切换，可用性 > 99.9%
- 全球CDN加速，低延迟响应

### 🔌 零代码迁移

完全兼容 OpenAI 接口规范，只需修改 `base_url` 和 `api_key`，即可无缝迁移。

---

## 📋 支持模型 | Supported Models

| 模型系列 | Model Series | 支持状态 | Status |
|---------|-------------|---------|--------|
| OpenAI GPT-4o | GPT-4o / GPT-4o-mini | ✅ 已支持 | Supported |
| OpenAI GPT-4 | GPT-4 / GPT-4-Turbo | ✅ 已支持 | Supported |
| OpenAI GPT-3.5 | GPT-3.5-Turbo | ✅ 已支持 | Supported |
| OpenAI o1/o3 | o1-preview / o3-mini | ✅ 已支持 | Supported |
| Anthropic Claude | Claude 4 / 3.5 / 3 | ✅ 已支持 | Supported |
| Google Gemini | Gemini 2.5 / 2.0 / 1.5 | ✅ 已支持 | Supported |
| Antigravity | Antigravity Series | ✅ 已支持 | Supported |
| DeepSeek | DeepSeek-V3 / R1 | 🔄 即将支持 | Coming Soon |
| 通义千问 | Qwen-Max / Plus | 🔄 即将支持 | Coming Soon |
| Meta Llama | Llama 3 / 3.1 | 🔄 即将支持 | Coming Soon |

> 📌 持续更新中，更多模型即将上线！模型完整列表请访问 [https://ahg.codes](https://ahg.codes)

---

## 🚀 快速开始 | Quick Start

### 前置条件 | Prerequisites

1. 前往 [https://ahg.codes](https://ahg.codes) 注册账号
2. 注册即送 **免费测试额度**，可直接开始使用
3. 在控制台获取您的 API Key

### Base URL

```
https://ahg.codes/v1
```

### 1️⃣ cURL 示例

```bash
curl https://ahg.codes/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "user", "content": "Hello, BlueEagle!"}
    ],
    "temperature": 0.7
  }'
```

### 2️⃣ Python 示例

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
    ],
    temperature=0.7
)

print(response.choices[0].message.content)
```

> 💡 **提示**：只需安装 `pip install openai`，然后将 `base_url` 改为蓝鹰地址即可，其他代码完全不变！

### 3️⃣ Node.js 示例

```javascript
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "YOUR_API_KEY",
  baseURL: "https://ahg.codes/v1",
});

const response = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Hello, BlueEagle!" },
  ],
  temperature: 0.7,
});

console.log(response.choices[0].message.content);
```

### 4️⃣ 流式输出（Streaming）

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://ahg.codes/v1"
)

stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "写一首关于AI的诗"}],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="")
```

---

## 💰 充值与计费 | Pricing & Billing

### 计费规则 | Billing Rules

| 项目 | 说明 |
|------|------|
| 充值比例 | **1元人民币 = 1美元额度** |
| 消耗倍率 | **官方价格的 0.09x（9%）** |
| 计费方式 | 按量计费（Pay-as-you-go） |
| 额度有效期 | **永久有效，不清零** |
| 最低充值 | 无最低限制 |

### 💡 费用对比示例 | Cost Comparison

| 使用场景 | 官方价格 | 蓝鹰价格（0.09x） | 节省 |
|---------|---------|-------------------|------|
| GPT-4o 1M Input Tokens | $2.50 | **$0.225** | 91% |
| GPT-4o 1M Output Tokens | $10.00 | **$0.90** | 91% |
| Claude 3.5 Sonnet 1M Input | $3.00 | **$0.27** | 91% |
| Claude 3.5 Sonnet 1M Output | $15.00 | **$1.35** | 91% |
| Gemini 2.5 Pro 1M Input | $1.25 | **$0.1125** | 91% |

> 🎯 **充值100元人民币 = 100美元额度**，以GPT-4o为例，可处理约 **4400万Input Token** 或 **1000万Output Token**！

---

## ⚔️ 竞品对比 | Competitive Comparison

| 对比维度 | 蓝鹰AI网关 | OpenRouter | API2D | OneAPI |
|---------|-----------|-----------|-------|--------|
| **消耗倍率** | **0.09x** | 0.7x ~ 1.2x | 0.5x ~ 1.0x | 自建 |
| **充值比例** | **1:1** | 1:7+ | 1:5+ | N/A |
| **号池质量** | **100%原生官方** | 混合 | 混合 | 自建 |
| **故障切换** | **毫秒级自动** | 有 | 无 | 无 |
| **负载均衡** | **多账号智能** | 有 | 无 | 无 |
| **免费测试** | ✅ 注册即送 | ❌ | ❌ | N/A |
| **额度有效期** | **永久** | 按月 | 按月 | N/A |
| **OpenAI兼容** | ✅ 完全兼容 | ✅ | ⚠️ 部分 | ✅ |
| **支持模型数** | **20+** | 100+ | 10+ | 自建 |

---

## 🛠️ 进阶功能 | Advanced Features

### 多模型切换

```python
# 轻松切换不同模型，接口完全一致
models = ["gpt-4o", "claude-4-sonnet", "gemini-2.5-pro"]

for model in models:
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": "Explain quantum computing"}]
    )
    print(f"[{model}] {response.choices[0].message.content[:100]}...")
```

### Embedding 调用

```python
response = client.embeddings.create(
    model="text-embedding-3-large",
    input="BlueEagle AI Gateway is amazing!"
)
print(response.data[0].embedding[:5])
```

### 图像生成（DALL-E）

```python
response = client.images.generate(
    model="dall-e-3",
    prompt="A majestic blue eagle soaring over a digital network",
    size="1024x1024"
)
print(response.data[0].url)
```

---

## 📞 联系与支持 | Contact & Support

- 🌐 **官方网站**：[https://ahg.codes](https://ahg.codes)
- 📧 **邮箱**：通过官网联系
- 💬 **技术支持**：注册后通过控制台提交工单
- 📢 **最新动态**：关注官网公告获取最新模型上线信息

---

## ⚠️ 免责声明 | Disclaimer

本项目仓库仅用于 **蓝鹰AI网关（BlueEagle AI Gateway）** 的服务介绍与推广。所有AI模型服务由各模型官方提供，蓝鹰AI网关仅作为统一的API网关接入层。

- 用户需遵守各AI模型官方的使用条款与服务协议
- 请勿将本服务用于任何违法违规用途
- 我们保留在不事先通知的情况下调整价格与服务内容的权利
- 本仓库中的所有商标归其各自所有者所有

---

<div align="center">

**⭐ 如果蓝鹰AI网关对您有帮助，请给我们一个 Star！⭐**

**If BlueEagle AI Gateway helps you, please give us a Star! ⭐**

Made with ❤️ by [BlueEagle Team](https://ahg.codes)

</div>
