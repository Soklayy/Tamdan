import { Link } from 'react-router-dom'
import bg from '../../assets/bg.png'

const Information = () => {
    return (
        <div className="group flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
            <div className="">
                <div className="text-center p-5 flex-auto justify-center">
                    <img src={bg} alt="bg" className='group-hover:scale-110 duration-300 ease-in transform' />
                    {/* <h2 className="text-xl font-bold py-4 text-gray-200">លោកគ្រូ​អ្នកគ្រូទាំងអស់</h2> */}
                    <p className="text-sm​ text-white px-8">
                        ចុចលើប៊ូតុងខាងក្រោមដើម្បីមើលព័ត៌មានលំអិតនៃកាសិក្សារបស់កូនលោកអ្នកក្នុងឆ្នាំសិក្សា ២០២៣-២០២៤
                    </p>
                </div>
                <div className="p-3  mt-2 text-center space-x-4 md:block">
                    <Link to={'/summary'} className="bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                        ព័ត៌មានលំអិត
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Information