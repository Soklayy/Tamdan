import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Table = () => {
    return (
        <div >
            <div className="overflow-x-auto min-h-screen">
                <table className="w-full whitespace-nowrap mt-5">
                    <thead className="bg-gray-700 text-green-500">
                        <tr>
                            {Theader.map((item, key) => (
                                <th className="text-left py-3 px-2 th-sum" key={key}>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="border-gray-700 text-white">

                        <tr className="border-b">
                            <td className="py-3 px-2 font-bold">
                                មករា
                            </td>
                            <td className="py-3 px-2">៥</td>
                            <td className="py-3 px-2​​">៥០%</td>
                            <td className="py-3 px-2​">១</td>
                            <td className="py-3 px-2 flex items-center justify-center">
                                <Link href="" title="Detail">
                                    <BiDetail className="w-6 h-6" />
                                </Link>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-3 px-2 font-bold">
                                កុម្ភះ
                            </td>
                            <td className="py-3 px-2">៥</td>
                            <td className="py-3 px-2​​">៥០%</td>
                            <td className="py-3 px-2​">១</td>
                            <td className="py-3 px-2 flex items-center justify-center">
                                <Link href="" title="Detail">
                                    <BiDetail className="w-6 h-6" />
                                </Link>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Table

const Theader = ['ខែ', 'អវត្តមាន', 'ពិន្ទុ', 'ចំណាត់ថ្នាក់', '']