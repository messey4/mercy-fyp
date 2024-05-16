import Link from "next/link";
import Cookies from "js-cookie";
import { Menu, X } from "react-feather";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "@/api/requests";
import { toast } from "react-toastify";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignOutBtn, setshowSignOutBtn] = useState(false);
  const accessToken = Cookies.get("accessToken");
  useEffect(() => {
    Cookies.get("accessToken")
      ? setshowSignOutBtn(true)
      : setshowSignOutBtn(false);
  }, [accessToken]);
  const router = useRouter();

  const handleLogOut = async () => {
    const toastId = toast.loading("Please wait");
    try {
      const res = await signOut();
      toast.update(toastId, {
        type: "warning",
        render: "Log out successfull",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (error) {
      console.error(error);
    } finally {
      const cookieJar = Cookies.get(); // Get all existing cookies
      for (const cookieName in cookieJar) {
        // Remove each cookie one by one
        cookieName !== "theme" ? Cookies.remove(cookieName) : null;
      }
      window.location.href = "/";
    }
  };

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
              router.pathname == "/" ? "text-black font-bold" : "text-slate-500"
            } `}
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`py-6 px-8 md:px-4 inline-block w-full hover:bg-slate-50 hover:text-black  ${
              router.pathname == "/bvn-search"
                ? "text-black font-bold"
                : "text-slate-500"
            } `}
            href={"/bvn-search"}
          >
            BVN Search
          </Link>
        </li>
        <li>
          <Link
            className={`py-6 px-8 md:px-4 inline-block w-full hover:bg-slate-50 hover:text-black text-slate-500 ${
              router.pathname == "/fi-bot"
                ? "text-black font-bold"
                : "text-slate-500"
            } `}
            href={"/fi-bot"}
          >
            FI Bot
          </Link>
        </li>
        <li>
          <Link
            className={`py-6 px-8 md:px-4 inline-block w-full hover:bg-slate-50 hover:text-black text-slate-500 ${
              router.pathname == "/apply-loan"
                ? "text-black font-bold"
                : "text-slate-500"
            } `}
            href={"/apply-loan"}
          >
            Apply Loan
          </Link>
        </li>
      </ul>
      <div className="flex gap-5">
        {!showSignOutBtn ? (
          <>
            <Link href={`/sign-in?cb=${router.pathname}`}>
              <button className="p-1.5 md:p-2 md:px-2.5 bg-white  rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-100">
                Sign In
              </button>
            </Link>
            <Link href={`/sign-up?cb=${router.pathname}`}>
              <button className="p-1.5 md:p-2 md:px-2.5 bg-white border-black border-2 rounded-lg hover:bg-black hover:text-white hover:border-none transition-all duration-100">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <button
            className="p-1.5 md:p-2 md:px-2.5 bg-white border-black border-2 rounded-lg hover:bg-black hover:text-white hover:border-none transition-all duration-100"
            onClick={handleLogOut}
          >
            Sign Out
          </button>
        )}{" "}
      </div>
    </nav>
  );
}

export default NavBar;
