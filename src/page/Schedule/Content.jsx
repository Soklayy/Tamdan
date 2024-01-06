

const Content = ({ day, data }) => {

    return (
        <div className='text-white space-y-5 bg-gray-800 p-4 rounded-2xl'>
            <span className="relative inline-block date uppercase font-medium text-green-500 tracking-widest">
                {day}
            </span>

            {
                data.map((data, key) => (
                    <div className="flex items-center justify-center mb-2 gap-3" key={key}>
                        <div className="">
                            <span className="text-sm block">{data.time}</span>
                            {/* <span className="text-sm block">8:15a</span> */}
                        </div>
                        <div className="">
                            <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                        </div>
                        <div className="">
                            <span className="text-sm font-semibold block">{data.subject}</span>
                            <span className="text-sm">{data.teacher}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default Content