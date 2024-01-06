import { RiAccountCircleLine } from "react-icons/ri"
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "../constants/Menu";

const Header = () => {
    const path = useLocation().pathname
    return (
        <header className="flex justify-between items-center bg-gray-900 shadow shadow-slate-800 px-10 py-2 md:px-40 h-16 w-full sticky top-0 z-10">
            <Link to={'/'} className="text-2xl font-sans text-white font-bold uppercase flex">
                ta<span className="text-green-500 font-sans">md</span>an
            </Link>
            <nav className="items-center hidden space-x-8 lg:flex text-white capitalize">
                {Menu.map((menu, key) => (
                    <Link
                        to={menu.url}
                        className={`flex  hover:text-green-500 cursor-pointer font-semibold transition-colors duration-300 ${path == menu.url ? 'text-green-500' : 'text-white'}`}
                        key={key}>
                        {menu.title}
                    </Link>
                ))}

            </nav>

            <div className="flex gap-5 items-center text-white">
                <RiAccountCircleLine className="w-8 h-8 cursor-pointer" />
                <div className="relative w-8 h-8">
                    <div className="absolute -top-2 -right-2">
                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">3</p>
                    </div>
                    <IoChatbubbleEllipsesSharp className="w-8 h-8 text-green-500 " />
                </div>

            </div>
        </header>
    );
}

export default Header;