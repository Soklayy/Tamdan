import { AiFillMessage } from "react-icons/ai";
import { RiVoiceprintLine } from "react-icons/ri";

const Message = () => {
    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-white flex items-center text-xl gap-2">
                <AiFillMessage className="text-green-500" />Chat with teachers
            </h2>
            {/* <!-- elements 1 --> */}
            <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">

                <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">

                        <div className="inline-flex w-12 h-12">
                            <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" relative w-12 h-12 object-cover rounded-2xl" />
                            <span className="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                            <span></span>
                        </div>

                        <div className="flex flex-col ml-3">
                            <div className="font-medium leading-none text-gray-100">Messi</div>
                            <p className="text-sm text-green-500 leading-none mt-1">គ្រូគណិតវិទ្យា</p>
                        </div>
                    </div>
                    <div className="pl-2">
                        <p className="text-xs w-full text-gray-500 text-right mb-1">9:02pm</p>
                        <div className="flex items-center gap-1 text-gray-300 text-sm">
                            Send a voice Message <RiVoiceprintLine />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--elements 2--> */}

            <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">

                <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">

                        <div className="inline-flex w-12 h-12"><img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" relative p-1 w-12 h-12 object-cover rounded-2xl" /><span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                            <span></span>
                        </div>

                        <div className="flex flex-col ml-3 min-w-0">
                            <div className="font-medium w-28 leading-none text-gray-100 truncate">Groupnamekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>
                            <p className="text-sm text-green-500 leading-none mt-1 truncate">គ្រូភាសាខ្មែរ</p>
                        </div>
                    </div>
                    <div className="pl-2 truncate">
                        <p className="text-xs w-full text-gray-500 text-right mb-1">9:02pm</p>
                        <p className=" text-gray-300 text-xs truncate">
                            rjrjrkrtjjtjjjtjtjppppppppppppppppppppppppppppppppppppppppppppលលលលលលលលលលលលលលលលលលលលលលលលលល
                        </p>
                    </div>
                </div>
            </div>
            {/* <!--elements 2--> */}
            <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                        <div className="inline-flex w-12 h-12"><img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" relative p-1 w-12 h-12 object-cover rounded-2xl" /><span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75"></span>
                            <span></span>
                        </div>

                        <div className="flex flex-col ml-3 min-w-0">
                            <div className="font-medium leading-none text-gray-100">Ajimon</div>
                            <p className="text-sm text-green-500  leading-none mt-1 truncate">គ្រូរូបវិទ្យា</p>
                        </div>
                    </div>
                    <div className="pl-2 truncate">
                        <p className="text-xs w-full text-gray-500 text-right mb-1">9:02pm</p>
                        <div className="text-gray-300 items-center flex text-lg truncate">
                            <p className="text-xs">typing</p>
                            <span className="animate-bounce">...</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                        <div className="inline-flex w-12 h-12"><img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" relative p-1 w-12 h-12 object-cover rounded-2xl" /><span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75"></span>
                            <span></span>
                        </div>

                        <div className="flex flex-col ml-3 min-w-0">
                            <div className="font-medium leading-none text-gray-100">Ajimon</div>
                            <p className="text-sm text-green-500  leading-none mt-1 truncate">គ្រូរូបវិទ្យា</p>
                        </div>
                    </div>
                    <div className="pl-2 truncate">
                        <p className="text-xs w-full text-gray-500 text-right mb-1">9:02pm</p>
                        <div className="text-gray-300 items-center flex text-lg truncate">
                            <p className="text-xs">typing</p>
                            <p className="animate-bounce">...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-4 bg-gray-800 border border-gray-800 shadow-md hover:text-green-500 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
                <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                        <div className="-space-x-5 flex ">
                            <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800" />
                            <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800 shadow" />
                        </div>

                        <div className="flex flex-col ml-3 min-w-0">
                            <div className="font-medium leading-none text-gray-100">Ronaldo and Other... </div>
                            <p className="text-sm text-gray-500 leading-none mt-1 truncate">Jul 066, 2021, 8.25 PM</p>
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message