import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
import { Search } from "react-feather";
import RingLoader from "react-spinners/RingLoader";

function BvnSearch() {
  const [showSearchLoading, setShowSearchLoading] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  useEffect(() => {
    if (showSearchLoading) {
      setTimeout(() => {
        console.log(4090);
        setShowSearchLoading(false);
        setShowSearchResults(true);
      }, 3000);
    }
  }, [showSearchLoading]);
  return (
    <>
      <NavBar />
      <main className="p-12">
        <div className="text-center space-y-8">
          <h1 className="text-2xl font-bold">BVN Eligibility Search</h1>
          <p className="text-slate-500">
            Please enter your BVN (Bank Verification Number) to see your credit
            score.
          </p>
          <div className="relative w-4/5 md:max-w-[400px] mx-auto">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 outline-green-500 p-4 pe-12 text-sm shadow-sm"
              placeholder="BVN"
            />
            <button className="absolute bg-green-500 text-white rounded-e-lg inset-y-0 end-0 grid place-content-center px-4">
              <Search
                className=""
                size={20}
                onClick={() => {
                  setShowSearchLoading(true);
                  setShowSearchResults(false);
                }}
              />
            </button>
          </div>
        </div>
        {showSearchLoading && (
          <div className="h-[200px] flex items-center justify-center flex-col">
            <RingLoader color="green" />
            <p className="text-green-500">Please wait...</p>
          </div>
        )}
        {showSearchResults && (
          <div className="h-[200px] flex items-center justify-center flex-col">
            <p>
              Dear [Name], Your credit score is [X] meaning your loan
              eligibility is[X]
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default BvnSearch;
