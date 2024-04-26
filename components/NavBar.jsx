import Link from "next/link";
import { Menu, X } from "react-feather";
import { useState } from "react";
import { useRouter } from "next/router";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router =useRouter()
  
  return (
    <nav className="py-4 md:py-0 px-4 bg-white w-full flex justify-between items-center shadow-lg">
      <button
        className="p-1.5 md:p-2 md:px-2.5 bg-black border-white text-white border-2 rounded-lg md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      <ul
        className={` z-50 absolute bg-white rounded-xl flex-col shadow-slate-500 shadow-xl w-4/5 left-1/2 top-16   transition-transform duration-200 transform -translate-x-1/2 origin-top ${
          menuOpen ? "translate-y-0" : "-translate-y-[150%]"
        } md:translate-y-0 flex md:bg-red md:top-0 md:left-0 md:translate-x-0 md:static md:flex-row md:px-10 md:shadow-none `}
      >
        <li>
          <Link
            className={`py-6 px-8 md:px-4 inline-block w-full hover:bg-slate-50 hover:text-black ${
              router.pathname == "/" ? "text-black font-bold" : ""
            } `}
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`py-6 px-8 md:px-4 inline-block w-full hover:bg-slate-50 hover:text-black text-slate-500 ${
              router.pathname == "/bvn-search" ? "text-black font-bold" : ""
            } `}
            href={"/bvn-search"}
          >
            BVN Search
          </Link>
        </li>
        <li>
          <Link
            className="py-6 px-8 md:px-4 inline-block w-full hover:bg-slate-50 hover:text-black text-slate-500 "
            href={"#"}
          >
            FI Bot
          </Link>
        </li>
        <li>
          <Link
            className={`py-6 px-8 md:px-4 inline-block w-full hover:bg-slate-50 hover:text-black text-slate-500 ${
              router.pathname == "/apply-loan" ? "text-black font-bold" : ""
            } `}
            href={"/apply-loan"}
          >
            Apply Loan
          </Link>
        </li>
      </ul>
      <div className="flex gap-5">
        <Link href="/sign-in">
          <button className="p-1.5 md:p-2 md:px-2.5 bg-white  rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-100">
            Sign In
          </button>
        </Link>
        <Link href="/sign-up">
          <button className="p-1.5 md:p-2 md:px-2.5 bg-white border-black border-2 rounded-lg hover:bg-black hover:text-white hover:border-none transition-all duration-100">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
