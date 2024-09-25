async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const apiKey = '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';  // 请将 'your-api-key-here' 替换为你的 OpenAI API 密钥

    const responseElement = document.getElementById('response');
    responseElement.innerHTML = 'Loading...';

    const requestBody = {
        model: 'gpt-4', // 使用 GPT-4
        messages: [{ role: 'user', content: userInput }],
        max_tokens: 150
    };

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        responseElement.innerHTML = `<p>${aiResponse}</p>`;
    } catch (error) {
        responseElement.innerHTML = 'Error: ' + error.message;
        console.error('Error:', error);
    }
}
