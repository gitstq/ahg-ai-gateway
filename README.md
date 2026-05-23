<div align="center">

![BlueEagle AI Gateway](https://img.shields.io/badge/BlueEagle-AI%20Gateway-00D4FF?style=for-the-badge&logo=artificial-intelligence&logoColor=white)

[![Stars](https://img.shields.io/github/stars/blueeagle-ai/gateway?style=flat-square&logo=github&color=gold)](https://github.com/blueeagle-ai/gateway)
[![Price](https://img.shields.io/badge/%E6%B6%88%E8%80%97%E5%80%8D%E7%8E%87-0.09x-success?style=flat-square)](https://ahg.codes)
[![Ratio](https://img.shields.io/badge/%E5%85%85%E5%80%BC%E6%AF%94%E4%BE%8B-1:1-blue?style=flat-square)](https://ahg.codes)
[![Official](https://img.shields.io/badge/100%25%E5%8E%9F%E7%94%9F%E5%AE%98%E6%96%B9%E5%8F%B7%E6%B1%A0-FF6B6B?style=flat-square)](https://ahg.codes)
[![Compatible](https://img.shields.io/badge/OpenAI%20Compatible-100%25-412991?style=flat-square&logo=openai)](https://ahg.codes)

# 🦅 蓝鹰AI网关 | BlueEagle AI Gateway

### **全球顶尖大模型统一API网关 · 一站式接入所有主流AI模型**

**Universal API Gateway for Top-Tier AI Models · One-Stop Access to All Leading LLMs**

[🌐 官方网站](https://ahg.codes) · [💰 立即充值](https://ahg.codes) · [📖 API文档](https://ahg.codes) · [💬 技术支持](https://ahg.codes)

</div>

---

## 🎯 项目简介 | Introduction

**蓝鹰AI网关**是全球领先的AI大模型统一接入平台，为开发者和企业提供**极致性价比**的AI API服务。

- 💎 **消耗倍率仅 0.09x** — 仅为官方定价的 **9%**
- 💵 **充值比例 1:1** — 充1元人民币 = 1美元官方额度
- 🔒 **100%原生官方号池** — 无掺假、无共享、无二次中转
- ⚡ **毫秒级故障切换** — 多账号智能负载均衡

> **BlueEagle AI Gateway** is a leading unified AI model access platform, providing developers and enterprises with **extreme cost-performance** AI API services at just **9% of official pricing**.

---

## ✨ 核心优势 | Key Advantages

| 特性 | 说明 | 优势 |
|------|------|------|
| 🎯 **0.09x 消耗倍率** | 仅为官方定价的9% | 节省 **91%** 成本 |
| 💰 **1:1 充值比例** | 1元=1美元官方额度 | 无汇率损失 |
| 🔐 **原生官方号池** | 100%官方账号，无掺假 | 稳定可靠 |
| 🎁 **免费测试额度** | 注册即送测试额度 | 零成本体验 |
| ⚡ **智能负载均衡** | 多账号自动调度 | 高可用性 |
| 🔄 **毫秒级故障切换** | 自动故障检测与切换 | 99.9% SLA |
| 📋 **OpenAI兼容** | 完全兼容OpenAI接口规范 | 零代码迁移 |
| ♾️ **额度永久有效** | 不清零、不过期 | 长期可用 |

---

## 📋 支持模型 | Supported Models

### 已支持 | Available Now

| 提供商 | 模型系列 | 状态 |
|--------|----------|------|
| **OpenAI** | GPT-4o, GPT-4o-mini, GPT-4-Turbo, GPT-3.5-Turbo 全系列 | ✅ 已上线 |
| **Anthropic** | Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Sonnet, Claude 3 Haiku 全系列 | ✅ 已上线 |
| **Google** | Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini Ultra 全系列 | ✅ 已上线 |
| **Antigravity** | 全系列模型 | ✅ 已上线 |

### 即将支持 | Coming Soon

| 提供商 | 模型系列 | 预计时间 |
|--------|----------|----------|
| **DeepSeek** | DeepSeek-V2, DeepSeek-Coder | 🚧 开发中 |
| **阿里巴巴** | 通义千问 Qwen 全系列 | 🚧 开发中 |
| **Meta** | Llama 3 全系列 | 🚧 开发中 |

---

## 🚀 快速开始 | Quick Start

### 1. 获取API密钥

访问 [https://ahg.codes](https://ahg.codes) 注册账号，获取您的 API Key。

### 2. 修改 Base URL

将官方 OpenAI 的 `https://api.openai.com/v1` 替换为：

```
https://ahg.codes/v1
```

### 3. 开始调用

#### cURL 示例

```bash
curl https://ahg.codes/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

#### Python 示例

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://ahg.codes/v1"
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello!"}]
)

print(response.choices[0].message.content)
```

#### Node.js 示例

```javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://ahg.codes/v1',
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: 'Hello!' }],
  });
  console.log(completion.choices[0].message.content);
}

main();
```

---

## 💰 充值与计费 | Pricing

### 计费说明

| 项目 | 说明 |
|------|------|
| **充值比例** | 1:1（充1元人民币 = 1美元官方额度） |
| **消耗倍率** | 0.09x（仅为官方定价的9%） |
| **计费方式** | 按量计费，用多少付多少 |
| **额度有效期** | 永久有效，不清零、不过期 |

### 成本对比示例

假设您调用 GPT-4o，官方定价 $0.005/1K tokens：

| 平台 | 实际成本（人民币） | 节省比例 |
|------|-------------------|----------|
| **官方直购** | 约 ¥0.036/1K tokens | - |
| **蓝鹰AI网关** | 约 ¥0.0032/1K tokens | **节省 91%** |

> 充值 ¥100 = 获得 $100 官方额度，实际可消费价值约 ¥1111 的API调用！

---

## ⚔️ 竞品对比 | Comparison

| 特性 | 蓝鹰AI网关 | 其他中转站A | 其他中转站B | 官方直购 |
|------|------------|-------------|-------------|----------|
| **消耗倍率** | **0.09x** | 0.15x-0.3x | 0.2x-0.5x | 1.0x |
| **充值比例** | **1:1** | 1:0.8 | 1:0.7 | - |
| **原生号池** | ✅ 100% | ⚠️ 混合 | ❌ 共享号 | ✅ 100% |
| **免费测试** | ✅ 有 | ❌ 无 | ⚠️ 限量 | ⚠️ 限量 |
| **故障切换** | ✅ 毫秒级 | ⚠️ 分钟级 | ❌ 无 | ✅ 官方保障 |
| **额度有效期** | ♾️ **永久** | 1年 | 6个月 | 永久 |
| **Claude支持** | ✅ 全系列 | ⚠️ 部分 | ❌ 无 | ✅ 全系列 |
| **Gemini支持** | ✅ 全系列 | ❌ 无 | ❌ 无 | ✅ 全系列 |

---

## 🛡️ 稳定性保障 | Reliability

- **多账号智能调度**：自动分配最优账号，避免单点故障
- **毫秒级故障检测**：实时监控账号健康状态
- **自动故障切换**：发现问题立即切换，业务无感知
- **99.9% SLA保障**：专业运维团队7×24小时监控

---

## 📞 联系与支持 | Support

- 🌐 **官方网站**: [https://ahg.codes](https://ahg.codes)
- 💬 **在线客服**: 官网右下角在线客服
- 📧 **商务合作**: 请通过官网联系

---

## ⚠️ 免责声明 | Disclaimer

1. 本服务仅供学习和研究使用，请遵守各AI平台的使用条款。
2. 请勿将本服务用于任何违法违规用途。
3. API服务的可用性取决于各官方平台的稳定性。
4. 价格可能根据市场情况调整，请以官网最新信息为准。

---

<div align="center">

**Made with ❤️ by BlueEagle Team**

[🌐 立即访问 https://ahg.codes](https://ahg.codes)

</div>
