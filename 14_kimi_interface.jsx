Here is a standalone React functional component using Tailwind CSS that replicates the core UI layout of Kimi:

```jsx
import { useState, useEffect } from "react";

function KimiLayout() {
  // Mock streaming state
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      message: "Hello, how are you?",
      timestamp: "2023-02-20 14:30:00",
    },
    {
      id: 2,
      sender: "Jane Doe",
      message: "I'm good, thanks! How about you?",
      timestamp: "2023-02-20 14:31:00",
    },
    {
      id: 3,
      sender: "John Doe",
      message: "I'm good, thanks! How about you?",
      timestamp: "2023-02-20 14:32:00",
    },
  ]);

  // Function to add new message
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-white p-4 sticky top-0">
        <div className="flex justify-between mb-2">
          <div className="flex">
            <img
              src="https://via.placeholder.com/48"
              alt=""
              className="rounded-full"
            />
            <div className="ml-2 text-lg font-bold text-gray-800">
              John Doe
            </div>
          </div>
          <div className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 16l-4-4-4 4m4-4l-4 4m-4-4l-4-4m4-4l4 4m4-4l-4-4m-4-4l-4 4"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex">
              <img
                src="https://via.placeholder.com/48"
                alt=""
                className="rounded-full"
              />
              <div className="ml-2 text-lg font-bold text-gray-800">
                Jane Doe
              </div>
            </div>
            <div className="ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 16l-4-4-4 4m4-4l-4 4m-4-4l-4-4m4-4l4 4m4-4l-4 4"
                />
              </svg>
            </div>
          </div>
          <div className="text-lg font-bold text-gray-800 mt-4">
            <span className="text-gray-800">New Message</span>
            <input
              type="text"
              className="w-full pl-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="Type a message..."
            />
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white rounded-md focus:outline-none"
              onClick={() => addMessage({ sender: "John Doe", message: "Hello, how are you?" })}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto bg-white p-4">
        <div className="flex">
          <div className="flex">
            <img
              src="https://via.placeholder.com/48"
              alt=""
              className="rounded-full"
            />
            <div className="ml-2 text-lg font-bold text-gray-800">
              John Doe
            </div>
          </div>
          <div className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 16l-4-4-4 4m4-4l-4 4m4-4l-4-4m4-4l4 4m4-4l-4 4"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className="bg-gray-100 p-4 mb-2 rounded-md">
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src="https://via.placeholder.com/48"
                    alt=""
                    className="rounded-full"
                  />
                  <div className="ml-2 text-lg font-bold text-gray-800">
                    {message.sender}
                  </div>
                </div>
                <div className="ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 16l-4-4-4 4m4-4l-4 4m4-4l-4-4m4-4l4 4m4-4l-4 4"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-800 mt-2">
                {message.message}
              </p>
              <p className="text-sm text-gray-600">
                {message.timestamp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KimiLayout;
```
This component uses Tailwind CSS classes to style the layout, and includes a sidebar, chat header, message list, and input box. It also includes mock streaming state to demonstrate the layout's functionality.