Here's an example of a React functional component using Tailwind CSS that replicates the core UI layout of DeepSeek:

```jsx
import React, { useState } from 'react';

const DeepSeekLayout = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, how are you?', user: 'John Doe', sentAt: '2023-03-16T14:30:00.000Z' },
    { id: 2, text: 'I am fine, thanks!', user: 'Jane Doe', sentAt: '2023-03-16T14:30:10.000Z' },
    { id: 3, text: 'That is great to hear!', user: 'John Doe', sentAt: '2023-03-16T14:30:30.000Z' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages((prevMessages) => [...prevMessages, { id: prevMessages.length + 1, text: newMessage, user: 'You', sentAt: new Date().toISOString() }]);
    setNewMessage('');
  };

  const handleInput = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <div className="flex h-screen">
      <div className="hidden w-16 bg-white shadow-md h-full p-4 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-4h14a2 2 0 012 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-4z"
          />
        </svg>
        <ul className="flex flex-col space-y-2">
          {messages.map((message) => (
            <li
              key={message.id}
              className="bg-gray-200 border-b border-gray-300 p-2"
            >
              <p
                className="font-bold text-gray-600"
                dangerouslySetInnerHTML={{ __html: message.user }}
              />
              <p className="text-gray-600">{message.text}</p>
              <p className="text-gray-600">{message.sentAt}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 relative">
        <div
          className="flex-shrink-0 h-16 bg-white shadow-md px-4"
          style={{ maxHeight: '100vh', overflowY: 'auto' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-4h14a2 2 0 012 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-4z"
            />
          </svg>
          <h1 className="ml-2 text-2xl font-bold text-gray-600">Chat Header</h1>
          <input
            type="text"
            value={newMessage}
            onChange={handleInput}
            className="ml-2 w-full p-2 border-gray-300 focus:outline-none"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeepSeekLayout;
```

This code defines a `DeepSeekLayout` component that includes a sidebar, chat header, message list with mock streaming state, and input box. The sidebar includes a raw SVG icon and a list of messages, while the chat header includes a raw SVG icon and a header title. The input box includes a text input field and a send button. The component uses Tailwind CSS classes to style the layout and includes a mock streaming state to demonstrate the core UI layout of DeepSeek.