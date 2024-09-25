async function getResponse() {
    const userInput = document.getElementById('userInput').value;
    const responseElement = document.getElementById('response');

    // 显示加载中的状态
    responseElement.innerHTML = "Loading...";

    // OpenAI API 请求参数
    const apiKey = "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";  // 请将这个替换为你的真实 API 密钥
    const url = "https://api.openai.com/v1/chat/completions";
    const requestData = {
        model: "gpt-4",
        messages: [{ role: "user", content: userInput }],
        temperature: 0.7
    };

    // 发送请求到 OpenAI API
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestData)
        });

        const data = await response.json();

        // 显示返回的 AI 响应
        const aiResponse = data.choices[0].message.content;
        responseElement.innerHTML = `<p>${aiResponse}</p>`;
    } catch (error) {
        responseElement.innerHTML = "Error: Unable to get response.";
        console.error(error);
    }
}
