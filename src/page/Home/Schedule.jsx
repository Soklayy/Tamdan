import axios from 'axios'
import { useEffect, useState } from 'react'

const Schedule = () => {
    const today = new Date()
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/Soklayy/tamdan-api/main/schedule.json')
            .then((response) => {
                today.getDay()!=0&&setData(response.data[today.getDay()-1])
            })
    }, [])


    return (
        <div className='text-white space-y-5 bg-gray-800 p-4 rounded-2xl'>
            <span className="relative inline-block date uppercase font-medium text-green-500 tracking-widest">
                {data?.day||'Sunday'}  {monthNames[today.getMonth()]} {today.getFullYear()}
            </span>
            {
                data?.data?.map((data, key) => (
                    <div className="flex mb-2" key={key}>
                        <div className="w-2/12">
                            <span className="text-sm block">{data.time}</span>
                        </div>
                        <div className="w-1/12">
                            <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                        </div>
                        <div className="w-9/12">
                            <span className="text-sm font-semibold block">{data.subject}</span>
                            <span className="text-sm">{data.teacher}</span>
                        </div>
                    </div>
                ))|| 
                <div className='w-full​​ text-2xl text-red-600 h-full flex items-center justify-center'>
                    <p>ចុងសប្តាហ៍</p>
                </div>
            }
        </div>
    )
}

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default Schedule