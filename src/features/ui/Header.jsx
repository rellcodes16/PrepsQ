import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="w-full">
        <div>
            <Link className="bg-stone-700 px-4 py-3 pl-40 uppercase border-b border-stone-200 text-slate-200 font-bold text-2xl sm:px-6 flex items-center ">PrepsQ</Link>

        </div>
    </header>
  )
}

export default Header