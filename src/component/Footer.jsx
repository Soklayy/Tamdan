import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="max-w-3xl mx-auto mt-5 mb-5">
            <footer className="rounded-lg shadow md:px-6 dark:bg-gray-800">
                <a href="#" target="_blank" className="flex font-sans text-white justify-center uppercase text-base font-bold items-center sm:mb-0">
                    ta<span className="text-green-500 font-sans">md</span>an
                </a>
                <span className="block text-sm text-gray-500 sm:text-center py-1 border-t dark:text-gray-400">
                    © 2023
                    <a href="#" className="hover:underline">
                        Tamdan education
                    </a>
                    . All Rights Reserved.
                </span>
            </footer>
        </div>
    );
}

export default Footer;