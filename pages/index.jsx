import NavBar from "@/components/NavBar";
import Link from "next/link";

function index() {
  return (
    <div>
      <NavBar />
      <div className=" w-full bg-[url('/images/home-page-bg.jpg')] bg-cover bg-[100%] xl:bg-[0%]">
        <div className="w-full min-h-[500px] md:min-h-[600px] flex items-end p-8 px-12">
          <div className="pb-12 text-white lg:w-2/3 space-y-5">
            <h1 className="text-green-500 text-2xl md:text-[2.5rem] font-bold ">
              PROMOTING FINANCIAL INCLUSION
            </h1>
            <p className="md:text-[1.5rem] font-bold">
              The key enabler to reduce extreme poverty and boost shared
              prosperity.
            </p>
            <Link href="/sign-up" className=" inline-block">
              <button className="text-white rounded-3xl md:px-6 p-3 text-sm md:text-base bg-green-500">
                Sign Up For Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
