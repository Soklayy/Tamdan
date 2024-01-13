import { useEffect, useRef } from 'react';


const Messages = () => {
    const messagesRef = useRef(null);

    useEffect(() => {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }, []);
    return (
        <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
            ref={messagesRef}>
            {[...Array(100)].map(v => (
                <div className="chat-message">
                    <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                            <div>
                                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-600 text-white">
                                    ពេលអាយុ ២០ ឆ្នាំ អ្នកខ្វាយខ្វល់នឹងអ្វីដែល មនុស្សនៅជុំវិញគិតពីអ្នក។ ពេលអាយុ ៤០ ឆ្នាំ អ្នកលែងសូវខ្វល់ពីអ្វីដែលគេគិតពីអ្នក ពេលដល់អាយុ ៦០ ឆ្នាំ ទើបអ្នកដឹងថាគ្មាននរណាម្នាក់ខ្វល់ពីអ្នកតាំងពីអើយមក។
                                </span>
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                            alt="My profile"
                            className="w-6 h-6 rounded-full order-1"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Messages