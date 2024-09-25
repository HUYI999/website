async function getResponse() {
    const userInput = document.getElementById('userInput').value;
    const responseElement = document.getElementById('response');

    // 显示加载中的状态
    responseElement.innerHTML = "Loading...";

    const apiKey = "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";  // 确保替换为正确的 API 密钥
    const url = "https://api.openai.com/v1/chat/completions";
    const requestData = {
        model: "gpt-4",
        messages: [{ role: "user", content: userInput }],
        temperature: 0.7
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.choices && data.choices.length > 0) {
            const aiResponse = data.choices[0].message.content;
            responseElement.innerHTML = `<p>${aiResponse}</p>`;
        } else {
            responseElement.innerHTML = "Error: No response from OpenAI.";
        }
    } catch (error) {
        responseElement.innerHTML = `Error: ${error.message}`;
        console.error(error);
    }
}
