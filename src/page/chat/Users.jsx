import { AiFillMessage } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Users = ({ onClickProfile }) => {
  return (
    <>

      <div className="h-screen w-full">
        <div className="border h-full flex flex-col border-b-2 border-gray-200 bg-gray-800 overflow-y-hidden">
          <div className="inline-flex w-full bg-gray-900 items-center sm:hidden z-20 justify-center">
            <Link to={'/'} title='Back to home'>
              <FaHome className='h-10 w-10 p-1 text-green-500 rounded-lg hover:bg-gray-300 transition duration-500 ease-in-out' />
            </Link>
          </div>
          <h3 className="flex justify-center items-center sm:h-17 h-14 py-2 shadow-sm shadow-slate-500 w-full gap-2 text-lg text-white">
            <AiFillMessage className="text-green-500 text-2xl " />
            <span>Chat with teachers</span>
          </h3>
          <div className="flow-root sm:p-1 mt-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            <ul role="list">
              {
                [...Array(100)].map(i => (
                  <li className="py-3 cursor-pointer hover:shadow hover:px-2">
                    <div className="flex justify-center items-center space-x-4" onClick={onClickProfile}>
                      <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium space-x-1 truncate text-white">
                          <span>Neil Sims</span>
                          <span>•</span>
                          <span className="text-green-300 uppercase text-xs">គ្រូគណិតវិទ្យា</span>
                        </p>
                        <p className="text-sm text-gray-400 truncate">
                          ពេលអាយុ ២០ ឆ្នាំ អ្នកខ្វាយខ្វល់នឹងអ្វីដែល មនុស្សនៅជុំវិញគិតពីអ្នក។ ពេលអាយុ ៤០ ឆ្នាំ អ្នកលែងសូវខ្វល់ពីអ្វីដែលគេគិតពីអ្នក ពេលដល់អាយុ ៦០ ឆ្នាំ ទើបអ្នកដឹងថាគ្មាននរណាម្នាក់ខ្វល់ពីអ្នកតាំងពីអើយមក។
                        </p>
                      </div>
                    </div>
                  </li>
                ))

              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
