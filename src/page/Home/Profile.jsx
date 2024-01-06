import React from 'react'

const Profile = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="bg-gray-800 border border-gray-800 shadow-lg rounded-2xl p-4 flex flex-col items-center">
                <div className="flex flex-col justify-center sm:flex-row sm:justify-between items-center w-full">
                    <div className="relative flex items-center h-24 w-24 sm:mb-0 mb-3">
                        <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className="w-24 h-24 object-cover rounded-2xl" />
                    </div>
                    <div className="flex flex-col items-center sm:items-start ml-2 sm:ml-5 ">
                        <div className="text-lg text-gray-200 font-bold font-hanuman leading-none">យ៉ន​ សុខឡាយ</div>
                        <div className="flex-auto text-gray-400 my-1">
                            <span className="mr-3 ">ថ្នាក់ទី 7(A)</span><span className="mr-3 max-h-0">-</span><span>វិទ្យាល័យហ៊ុនសែនស្គន់</span>
                        </div>
                        <div className="text-gray-400">
                            ឆ្នាំសិក្សា​ 2020 - 2023
                        </div>
                    </div>
                    <a href="#" target='_self'
                        className="hidden text-justify sm:block font-dangrek bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full uppercase transition ease-in duration-300">
                        ព័ត៌មានលំអិត
                    </a>
                </div>
                <a href="#" target='_self'
                    className="h-1/2 sm:hidden text-center bg-green-400 hover:bg-green-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full uppercase transition ease-in duration-300">
                    ព័ត៌មានលំអិត
                </a>
            </div>
        </div>
    )
}

export default Profile