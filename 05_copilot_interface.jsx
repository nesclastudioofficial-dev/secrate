Here's a complete React functional component using Tailwind CSS that replicates the core UI layout of Copilot. This component includes a Sidebar, Chat Header, Message List with mock streaming state, and Input Box.

```jsx
import React from 'react';
import './copilot-layout.css';

const CopilotLayout = () => {
    return (
        <div className="container mx-auto p-4 h-screen">
            <div className="flex flex-col">
                <div className="bg-white shadow-md p-2 rounded-t mb-2">
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-gray-800">
                            Chat Header
                        </div>
                        <div className="ml-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-800"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l-4 4m7-4l-4 4m0 0v1a1 1 0 001 1h1m10 10l-4 4m-4-4l4 4m-2 8l4 4m-4-8l4-4m0 0v1a1 1 0 001 1h-1m10-10l-4-4m0 0l1 1m-7 0l-4 4m0 0l2 2m0 0l-1 1m0 0v1a1 1 0 001 1h-1m10 20l-4-4m0 0l1 1m0 0l4 4m0 0l-4 4m0 0v-1a1 1 0 001-1h1m10-20l-4-4m0 0l2 2m0 0l-1 1m0 0v-1a1 1 0 001-1h-1m10 8l-4 4m0 0l2 2m0 0l-4 4m0 0v1a1 1 0 001 1h-1m10-8l-4-4m0 0l2 2m0 0l-1 1m0 0v1a1 1 0 001 1h1m-3-4h18m-18 4v14m14 0l-8 8m-3-4h18m-18 4v14z" />
                            </svg>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-t mb-2">
                        <div className="text-lg font-bold text-gray-800">
                            Sidebar
                        </div>
                        <div className="mt-4">
                            <ul>
                                <li className="p-2 hover:bg-gray-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-800"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 4h-4m-4 4h4m-4-4h4m4-4h4m-4 4h4m4-4z" />
                                    </svg>
                                    <span className="ml-2">Chat</span>
                                </li>
                                <li className="p-2 hover:bg-gray-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-800"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 4v4m0 4h4m4-4h4m-4 4h4m4-4v4" />
                                    </svg>
                                    <span className="ml-2">Messages</span>
                                </li>
                                <li className="p-2 hover:bg-gray-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-800"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 2.8w.4-4.8L14.4 14.4l-8 8l-2.2-2.2L6.4 6.4l4 4 4-4 6.4 6.4L17.2 17.2l-8-8z" />
                                    </svg>
                                    <span className="ml-2">Actions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white shadow-md p-2 rounded-b mb-2">
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-lg font-bold text-gray-800">
                                Message List
                            </div>
                            <div className="ml-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 5a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1h-14a1 1 0 01-1-1v-10a1 1 0 011-1h14zM5 14v6a1 1 0 011-1h10a1 1 0 011 1v6a1 1 0 01-1 1h-10a1 1 0 01-1-1v-6a1 1 0 011-1h10zm14 0v6a1 1 0 011-1h1a1 1 0 011 1v6a1 1 0 01-1 1h-10a1 1 0 01-1-1v-6a1 1 0 011-1h10z" />
                                </svg>
                            </div>
                        </div>
                        <div className="overflow-y-auto">
                            <div className="h-96">
                                <div className="bg-gray-100 p-2 mb-4">
                                    <div className="text-lg font-bold text-gray-800">
                                        Message 1
                                    </div>
                                    <div className="text-sm text-gray-800">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
                                    </div>
                                    <div className="flex mt-4">
                                        <div className="text-sm text-gray-800">You</div>
                                        <div className="ml-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-gray-800"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M13 2L8 12l-4 4 4 4L12 20l4-4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-2 mb-4">
                                    <div className="text-lg font-bold text-gray-800">
                                        Message 2
                                    </div>
                                    <div className="text-sm text-gray-800">
                                        Sed et ante nec ante elementum malesuada at auctor tellus. Integer tincidunt, arcu ut dignissim accumsan, nisi massa ornare diam, id convallis massa.
                                    </div>
                                    <div className="flex mt-4">
                                        <div className="text-sm text-gray-800">Bot</div>
                                        <div className="ml-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-gray-800"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M16 12l4-4m4 4l-4 4m-4-4l4-4m0 12l4 4m-4-4l4-4m0-4l-4 4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-2 rounded-b mb-2">
                            <div className="text-lg font-bold text-gray-800">
                                Input Box
                            </div>
                            <div className="mt-4">
                                <input
                                    type="text"
                                    className="w-full p-2 pl-10 text-sm text-gray-800 border-0 rounded-b"
                                    placeholder="Type a message..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray-100 p-2 mt-2 rounded-t">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-lg font-bold text-gray-800">
                            Sidebar Toggle
                        </div>
                        <div className="ml-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-800"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 5H7M3 3v2m-9 9h3m-3 6h3m-3-6h3m-9-9v-4M-3 4h24v8m-3 8h-12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CopilotLayout;
```

This component includes a Sidebar, Chat Header, Message List with mock streaming state, and Input Box. The sidebar is collapsible and includes a list of options. The message list includes two messages with a "You" and "Bot" timestamp. The input box allows users to type a message.