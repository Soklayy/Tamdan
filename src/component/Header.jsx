import { RiAccountCircleLine } from "react-icons/ri"
import { IoChatbubbleEllipsesSharp, IoClose, IoMenu, IoTime } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "../constants/Menu";
import { useState } from "react";

const Header = () => {
    const path = useLocation().pathname
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <div className={`fixed top-0 md:-left-full z-20 h-screen w-screen bg-green-500 bg-opacity-25 duration-500 ${openMenu ? 'left-0' : '-left-full'}`}>
                <div className="relative z-20">
                    <nav className="absolute bg-gray-800 w-1/2 h-screen flex flex-col  md:hidden gap-3 py-4 px-5 text-white capitalize">
                        <div className="flex items-center justify-between">
                            <Link to={'/'} className="text-2xl font-sans text-white font-bold uppercase flex">
                                ta<span className="text-green-500 font-sans">md</span>an
                            </Link>
                            <IoClose className="w-8 h-8 md:hidden cursor-pointer text-green-500" onClick={() => setOpenMenu(false)}/>
                        </div>
                        {Menu.map((menu, key) => (
                            <Link
                                to={menu.url}
                                className={`hover:text-green-500 cursor-pointer font-semibold transition-colors duration-300 ${path == menu.url ? 'text-green-500' : 'text-white'}`}
                                key={key}>
                                {menu.title}
                            </Link>
                        ))}

                    </nav>
                </div>
            </div>
            <header className="flex justify-between items-center bg-gray-900 shadow shadow-slate-800 px-10 py-2 lg:px-40 h-16 w-full sticky top-0 z-10">
                <div className="flex items-center gap-2 text-green-500">
                    <IoMenu className="w-8 h-8 md:hidden  cursor-pointer" onClick={() => setOpenMenu(true)} />
                    <Link to={'/'} className="text-2xl font-sans text-white font-bold uppercase flex">
                        ta<span className="text-green-500 font-sans">md</span>an
                    </Link>
                </div>
                <nav className="items-center hidden space-x-8 md:flex text-white capitalize">
                    {Menu.map((menu, key) => (
                        <Link
                            to={menu.url}
                            className={`hover:text-green-500 cursor-pointer font-semibold transition-colors duration-300 ${path == menu.url ? 'text-green-500' : 'text-white'}`}
                            key={key}>
                            {menu.title}
                        </Link>
                    ))}

                </nav>
                <div className="flex gap-5 items-center  text-white">
                    <RiAccountCircleLine className="w-8 h-8 cursor-pointer" />
                    <div className="relative w-8 h-8">
                        <div className="absolute -top-2 -right-2">
                            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">3</p>
                        </div>
                        <IoChatbubbleEllipsesSharp className="w-8 h-8 text-green-500 " />
                    </div>

                </div>
            </header>
        </>
    );
}

export default Header;