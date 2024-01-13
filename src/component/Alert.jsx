import { useState } from "react"

const Alert = () => {
    const [close, setClose]=useState('')
    return (
        <div className={`flex flex-col justify-center p-4 m-3 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl ${close}`}>
            <div className=" text-gray-400 flex items-center ">
                <img className="w-6 mr-2" src="https://v1.tailwindcss.com/_next/static/media/tailwindcss-mark.6ea76c3b72656960a6ae5ad8b85928d0.svg" alt="taiwind css" />
                <p> A free repository for community
                    components at
                    <a href="https://tailwindcomponents.com/u/aji" className="underline hover:underline-none ml-1 text-green-300" target="_blank">tailwindcomponets</a></p>
                <button type="button" className="ml-auto text-xs  font-medium tracking-wider text-gray-400 hover:text-green-400 transition ease-in duration-300"
                    onClick={()=> setClose('hidden')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Alert