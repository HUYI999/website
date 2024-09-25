// 确保脚本加载时在控制台输出信息
console.log("Script loaded");

async function sendMessage() {
    // 获取用户输入
    const userInput = document.getElementById('userInput').value;
    // 在这里设置你的 OpenAI API 密钥
    const apiKey = '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';

    // 获取用于显示回复的元素
    const responseElement = document.getElementById('response');
    responseElement.innerHTML = 'Loading...';

    // 请求体内容，发送到 OpenAI API
    const requestBody = {
        model: 'gpt-4', // 指定使用 GPT-4
        messages: [{ role: 'user', content: userInput }],
        max_tokens: 150
    };

    try {
        // 发送请求到 OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        // 处理返回的响应
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        // 显示返回的 GPT-4 响应
        responseElement.innerHTML = `<p>${aiResponse}</p>`;
    } catch (error) {
        // 如果出错，显示错误信息
        responseElement.innerHTML = 'Error: ' + error.message;
        console.error('Error:', error);
    }
}
