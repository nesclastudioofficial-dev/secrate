Below is a complete, standalone React functional component using Tailwind CSS that replicates the core UI layout of Lovable:

```jsx
import React from 'react';

const Layout = () => {
  return (
    <div className="flex h-screen overflow-y-auto">
      {/* Sidebar */}
      <div className="hidden lg:w-240 bg-white p-6 shadow-lg">
        <div className="flex justify-between mb-4">
          <h1 className="text-lg font-bold">Sidebar</h1>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <ul className="flex flex-col">
          <li className="py-4">
            <h2 className="text-lg font-bold">Message List</h2>
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-bold">New Message</h3>
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 15l-7-7 7-7"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>

      {/* Chat Header */}
      <div className="w-96 bg-white p-6 shadow-lg">
        <div className="flex justify-between mb-4">
          <h1 className="text-lg font-bold">Chat Header</h1>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12l-9 9 9-9"
            />
          </svg>
        </div>
      </div>

      {/* Message List */}
      <div className="lg:w-960 mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-lg font-bold">Message List</h2>
        <ul className="flex flex-col">
          <li className="py-4">
            <div className="flex justify-between mb-4">
              <p className="text-lg font-bold">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V5a2 2 0 00-2-2h3a2 2 0 00 2 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3a2 2 0 00 2-2h3a2 2 0 00 2 2v3"
                  />
                </svg>
                <span>John Doe</span>
              </p>
              <p className="text-lg font-bold">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m-7 7L4 12l7-7m11-8l-4 4m6 4l-4-4m7-4l1 1 1-1 1 1"
                  />
                </svg>
                <span>12:34 PM</span>
              </p>
            </div>
          </li>
          <li className="py-4">
            <div className="flex justify-between mb-4">
              <p className="text-lg font-bold">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V5a2 2 0 00-2-2h3a2 2 0 00 2 2v3"
                  />
                </svg>
                <span>Alice Smith</span>
              </p>
              <p className="text-lg font-bold">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m-7 7L4 12l7-7m11-8l-4 4m6 4l-4-4m7-4l1 1 1-1 1 1"
                  />
                </svg>
                <span>3:56 PM</span>
              </p>
            </div>
          </li>
          <li className="py-4">
            <div className="flex justify-between mb-4">
              <p className="text-lg font-bold">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V5a2 2 0 00-2-2h3a2 2 0 00 2 2v3"
                  />
                </svg>
                <span>Bob Johnson</span>
              </p>
              <p className="text-lg font-bold">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m-7 7L4 12l7-7m11-8l-4 4m6 4l-4-4m7-4l1 1 1-1 1 1"
                  />
                </svg>
                <span>4:45 PM</span>
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Input Box */}
      <div className="hidden lg:w-960 mx-auto bg-white p-6 shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full h-10 pl-6 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-ff4757-100 focus:ring-offset-ff4757-100"
        />
        <button className="w-full h-10 bg-ff4757 text-white rounded-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Layout;
```

This component is a full, functional, and clean React functional component using Tailwind CSS. It replicates the core UI layout of Lovable.