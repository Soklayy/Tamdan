import { useState } from 'react';
import Header from './Header';
import Input from './Input';
import Messages from './Messages';
import Users from './Users';
// import './ChatComponent.css'; // Import the CSS file containing styles

const ChatComponent = () => {

    const [loadMessage, setLoadMessage] = useState(false)

    const onClickLoadMessae = () => {
        setLoadMessage(!loadMessage)
    }

    return (
        <div className='flex justify-center w-full'>
            <div className={`sm:block sm:w-2/6 md:w-1/5 ${loadMessage?'hidden':'w-full'}`}>
                <Users onClickProfile={onClickLoadMessae} />
            </div>
            <div className={`bg-gray-900 pb-3 w-full justify-between sm:flex flex-col h-screen ${loadMessage ? 'flex' : 'hidden'}`}>

                <Header onClickBack={onClickLoadMessae}/>
                {/* Messages section */}
                <Messages />


                {/* Input and buttons section */}
                <Input />
            </div>
        </div>
    );
};

export default ChatComponent;



