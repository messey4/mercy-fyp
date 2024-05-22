import Meta from "@/components/Meta";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function ApplyLoan({ states }) {
  const [formIndex, setFormIndex] = useState(1);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  useEffect(() => {
    formIndex == 6
      ? setTimeout(() => {
          setShowSubmitButton(true);
        }, 0)
      : setShowSubmitButton(false);
  }, [formIndex]);

  return (
    <>
      <Meta />
      <main className="text-gray-800">
        <div className="grid md:grid-cols-2 min-h-screen">
          <div className="bg-[url('/images/apply-for-loan-bg.jpeg')] hidden md:block bg-cover"></div>

          <div className="p-8 px- space-y-5">
            <h1 className="text-center text-[2rem] font-bold">
              Loan Application
            </h1>
            <form action="#" className="space-y-5">
              <div className="flex justify-center gap-3">
                <div
                  className={`p-1.5 rounded-full transition-colors duration-100 ${
                    formIndex == 1 ? "bg-green-500" : "bg-slate-500"
                  }`}
                />
                <div
                  className={`p-1.5 rounded-full transition-colors duration-100 ${
                    formIndex == 2 ? "bg-green-500" : "bg-slate-500"
                  }`}
                />
                <div
                  className={`p-1.5 rounded-full transition-colors duration-100 ${
                    formIndex == 3 ? "bg-green-500" : "bg-slate-500"
                  }`}
                />
                <div
                  className={`p-1.5 rounded-full transition-colors duration-100 ${
                    formIndex == 4 ? "bg-green-500" : "bg-slate-500"
                  }`}
                />
                <div
                  className={`p-1.5 rounded-full transition-colors duration-100 ${
                    formIndex == 5 ? "bg-green-500" : "bg-slate-500"
                  }`}
                />
                <div
                  className={`p-1.5 rounded-full transition-colors duration-100 ${
                    formIndex == 6 ? "bg-green-500" : "bg-slate-500"
                  }`}
                />
              </div>

              <div className="sm:grid sm:grid-cols-2 sm:gap-5 space-y-3 sm:space-y-0">
                {(() => {
                  switch (formIndex) {
                    case 1:
                      return (
                        <>
                          <p className="font-bold uppercase text-sm col-span-2">
                            Step 1 of 3 (Personal Details)
                          </p>
                          <div>
                            <label htmlFor="email">First Name</label>
                            <div className="relative">
                              <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="John"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="email">Last Name</label>
                            <div className="relative">
                              <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Doe"
                              />
                            </div>
                          </div>
                          <div className="">
                            <label htmlFor="email">Date Of Birth</label>
                            <div className="relative">
                              <input
                                type="date"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              />
                            </div>
                          </div>
                          <div className="">
                            <label htmlFor="email">Phone Number</label>
                            <div className="relative">
                              <input
                                type="phone"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="090 000 000 00"
                              />
                            </div>
                          </div>
                          <div className="col-span-2">
                            <label>Email Address</label>
                            <div className="relative">
                              <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                              />
                              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="size-4 text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div>
                            <label htmlFor="email">Gender</label>
                            <div className="relative">
                              <select
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label htmlFor="email">NIN</label>
                            <div className="relative">
                              <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="090000000"
                              />
                            </div>
                          </div>
                        </>
                      );
                    case 2:
                      return (
                        <>
                          <p className="font-bold uppercase text-sm col-span-2">
                            Step 2 of 3 (Address)
                          </p>
                          <div>
                            <label htmlFor="email">State</label>
                            <div className="relative">
                              <select
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="John"
                              >
                                <option value={"abuja"}>Abuja</option>
                                {states?.map((state, index) => (
                                  <option value={state?.id} key={index}>
                                    {state?.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label htmlFor="email">City</label>
                            <div className="relative">
                              <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              />
                            </div>
                          </div>
                          <div className="">
                            <label htmlFor="email">Street</label>
                            <div className="relative">
                              <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              />
                            </div>
                          </div>
                          <div className="">
                            <label htmlFor="email">Zip Code</label>
                            <div className="relative">
                              <input
                                type="phone"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="090 000 000 00"
                              />
                            </div>
                          </div>
                        </>
                      );
                    case 3:
                      return (
                        <>
                          <p className="font-bold uppercase text-sm col-span-2">
                            Step 3 of 3 (Education Status)
                          </p>
                          <div>
                            <label htmlFor="email">Level Of Education</label>
                            <div className="relative">
                              <select className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">
                                <option value="none">None</option>
                                <option value="secondary">Secondary</option>
                                <option value="undergraduate">
                                  Undergraduate
                                </option>
                                <option value="postgraduate">
                                  Postgraduate
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="">
                            <label htmlFor="email">School Name</label>
                            <div className="relative">
                              <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Veritas University"
                              />
                            </div>
                          </div>
                          <div className="col-span-2">
                            <label>Upload School Certificate</label>
                            <div className="relative">
                              <input
                                type="file"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                              />
                            </div>
                          </div>
                        </>
                      );
                    case 4:
                      return (
                        <>
                          <p className="font-bold uppercase text-sm col-span-2">
                            Step 4 of 7 (Guarantor Information)
                          </p>
                          <div>
                            <label htmlFor="email">Guarantor BVN</label>
                            <input
                              type="number"
                              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              placeholder="Veritas University"
                            />
                          </div>
                          <div>
                            <label htmlFor="email">Guarantor NIN</label>
                            <input
                              type="number"
                              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              placeholder="Veritas University"
                            />
                          </div>
                        </>
                      );
                    case 5:
                      return (
                        <>
                          <p className="font-bold uppercase text-sm col-span-2">
                            Step 5 of 7 (Business and Colateral Info)
                          </p>
                          <div>
                            <label htmlFor="email">Vehicle Documentation</label>
                            <div className="relative">
                              <input
                                type="file"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="email">
                              Property Documentation
                            </label>
                            <div className="relative">
                              <input
                                type="file"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="email">
                              Investment Portfolio Documentation
                            </label>
                            <div className="relative">
                              <input
                                type="file"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="email">
                              Proof of Ownership: For land, farms, business
                              equipment etc
                            </label>
                            <div className="relative">
                              <input
                                type="file"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              />
                            </div>
                          </div>
                        </>
                      );
                    case 6:
                      return (
                        <>
                          <p className="font-bold uppercase text-sm col-span-2">
                            Step 6 of 7 ( Business License or Registration)
                          </p>
                          <div>
                            <label htmlFor="email"> Cash Flow statement</label>
                            <div className="relative">
                              <input
                                type="file"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                              />
                            </div>
                          </div>
                        </>
                      );
                    case 7:
                      return (
                        <>
                          <div className="flex flex-col gap-4 items-center text-center  col-span-2">
                            <Image
                              alt="success image"
                              src="/images/successful-loan-illustration.png"
                              height={500}
                              width={500}
                            />

                            <p className="text-green-500 text-center">
                              Loan Application has been sent successfully.
                            </p>
                            <small>
                              We will review your request and get back to you
                              shortly.
                            </small>
                            <Link
                              href="/"
                              className="inline-block py-1 px-3 rounded-xl bg-green-400 text-white"
                            >
                              Go Home
                            </Link>
                          </div>
                        </>
                      );
                  }
                })()}
              </div>
              {formIndex != 7 && (
                <div className="flex justify-end gap-5">
                  {formIndex > 1 && (
                    <button
                      className="text-white rounded-lg px-6 p-2 bg-red-500"
                      type="button"
                      onClick={() => {
                        if (formIndex > 1) {
                          setFormIndex((prev) => prev - 1);
                        }
                      }}
                    >
                      Back
                    </button>
                  )}
                  <button
                    className="text-white rounded-lg px-6 p-2 bg-green-500"
                    type="button"
                    onClick={() => {
                      if (formIndex < 7) {
                        setFormIndex((prev) => prev + 1);
                      }
                    }}
                  >
                    {formIndex == 6 ? "Submit" : "Next"}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default ApplyLoan;

export async function getStaticProps() {
  try {
    const { data } = await axios("https://api.facts.ng/v1/states");
    return { props: { states: data } };
  } catch (error) {
    console.log(error);
    return { props: { states: [] } };
  }
}
