import { monthNames } from "../../constants/Date"

const Table = () => {
    const subjectFilterHandler = (e) => {
        console.dir(e.target.value)
    }

    const monthFilterHandler = (e) => {
        console.dir(e.target.value)
    }
    return (
        <div className="pt-5 ​">
            <div className="my-2 flex sm:flex-row flex-col">
                <div className="flex flex-row mb-1 sm:mb-0">
                    <div className="relative">
                        <select onChange={monthFilterHandler}

                            class="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            <option value='all'>All</option>
                            {
                                monthNames.map((month, key) => (
                                    <option value={key} key={key}>{month}</option>
                                ))
                            }
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                        <select onChange={subjectFilterHandler}
                            class="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option>All</option>
                            {
                                subject.map((subject, key) => (
                                    <option value={subject} key={key}>{subject}</option>
                                ))
                            }
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
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

                        {monthNames.map((month, key) => (
                            <tr className="border-b" key={key}>
                                <td className="py-3 px-2 font-bold text-center table-score">
                                    {month}
                                </td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                            </tr>

                        ))}

                        {monthNames.map((month, key) => (
                            <tr className="border-b" key={key}>
                                <td className="py-3 px-2 font-bold text-center table-score">
                                    {month}
                                </td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                                <td className="py-3 px-2 text-center table-score">50%</td>
                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Table


const subject = ['គណិត', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវះវិទ្យា', 'ផែនដីវិទ្យា', 'សិលធម៌', 'ប្រវត្តវិទ្យា', 'ភូមិវិទ្យា']

