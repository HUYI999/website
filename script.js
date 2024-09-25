{\rtf1\ansi\ansicpg936\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset134 PingFangSC-Regular;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 async function getResponse() \{\
    const userInput = document.getElementById('userInput').value;\
    const responseElement = document.getElementById('response');\
\
    // 
\f1 \'cf\'d4\'ca\'be\'bc\'d3\'d4\'d8\'d6\'d0\'b5\'c4\'d7\'b4\'cc\'ac
\f0 \
    responseElement.innerHTML = "Loading...";\
\
    // OpenAI API 
\f1 \'c7\'eb\'c7\'f3\'b2\'ce\'ca\'fd
\f0 \
    const apiKey = "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";  // 
\f1 \'d5\'e2\'c0\'ef\'cc\'ee\'c8\'eb\'c4\'e3\'b5\'c4
\f0  API 
\f1 \'c3\'dc\'d4\'bf
\f0 \
    const url = "https://api.openai.com/v1/chat/completions";\
    const requestData = \{\
        model: "gpt-4",  // 
\f1 \'ca\'b9\'d3\'c3\'c4\'e3\'cf\'eb\'d2\'aa\'b5\'c4\'c4\'a3\'d0\'cd
\f0 \
        messages: [\{ role: "user", content: userInput \}],\
        temperature: 0.7\
    \};\
\
    // 
\f1 \'b7\'a2\'cb\'cd\'c7\'eb\'c7\'f3\'b5\'bd
\f0  OpenAI API\
    const response = await fetch(url, \{\
        method: "POST",\
        headers: \{\
            "Content-Type": "application/json",\
            "Authorization": `Bearer $\{apiKey\}`\
        \},\
        body: JSON.stringify(requestData)\
    \});\
\
    const data = await response.json();\
    \
    // 
\f1 \'cf\'d4\'ca\'be\'cf\'ec\'d3\'a6\'bd\'e1\'b9\'fb
\f0 \
    const aiResponse = data.choices[0].message.content;\
    responseElement.innerHTML = `<p>$\{aiResponse\}</p>`;\
\}}