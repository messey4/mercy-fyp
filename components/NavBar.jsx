import Link from "next/link";
import { Menu, X } from "react-feather";
import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="py-4 md:py-0 px-4 bg-white w-full flex justify-between items-center shadow-lg">
      <button
        className="p-1.5 md:p-2 md:px-2.5 bg-black border-white text-white border-2 rounded-lg md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      <ul
        className={` absolute bg-white rounded-xl flex-col shadow-slate-500 shadow-xl w-4/5 left-1/2 top-16   transition-transform duration-200 transform -translate-x-1/2 origin-top ${
          menuOpen ? "translate-y-0" : "-translate-y-[150%]"
        } md:translate-y-0 flex md:bg-red md:top-0 md:left-0 md:translate-x-0 md:static md:flex-row md:px-10 md:shadow-none `}
      >
        <li>
          <Link
            className="py-6 px-8 md:px-4 inline-block w-full hover:bg-slate-50 hover:text-black  "
            href={"#"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="py-6 px-8 md:px-4 inline-block w-full hover:bg-slate-50 hover:text-black text-slate-500 "
            href={"#"}
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
            className="py-6 px-8 md:px-4 inline-block w-full hover:bg-slate-50 hover:text-black text-slate-500 "
            href={"/apply-loan"}
          >
            Apply Loan
          </Link>
        </li>
      </ul>
      <div className="flex gap-5">
        <Link href="/sign-up">
          <button className="p-1.5 md:p-2 md:px-2.5 bg-white border-black border-2 rounded-lg hover:bg-black hover:text-white transition-colors">
            Sign Up
          </button>
        </Link>
        <Link href="/sign-in">
          <button className="p-1.5 md:p-2 md:px-2.5 bg-white border-black border-2 rounded-lg hover:bg-black hover:text-white transition-colors">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
