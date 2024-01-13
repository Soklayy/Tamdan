import axios from "axios"
import { monthNames } from "../../constants/Date"
import { useEffect, useState } from "react"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Filter from "../../component/Filter";

const Table = () => {

    const [day, setDay] = useState('default')
    const [month, setMonth] = useState('default')

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     axios.get('https://raw.githubusercontent.com/Soklayy/tamdan-api/main/score.json')
    //         .then((response) => {
    //             setData(response.data)
    //         })
    // }, [])
    // setDay(e.taeget.value)

    return (
        <>
            <div className='space-x-3 mt-3'>
                <Filter titleOption='ថ្ងៃ' options={allday} onChangeHandler={e => setDay(e.target.value== 'default' ?e.target.value:+e.target.value)} />
                {/* <Filter titleOption='សប្តាហ៍' options={monthNames} /> */}
                <Filter titleOption='ខែ' options={monthNames} onChangeHandler={e => setMonth(e.target.value)}/>
            </div>
            <div className="pt-5 w-full​">
                <div className="overflow-x-auto w-full">
                    <table className="w-full min-w-[42rem]">
                        <thead className="bg-gray-700 text-white">
                            <tr>
                                <th className="text-center py-3 px-2 th-sum text-red-500" >ខែ</th>
                                {[...Array(day == 'default' ? 31 : 1)].map((item, key) => (
                                    <th className="text-center py-3 px-2 th-sum" key={key}>{day == 'default' ? key + 1 : day}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="border-gray-700 text-white min-w-max">

                            {month == 'default' ? monthNames.map((item, key) => (
                                <tr className="border-b" key={key}>
                                    <td className="py-3 px-2 font-bold text-center table-score">
                                        {item}
                                    </td>
                                    {[...Array(day == 'default' ? 31 : 1)].map((item, key) => (
                                        <td className="py-3 px-2 text-center text-green-500 table-score" key={key}><RiVerifiedBadgeFill /></td>
                                    ))}

                                    {/* {
                                    Object.keys(item.subject).map((keyProperty, key) => (
                                        <td className="py-3 px-2 text-center table-score" key={key}>{item.subject[keyProperty]}</td>
                                    ))} */}
                                </tr>

                            )) :

                                <tr className="border-b">
                                    <td className="py-3 px-2 font-bold text-center table-score">
                                        {month}
                                    </td>
                                    {[...Array(day == 'default' ? 31 : 1)].map((item, key) => (
                                        <td className="py-3 px-2 text-center text-green-500 table-score" key={key}><RiVerifiedBadgeFill /></td>
                                    ))}
                                </tr>
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table

const subject = ['គណិត', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវះវិទ្យា', 'ផែនដីវិទ្យា', 'សិលធម៌', 'ប្រវត្តវិទ្យា', 'ភូមិវិទ្យា']
const allday = [...Array(31)].map((i, k) => k + 1)

