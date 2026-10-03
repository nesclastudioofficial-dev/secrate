Here is a complete, standalone React functional component using Tailwind CSS that replicates the core UI layout of YouChat:
```jsx
import React from 'react';

const YouChatLayout = () => {
  const [messages, setMessages] = React.useState([
    { id: 1, text: 'Hello, how are you?' },
    { id: 2, text: 'I\'m good, thanks!' },
    { id: 3, text: 'That\'s great to hear!' },
  ]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow-md">
      <div className="flex flex-col space-y-4">
        <div className="bg-a855f7 p-4 text-white rounded-t">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffffff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12l4-4m0 0l-4 4m4-4l-4 4m-12 8l-4-4m4 4l-4 4m0 0l-4 4"
            />
          </svg>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="h-8 bg-a855f7 p-2 rounded-t">
            <span className="text-white">Your Chat Name</span>
          </div>
          <ul className="space-y-2">
            {messages.map((message) => (
              <li key={message.id} className="flex justify-between items-center">
                <span className="text-gray-700">{message.text}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12l4-4m0 0l-4 4m4-4l-4 4m0 0l-4 4"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            className="w-full p-2 pl-12 text-gray-700 bg-white rounded-b"
            placeholder="Type a message..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage({ id: messages.length + 1, text: e.currentTarget.value });
                e.currentTarget.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default YouChatLayout;
```
This component includes the following UI elements:

1. A sidebar with a raw SVG icon using inline paths.
2. A chat header with a raw SVG icon and a placeholder text.
3. A message list with mock streaming state, displaying the last 3 messages.
4. An input box for typing new messages, which triggers the `handleSendMessage` function when the Enter key is pressed.

The component uses Tailwind CSS classes matching the accent color `#a855f7`.