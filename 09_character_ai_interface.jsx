Here's a simple implementation of the character AI UI layout you requested using React and Tailwind CSS:

```jsx
import React from 'react';

const CharacterAILayout = () => {
    // Mock streaming state
    const [messages, setMessages] = React.useState([
        {
            text: 'Hello, how are you?',
            user: 'JohnDoe',
            timestamp: new Date().toISOString()
        },
        {
            text: 'I am good, thank you!',
            user: 'JaneDoe',
            timestamp: new Date().toISOString()
        }
    ]);

    // Mock new message input
    const [inputValue, setInputValue] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulate adding a new message
        setMessages([...messages, {
            text: inputValue,
            user: 'You',
            timestamp: new Date().toISOString()
        }]);

        // Clear input value
        setInputValue('');
    };

    return (
        <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-col gap-4">
                {/* Sidebar */}
                <div className="flex-1">
                    <div className="bg-be185d p-4 text-white rounded-t-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10 6a2 2 0 0010 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4" />
                        </svg>
                    </div>
                    <div className="p-4 bg-be185d rounded-lg">
                        <h3 className="text-lg font-bold text-white">Sidebar Title</h3>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                </div>

                {/* Chat Header */}
                <div className="flex justify-between p-4 bg-be185d rounded-t-lg">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 12l10 10 10-10L12 2z" />
                        </svg>
                        <span className="ml-2 text-lg font-bold text-white">Chat Name</span>
                    </div>
                    <button className="bg-be185d hover:bg-be150 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.984 6.121l-4.16 4.16-4.16-4.16H9.984V6.121l4.16-4.16 4.16 4.16H17.984z" />
                        </svg>
                    </button>
                </div>

                {/* Message List */}
                <div className="flex-1 overflow-y-auto">
                    {messages.map((message, index) => (
                        <div key={index} className="flex justify-between items-center p-4 border-b border-gray-200">
                            <div>
                                <span className="text-lg font-bold">{message.user}</span>
                                <span className="text-sm">{message.timestamp}</span>
                            </div>
                            <span className="text-sm">{message.text}</span>
                        </div>
                    ))}
                </div>

                {/* Input Box */}
                <div className="flex justify-end p-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        className="w-64 py-2 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-be185d"
                    />
                    <button
                        type="submit"
                        className="bg-be185d hover:bg-be150 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-be185d"
                        onClick={handleSubmit}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 6v2M12 8v2M12 10v2M12 12v2M12 14v2M12 16v2" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CharacterAILayout;
```

This code creates a single React component that replicates the core UI layout of Character AI. The component includes a sidebar, chat header, message list with mock streaming state, and input box. The layout uses Tailwind CSS classes to achieve the desired styles and layouts.