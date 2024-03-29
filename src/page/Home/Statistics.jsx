import { AiOutlineSchedule } from "react-icons/ai";

const Statistics = () => {
    return (
        <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 sm:col-span-4">
                <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14  absolute bottom-4 right-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    
                    <div className="flex justify-between items-center ">
                        <i className="fab fa-behance text-xl text-gray-400"></i>
                    </div>
                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">99</div>
                    <div className="text-sm text-gray-500">ចំណាត់ថ្នាក់​<span className='text-blue-500'>​100នាក់​​</span></div>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14  absolute bottom-4 right-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">20%</div>
                    <div className="text-sm text-gray-500">ពិន្ទិសរុប<span className='text-green-400'>ខែមករា</span></div>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                    <AiOutlineSchedule className="h-14 w-14  absolute bottom-4 right-3 text-red-500"/>
                    <div className="flex justify-between items-center ">
                        <i className="fab fa-codepen text-xl text-gray-400"></i>
                    </div>
                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">50</div>
                    <div className="text-sm text-gray-500">អវត្តមានក្នុង<span className='text-red-500'>ខែមករា</span></div>
                </div>
            </div>
        </div>
    )
}

export default Statistics

