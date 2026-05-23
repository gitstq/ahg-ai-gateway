"""
蓝鹰AI网关 - Python 调用示例
BlueEagle AI Gateway - Python Example

官网: https://ahg.codes
"""

from openai import OpenAI

# 初始化客户端
# Initialize client
client = OpenAI(
    api_key="YOUR_API_KEY",  # 替换为您的API密钥
    base_url="https://ahg.codes/v1"
)

# 示例1: 简单对话
# Example 1: Simple chat
def simple_chat():
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": "Hello, 介绍一下你自己"}]
    )
    print("GPT-4o 回复:", response.choices[0].message.content)

# 示例2: 流式输出
# Example 2: Streaming
def streaming_chat():
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": "讲一个短故事"}],
        stream=True
    )
    print("流式输出: ", end="")
    for chunk in response:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="")
    print()

# 示例3: Claude 模型调用
# Example 3: Claude model
def claude_chat():
    response = client.chat.completions.create(
        model="claude-3-5-sonnet-20241022",
        messages=[{"role": "user", "content": "用Python写一个快速排序"}]
    )
    print("Claude 回复:", response.choices[0].message.content)

# 示例4: Gemini 模型调用
# Example 4: Gemini model
def gemini_chat():
    response = client.chat.completions.create(
        model="gemini-1.5-pro",
        messages=[{"role": "user", "content": "解释量子计算的基本原理"}]
    )
    print("Gemini 回复:", response.choices[0].message.content)

if __name__ == "__main__":
    print("=" * 50)
    print("蓝鹰AI网关 - Python 调用示例")
    print("BlueEagle AI Gateway - Python Examples")
    print("=" * 50)
    
    # 请取消注释要运行的示例
    # Uncomment the example you want to run
    
    # simple_chat()
    # streaming_chat()
    # claude_chat()
    # gemini_chat()
    
    print("\n请先在代码中设置您的 API Key，然后取消注释要运行的示例函数")
    print("Please set your API Key in the code and uncomment the example function to run")
