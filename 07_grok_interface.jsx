Here is a sample React functional component using Tailwind CSS that replicates the core UI layout of Grok:
```jsx
import React from 'react';

const GrokLayout = () => {
  const [streaming, setStreaming] = React.useState({
    messages: [
      { id: 1, text: 'Message 1', sender: 'User 1' },
      { id: 2, text: 'Message 2', sender: 'User 2' },
      { id: 3, text: 'Message 3', sender: 'User 3' },
    ],
  });

  const handleSendMessage = (text) => {
    setStreaming((prev) => ({ ...prev, messages: [...prev.messages, { id: prev.messages.length + 1, text, sender: 'User 4' }] }));
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="flex h-screen">
        <div
          className="w-64 bg-gray-200 h-full p-4"
          style={{ backgroundColor: '#000000' }}
        >
          <div className="flex justify-between mb-4">
            <div className="text-lg font-bold">Sidebar</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="#000000"
              viewBox="0 0 24 24"
            >
              <path d="M3 12l2-2m0 0l7.293 7.293m0 7.293l-7.293 7.293m7.293 0l-7.293-7.293m7.293 7.293l2-2m0 0l-2 2m0 0l-2 2m0 0l-2-2m0 0l2 2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-bold mb-2">Chat Header</div>
            <div className="flex justify-between">
              <div className="text-lg font-bold">User 1</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="#000000"
                viewBox="0 0 24 24"
              >
                <path d="M3 12l2-2m0 0l7.293 7.293m0 7.293l-7.293 7.293m7.293 0l-7.293-7.293m7.293 7.293l2-2m0 0l-2 2m0 0l-2-2m0 0l2 2z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex justify-between mb-4">
            <div className="text-lg font-bold">Messages</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="#000000"
              viewBox="0 0 24 24"
            >
              <path d="M3 12l2-2m0 0l7.293 7.293m0 7.293l-7.293 7.293m7.293 0l-7.293-7.293m7.293 7.293l2-2m0 0l-2 2m0 0l-2-2m0 0l2 2z" />
            </svg>
          </div>
          <ul className="flex flex-col">
            {streaming.messages.map((message, index) => (
              <li key={index} className="flex justify-between mb-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="#000000"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12l2-2m0 0l7.293 7.293m0 7.293l-7.293 7.293m7.293 0l-7.293-7.293m7.293 7.293l2-2m0 0l-2 2m0 0l-2-2m0 0l2 2z" />
                  </svg>
                  {message.text}
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="#000000"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12l2-2m0 0l7.293 7.293m0 7.293l-7.293 7.293m7.293 0l-7.293-7.293m7.293 7.293l2-2m0 0l-2 2m0 0l-2-2m0 0l2 2z" />
                  </svg>
                  {message.sender}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 flex justify-between">
          <input
            type="text"
            className="w-64 pl-4 rounded-md border-0 bg-gray-100 focus:outline-none"
            placeholder="Type a message..."
            onChange={(e) => handleSendMessage(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="#000000"
            viewBox="0 0 24 24"
          >
            <path d="M3 12l2-2m0 0l7.293 7.293m0 7.293l-7.293 7.293m7.293 0l-7.293-7.293m7.293 7.293l2-2m0 0l-2 2m0 0l-2-2m0 0l2 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GrokLayout;
```
This code defines a single React functional component, `GrokLayout`, which replicates the core UI layout of Grok. It includes a sidebar, chat header, message list with mock streaming state, and input box.

Note that this code uses Tailwind CSS classes to style the component, and raw SVG inline paths to render icons. It does not import any external icon libraries.

You can copy and paste this code into your React project and use it as needed.