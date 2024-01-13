import axios from "axios"
import { useEffect, useState } from "react"
import Filter from '../../component/Filter';
import { monthNames } from '../../constants/Date';

const Table = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/Soklayy/tamdan-api/main/score.json')
            .then((response) => {
                setData(response.data)
            })
    }, [])

    return (
        <>
            <div className='space-x-3'>
                <Filter titleOption='មុខវិទ្យា' options={subject}/>
                <Filter titleOption='ខែ' options={monthNames} />
            </div>
            <div className="pt-5 ​">
                <div className="overflow-auto">
                    <table className="w-full min-w-[42rem]">
                        <thead className="bg-gray-700 text-green-500">
                            <tr>
                                <th className="text-center py-3 px-2 th-sum text-red-500" >ខែ</th>
                                {subject.map((item, key) => (
                                    <th className="text-center py-3 px-2 th-sum" key={key}>{item}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="border-gray-700 text-white min-w-max">

                            {data?.map((item, key) => (
                                <tr className="border-b" key={key}>
                                    <td className="py-3 px-2 font-bold text-center table-score">
                                        {item.month}
                                    </td>
                                    {
                                        Object.keys(item.subject).map((keyProperty, key) => (
                                            <td className="py-3 px-2 text-center table-score" key={key}>{item.subject[keyProperty]}</td>
                                        ))
                                    }
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default Table

const subject = ['គណិត', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវះវិទ្យា', 'ផែនដីវិទ្យា', 'សិលធម៌', 'ប្រវត្តវិទ្យា', 'ភូមិវិទ្យា']

