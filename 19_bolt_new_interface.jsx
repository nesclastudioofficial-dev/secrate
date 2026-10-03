Here is a complete, standalone React functional component using Tailwind CSS that replicates the core UI layout of Bolt_new:
```jsx
import React from 'react';

const BoltNewUI = () => {
  const messages = [
    { text: 'Hello, how are you?', author: 'John Doe', time: '10:00', isMe: false },
    { text: 'I\'m good, thanks!', author: 'Jane Doe', time: '10:05', isMe: true },
    { text: 'What\'s up?', author: 'John Doe', time: '10:10', isMe: false },
    { text: 'Not much, just coding.', author: 'Jane Doe', time: '10:15', isMe: true },
    { text: 'That sounds cool!', author: 'John Doe', time: '10:20', isMe: false },
  ];

  return (
    <div
      className="bg-white h-screen w-full flex flex-col"
      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
    >
      {/* Sidebar */}
      <div
        className="bg-gray-200 h-1/3 w-full sticky top-0 z-10"
        style={{ backgroundColor: '#131315' }}
      >
        <div
          className="flex justify-between items-center px-4 py-2"
          style={{ color: '#131315' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-600"
          >
            <path d="M3 5v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-18c-1.1 0-2 .9-2 2V5zm7 9H5v2h14v-2zm0-8H5V7h14V5z" />
          </svg>
          <span className="font-bold">John Doe</span>
        </div>
      </div>

      {/* Chat Header */}
      <div
        className="bg-gray-200 h-1/3 w-full sticky top-1/3 z-10"
        style={{ backgroundColor: '#131315' }}
      >
        <div
          className="flex justify-between items-center px-4 py-2"
          style={{ color: '#131315' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-600"
          >
            <path d="M3 5v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-18c-1.1 0-2 .9-2 2V5zm7 9H5v2h14v-2zm0-8H5V7h14V5z" />
          </svg>
          <span className="font-bold">Chat</span>
        </div>
      </div>

      {/* Message List */}
      <div
        className="flex-1 h-2/3 overflow-y-scroll"
        style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex justify-between items-center px-4 py-2 ${
              message.isMe ? 'bg-gray-100' : 'bg-gray-200'
            }`}
          >
            <span
              className={`font-bold ${
                message.isMe ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              {message.author}
            </span>
            <span className="ml-2">{message.text}</span>
            <span className="ml-2">{message.time}</span>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div
        className="flex-1 h-1/3 bg-gray-200"
        style={{ backgroundColor: '#131315' }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full h-full pl-2 pr-6 text-gray-600"
          style={{ color: '#131315' }}
        />
        <button
          type="button"
          className="w-8 h-8 bg-blue-600 text-white rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full text-white"
          >
            <path d="M20.41 4.58L8.59 12l11.81 5.81 5.81-11.81z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BoltNewUI;
```
This component includes a sidebar, chat header, message list with mock streaming state, and input box. The layout is designed to match the core UI layout of Bolt_new, using Tailwind CSS classes to achieve the desired styling.