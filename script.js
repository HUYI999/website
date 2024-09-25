// 确保脚本加载时在控制台输出信息
console.log("Script loaded");

async function sendMessage() {
    // 获取用户输入
    const userInput = document.getElementById('userInput').value;
    // 你的 OpenAI API 密钥
    const apiKey = 'sk-kxKdV9YoU0pF1yb5ZpmP-u936UzgOuqSYc-MRT5__-T3BlbkFJupcf_aHvZG16iiV1VLOOcoGKY-1JwYVvEabH8Ul_IA';  // 请替换为你的最新 OpenAI API 密钥

    // 获取用于显示回复的元素
    const responseElement = document.getElementById('response');
    responseElement.innerHTML = 'Loading...';

    // 请求体内容，发送到 OpenAI API
    const requestBody = {
        model: 'gpt-4',  // 指定使用 GPT-4 模型
        messages: [{ role: 'user', content: userInput }],
        max_tokens: 150
    };

    try {
        // 发送请求到 OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`  // 使用 Bearer 令牌进行身份验证
            },
            body: JSON.stringify(requestBody)
        });

        // 检查是否有 HTTP 错误（如 401 未授权错误）
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 解析 API 返回的数据
        const data = await response.json();
        // 确保数据的格式是正确的
        if (!data.choices || !data.choices[0]) {
            throw new Error("No response from API");
        }

        // 显示 AI 的回复
        const aiResponse = data.choices[0].message.content;
        responseElement.innerHTML = `<p>${aiResponse}</p>`;
    } catch (error) {
        // 如果有任何错误，显示错误信息
        responseElement.innerHTML = `Error: ${error.message}`;
        console.error('Error:', error);
    }
}
