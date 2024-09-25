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
