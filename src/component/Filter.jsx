import React from 'react'

const Filter = ({titleOption,options,onChangeHandler}) => {
    return (
        <div className="relative inline-flex">
            <svg
                className="w-2 h-2 absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
            >
                <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fillRule="nonzero"
                />
            </svg>
            <select className="border border-green-500 rounded-lg text-gray-900 h-8 pl-5 pr-10 bg-white focus:ring-green-500 focus:outline-none appearance-none"
                onChange={onChangeHandler}
            >
                <option value='default'>{titleOption}</option>
                {
                    options?.map((option,key)=>(
                        <option className='' value={option} key={key}>{option}</option>
                    ))
                }
            </select>
        </div>
        // <div className="my-2 flex sm:flex-row flex-col">
        //     <div className="flex flex-row mb-1 sm:mb-0">
        //         <div className="relative">
        //             <select onChange={monthFilterHandler}

        //                 className="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        //             >
        //                 <option value='all'>All</option>
        //                 {
        //                     monthNames.map((month, key) => (
        //                         <option value={key} key={key}>{month}</option>
        //                     ))
        //                 }
        //             </select>
        //             <div
        //                 className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        //                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        //                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        //                 </svg>
        //             </div>
        //         </div>
        //         <div className="relative">
        //             <select onChange={subjectFilterHandler}
        //                 className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
        //                 <option>All</option>
        //                 {
        //                     subject.map((subject, key) => (
        //                         <option value={subject} key={key}>{subject}</option>
        //                     ))
        //                 }
        //             </select>
        //             <div
        //                 className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        //                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        //                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        //                 </svg>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Filter