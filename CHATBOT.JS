
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('send');


const GROQ_API_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_API_KEY = 'YOUR_GROQ_API_KEY'; // Replace with your actual Groq API key


function initChat() {
  appendMessage('bot', 'Hello! I\'m FarmAI, your farming assistant. Ask me anything about crops, farming techniques, or agricultural advice.');
}


function appendMessage(sender, message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  const textSpan = document.createElement('span');
  textSpan.textContent = message;
  
  messageDiv.appendChild(textSpan);
  chatBox.appendChild(messageDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
}


async function handleUserInput() {
  const message = userInput.value.trim();
  if (message === '') return;
  
 
  appendMessage('user', message);
  userInput.value = '';
  
 
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot-message typing';
  typingDiv.textContent = 'Typing...';
  chatBox.appendChild(typingDiv);
  
  try {
  
    const response = await callGroqAPI(message);
    
 
    chatBox.removeChild(typingDiv);
    
    
    appendMessage('bot', response);
  } catch (error) {
   
    chatBox.removeChild(typingDiv);
 
    appendMessage('bot', 'Sorry, I encountered an error. Please try again.');
    console.error('Error:', error);
  }
}


async function callGroqAPI(message) {
  const payload = {
    model: "llama3-8b-8192", 
    messages: [
      {
        role: "system",
        content: "You are FarmAI, an agricultural assistant that helps farmers with crop advice, farming techniques, pest control, and other agricultural questions. Your responses should be helpful, informed by agricultural science, and tailored to the user's specific farming needs. Keep answers concise but informative."
      },
      {
        role: "user",
        content: message
      }
    ],
    temperature: 0.7,
    max_tokens: 1024
  };

  try {
    const response = await fetch(GROQ_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}


sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleUserInput();
  }
});


document.addEventListener('DOMContentLoaded', initChat);


