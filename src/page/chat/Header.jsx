import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({onClickBack}) => {
    return (
        
        <div className="flex items-center flex-row-reverse justify-between py-2 px-1 sm:px-10 border-b-2 border-gray-200">
            <div className="relative flex items-center flex-row-reverse space-x-4">
                <div className="relative">
                    <span className="absolute text-green-500 -right-2 -bottom-2">
                        <svg width="20" height="20">
                            <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                        </svg>
                    </span>
                    <img
                        src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                        alt=""
                        className="w-10 sm:w-13 sm:h-13 h-10 rounded-full"
                    />
                </div>
                <div className="flex flex-col leading-tight">
                    <div className="flex flex-col leading-tight text-base ">
                        <div className="mt-1 flex items-center">
                            <span className="text-white font-bold text-right mr-3">Anderson Vanhron</span>
                        </div>
                        <span className="text-right mr-3 text-green-400 font-thin">គ្រូគណិតវិទ្យា</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                
                <Link to={'/'} title='Back to home'
                    className="sm:inline-flex items-center hidden  justify-center rounded-lg h-10 w-10 transition duration-500 ease-in-out text-green-500 hover:bg-gray-300"
                >
                    <FaHome className='text-2xl'/>
                </Link>
            </div>
            <FaArrowLeft className='text-lg text-green-500 sm:hidden cursor-pointer hover:text-green-800' onClick={onClickBack}/>
        </div>
    )
}

export default Header