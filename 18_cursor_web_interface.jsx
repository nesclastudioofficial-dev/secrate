Here's a sample React functional component using Tailwind CSS that replicates the core UI layout of Cursor_Web.

```jsx
import React from 'react';

const App = () => {
    const [streaming, setStreaming] = React.useState(false);

    return (
        <div className="h-screen w-full bg-gray-100">
            <div className="container mx-auto p-4 pt-6 pb-12 md:p-6">
                <div className="flex flex-col items-center">
                    <div className="bg-gray-200 rounded-lg shadow-lg p-4 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l-4 4 4 4m-4-4l-2-2m12-12l-8 8m3.37-3.37C6.53 5.54 5.47 6.42 4.84 7.42c-.27 1-.53 1.26-.53 1.65a.15.15 0 00.08.22l4.23 4.23a.15.15 0 00.22.08l-4.23 4.23a.15.15 0 01-.22.08z" />
                        </svg>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="bg-gray-200 rounded-lg shadow-lg p-4 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 5.2l-6 6 6 6 1.6-1.6L12 16.8v-3.6c0-1.14-.9-2-2-2s-2.14 0.86-2 2v3.6L12 20.4 6.4 20.4 6.4 12l6-6z" />
                            </svg>
                            <div className="text-lg font-bold text-gray-600">Sidebar</div>
                        </div>
                        <div className="bg-gray-200 rounded-lg shadow-lg p-4 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M8 5v14M8 3h14M8 19v-14M8 3h14M8 19v-14M5 8h14M5 19v-14M8 3h14M8 19v-14" />
                            </svg>
                            <div className="text-lg font-bold text-gray-600">Chat Header</div>
                        </div>
                        <div className="bg-gray-200 rounded-lg shadow-lg p-4 mb-6">
                            <div className="flex flex-col">
                                <div className="flex space-x-4">
                                    <div className="bg-gray-200 rounded-lg shadow-lg p-4 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l-4 4 4 4m-4-4l-2-2m12-12l-8 8m3.37-3.37C6.53 5.54 5.47 6.42 4.84 7.42c-.27 1-.53 1.26-.53 1.65a.15.15 0 00.08.22l4.23 4.23a.15.15 0 00.22.08l-4.23 4.23a.15.15 0 01-.22.08z" />
                                            <path d="M12 5.2l-6 6 6 6 1.6-1.6L12 16.8v-3.6c0-1.14-.9-2-2-2s-2.14 0.86-2 2v3.6L12 20.4 6.4 20.4 6.4 12l6-6z" />
                                        </svg>
                                        <div className="text-lg font-bold text-gray-600">Message 1</div>
                                    </div>
                                    <div className="bg-gray-200 rounded-lg shadow-lg p-4 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l-4 4 4 4m-4-4l-2-2m12-12l-8 8m3.37-3.37C6.53 5.54 5.47 6.42 4.84 7.42c-.27 1-.53 1.26-.53 1.65a.15.15 0 00.08.22l4.23 4.23a.15.15 0 00.22.08l-4.23 4.23a.15.15 0 01-.22.08z" />
                                            <path d="M12 5.2l-6 6 6 6 1.6-1.6L12 16.8v-3.6c0-1.14-.9-2-2-2s-2.14 0.86-2 2v3.6L12 20.4 6.4 20.4 6.4 12l6-6z" />
                                        </svg>
                                        <div className="text-lg font-bold text-gray-600">Message 2</div>
                                    </div>
                                </div>
                                <button className="bg-gray-200 rounded-lg shadow-lg p-4 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M15.41 12a2.4 2.4 0 01-2.4 2.4A2.4 2.4 0 0012 12.4l-5 5 5-5z" />
                                        <path d="M10 14h14m-2.2 2.2a2.2 2.2 0 01-2.2-2.2m2.2-2.2a2.2 2.2 0 012.2 2.2m-2.2 2.2a2.2 2.2 0 01-2.2 2.2m2.2 2.2a2.2 2.2 0 012.2-2.2m-2.2-2.2a2.2 2.2 0 01-2.2-2.2m2.2 2.2a2.2 2.2 0 012.2-2.2m-2.2 2.2a2.2 2.2 0 01-2.2-2.2z" />
                                    </svg>
                                </button>
                                <button className="bg-gray-200 rounded-lg shadow-lg p-4 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M15.41 12a2.4 2.4 0 01-2.4 2.4A2.4 2.4 0 0012 12.4l-5 5 5-5z" />
                                        <path d="M10 14h14m-2.2 2.2a2.2 2.2 0 01-2.2-2.2m2.2-2.2a2.2 2.2 0 012.2 2.2m-2.2 2.2a2.2 2.2 0 01-2.2 2.2m2.2 2.2a2.2 2.2 0 012.2-2.2m-2.2 2.2a2.2 2.2 0 01-2.2-2.2m2.2 2.2a2.2 2.2 0 012.2-2.2m-2.2 2.2a2.2 2.2 0 01-2.2-2.2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg shadow-lg p-4 mb-6">
                            <input type="text" className="w-full p-2 pl-10 text-sm text-gray-600 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Search chat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-6">
                <div className="bg-gray-200 rounded-lg shadow-lg p-4 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l-4 4 4 4m-4-4l-2-2m12-12l-8 8m3.37-3.37C6.53 5.54 5.47 6.42 4.84 7.42c-.27 1-.53 1.26-.53 1.65a.15.15 0 00.08.22l4.23 4.23a.15.15 0 00.22.08l-4.23 4.23a.15.15 0 01-.22.08z" />
                        <path d="M12 5.2l-6 6 6 6 1.6-1.6L12 16.8v-3.6c0-1.14-.9-2-2-2s-2.14 0.86-2 2v3.6L12 20.4 6.4 20.4 6.4 12l6-6z" />
                    </svg>
                    <div className="text-lg font-bold text-gray-600">Input Box</div>
                </div>
            </div>
        </div>
    );
};

export default App;
```