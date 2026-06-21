"""
BlueEagle AI Gateway - Python 调用示例
官方文档: https://ahg.codes
"""

from openai import OpenAI

# 初始化客户端
client = OpenAI(
    api_key="YOUR_API_KEY",  # 替换为您的API Key
    base_url="https://ahg.codes/v1"
)

# 示例1: 基础对话
def chat_completion():
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Hello, BlueEagle!"}
        ]
    )
    print(response.choices[0].message.content)

# 示例2: 流式输出
def chat_stream():
    stream = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": "讲一个短故事"}],
        stream=True
    )
    for chunk in stream:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="")

# 示例3: 调用 Claude 模型
def chat_claude():
    response = client.chat.completions.create(
        model="claude-3-5-sonnet-20241022",
        messages=[{"role": "user", "content": "你好，Claude！"}]
    )
    print(response.choices[0].message.content)

# 示例4: 调用 Gemini 模型
def chat_gemini():
    response = client.chat.completions.create(
        model="gemini-1.5-pro",
        messages=[{"role": "user", "content": "你好，Gemini！"}]
    )
    print(response.choices[0].message.content)

if __name__ == "__main__":
    chat_completion()
