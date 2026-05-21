"""
蓝鹰AI网关 (BlueEagle AI Gateway) - Python 调用示例
官方网站: https://ahg.codes
Base URL: https://ahg.codes/v1

安装依赖: pip install openai
"""

from openai import OpenAI

# ============ 配置 ============
API_KEY = "YOUR_API_KEY"  # 替换为您的蓝鹰API Key
BASE_URL = "https://ahg.codes/v1"

# ============ 初始化客户端 ============
client = OpenAI(api_key=API_KEY, base_url=BASE_URL)


def example_basic_chat():
    """基础对话示例"""
    print("=" * 50)
    print("📝 基础对话示例 - GPT-4o")
    print("=" * 50)

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "你是一个专业的AI助手。"},
            {"role": "user", "content": "请用3句话介绍蓝鹰AI网关的核心优势。"},
        ],
        temperature=0.7,
    )

    print(f"模型: {response.model}")
    print(f"回答: {response.choices[0].message.content}")
    print(f"Token用量: {response.usage}")
    print()


def example_claude():
    """Claude模型调用示例"""
    print("=" * 50)
    print("📝 Claude 4 Sonnet 对话示例")
    print("=" * 50)

    response = client.chat.completions.create(
        model="claude-4-sonnet",
        messages=[
            {"role": "user", "content": "Explain the concept of AI gateway in simple terms."},
        ],
        temperature=0.5,
    )

    print(f"模型: {response.model}")
    print(f"回答: {response.choices[0].message.content}")
    print()


def example_gemini():
    """Gemini模型调用示例"""
    print("=" * 50)
    print("📝 Gemini 2.5 Pro 对话示例")
    print("=" * 50)

    response = client.chat.completions.create(
        model="gemini-2.5-pro",
        messages=[
            {"role": "user", "content": "What are the latest advances in large language models?"},
        ],
        temperature=0.7,
    )

    print(f"模型: {response.model}")
    print(f"回答: {response.choices[0].message.content}")
    print()


def example_streaming():
    """流式输出示例"""
    print("=" * 50)
    print("🌊 流式输出示例")
    print("=" * 50)

    stream = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": "写一首关于蓝鹰的短诗"}],
        stream=True,
    )

    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="", flush=True)
    print("\n")


def example_embedding():
    """Embedding示例"""
    print("=" * 50)
    print("🔢 Embedding 向量示例")
    print("=" * 50)

    response = client.embeddings.create(
        model="text-embedding-3-large",
        input="蓝鹰AI网关提供全球顶尖大模型统一API接入服务",
    )

    print(f"向量维度: {len(response.data[0].embedding)}")
    print(f"前5个分量: {response.data[0].embedding[:5]}")
    print()


def example_multi_model():
    """多模型对比示例"""
    print("=" * 50)
    print("🔄 多模型对比示例")
    print("=" * 50)

    models = ["gpt-4o", "claude-4-sonnet", "gemini-2.5-pro"]
    question = "What is 2+2?"

    for model in models:
        response = client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": question}],
            max_tokens=50,
        )
        print(f"[{model}] {response.choices[0].message.content.strip()}")
    print()


if __name__ == "__main__":
    print("🦅 蓝鹰AI网关 - Python 调用示例集")
    print(f"🌐 官网: https://ahg.codes")
    print(f"📡 Base URL: {BASE_URL}")
    print()

    # 取消注释以运行各示例
    example_basic_chat()
    # example_claude()
    # example_gemini()
    # example_streaming()
    # example_embedding()
    # example_multi_model()
