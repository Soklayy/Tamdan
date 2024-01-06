import { useEffect, useState } from "react";
import { monthNames } from "../../constants/Date"
import axios from "axios";

const Table = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://raw.githubusercontent.com/Soklayy/tamdan-api/main/smmary.json')
        .then((response)=>{
            setData(response.data)
        })
    },[])
    return (
        <div className="pt-5​">
            <table className="mt-5 w-full">
                <thead className="bg-gray-700 text-green-500">
                    <tr>
                        {Theader.map((item, key) => (
                            <th className="text-center py-3 px-2 th-sum" key={key}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="border-gray-700 text-white">

                    {
                        data?.map((data, key) => (
                            <tr className="border-b" key={key}>
                                <td className="py-3 px-2 font-bold text-center">
                                    {data.month}
                                </td>
                                <td className="py-3 px-2 text-center">{data.attendance}</td>
                                <td className="py-3 px-2 text-center">{data.score}</td>
                                <td className="py-3 px-2 text-center">{data.rank}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>

    )
}

export default Table

const Theader = ['ខែ', 'អវត្តមាន', 'ពិន្ទុ', 'ចំណាត់ថ្នាក់']