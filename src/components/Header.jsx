import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import logo from "../images/logo.jpg"
function Header({ query, setQuery }) {
    const [search, setSearch] = useState(false)
    return (
        <div className="flex flex-col md:flex-row md:justify-center items-center relative px-2.5 h-40 overflow-hidden">
            <div className="-my-16 md:my-0">
                <img src={logo} alt="" className="h-60"/>
            </div>
            <div className="ml-auto md:absolute md:top-1/2 md:-translate-y-1/2 md:right-5">
                <div className="flex justify-center items-center relative">
                    <div className="absolute right-8 w-48">
                        <input
                            type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                            className={`text-sm bg-zinc-100 outline-none rounded-md py-1.5 pl-1 pr-3 ${!search ? "w-0 translate-x-52" : "w-full translate-x-0"} duration-1000 transition-all`}
                        />
                    </div>
                    <button onClick={() => setSearch(prev => !prev)} className="bg-zinc-200 rounded-full p-2.5 z-10">
                        <FaSearch size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header