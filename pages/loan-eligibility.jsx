import NavBar from "@/components/NavBar";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Search, Send } from "react-feather";
import RingLoader from "react-spinners/RingLoader";
import { toast } from "react-toastify";
import { checkEligbility, verifyKYC } from "@/api/requests";
import Meta from "@/components/Meta";
import useGetProfile from "@/hooks/requests/useGetProfile";
import Link from "next/link";

function BvnSearch() {
  const [showSearchLoading, setShowSearchLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [showEligiblityResult, setShowEligiblityResult] = useState(false);
  const [showLoanElibilityForm, setShowLoanEligibilityForm] = useState();
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [bvnResults, setBvnResults] = useState(null);
  const { profile, mutateProfile } = useGetProfile();

  useEffect(() => {
    if (profile?.identityVerificationStatus == "approved") {
      setShowLoanEligibilityForm(true);
    }
  }, [profile]);

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    register,
  } = useForm();
  const {
    handleSubmit: handleLoanFormSubmission,
    formState: { errors: loanErrors, isSubmitting: loanFormSubmitting },
    register: registerLoanFormField,
  } = useForm();

  const submitForm = async (data) => {
    setIsLoading(true);
    try {
      const { data: kycResponse } = await verifyKYC(data);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      toast.success("KYC verification successful");
      setIsLoading(false);
      mutateProfile();
      reset();
    }
  };
  const nonNumericRegex = /\D/;

  useEffect(() => {
    if (showSearchLoading) {
      setTimeout(() => {
        console.log(4090);
        setShowSearchLoading(false);
        setShowSearchResults(true);
      }, 3000);
    }
  }, [showSearchLoading]);

  const submitLoanForm = async (data) => {
    setShowEligiblityResult(false);
    setIsLoading(true);
    await setTimeout(() => {
      if (data.requestedAmount > 50000) {
        setIsEligible(false);
      } else setIsEligible(true);
      setShowEligiblityResult(true);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <Meta />
      <NavBar />
      <main className="p-12">
        <div className="text-center space-y-8">
          <h1 className="text-2xl font-bold">Loan Eligbility</h1>

          {showLoanElibilityForm ? (
            <form
              action="#"
              onSubmit={handleLoanFormSubmission(submitLoanForm)}
              className="relative w-4/5 md:max-w-[400px] mx-auto space-y-3"
            >
              <p className="text-slate-500">
                Enter the amount you&rsquo;d like to check your loan eligibility
                for
              </p>
              <div className="relative">
                <input
                  type="text"
                  className={`w-full rounded-lg border-gray-200 ${
                    loanErrors.requestedAmount?.message
                      ? "outline-red-500 border border-red-500"
                      : "outline-green-500"
                  } p-4 pe-12 text-sm shadow-sm`}
                  maxlength="11"
                  {...registerLoanFormField("requestedAmount", {
                    setValueAs: (value) => parseFloat(value),
                    required: "Amount is required",
                  })}
                  placeholder="200000"
                />
                <button
                  type="submit"
                  className="absolute bg-green-500 text-white rounded-e-lg inset-y-0 end-0 grid place-content-center px-4"
                  disabled={loanFormSubmitting}
                >
                  <Send
                    className=""
                    size={20}
                    // onClick={() => {
                    //   setShowSearchLoading(true);
                    //   setShowSearchResults(false);
                    // }}
                  />
                </button>
              </div>
              <p className="text-red-500 text-small text-start">
                {loanErrors.requestedAmount?.message}
              </p>
            </form>
          ) : (
            <form
              action="#"
              onSubmit={handleSubmit(submitForm)}
              className="relative w-4/5 md:max-w-[400px] mx-auto space-y-3"
            >
              <p className="text-slate-500">
                Please enter your BVN below for your KYC verification.
              </p>
              <div className="relative">
                <input
                  type="text"
                  className={`w-full rounded-lg border-gray-200 ${
                    errors.bvn?.message
                      ? "outline-red-500 border border-red-500"
                      : "outline-green-500"
                  } p-4 pe-12 text-sm shadow-sm`}
                  maxlength="11"
                  {...register("number", {
                    onChange: (e) => {
                      e.target.value = e.target.value.replace(
                        nonNumericRegex,
                        ""
                      );
                    },
                    validate: (value) =>
                      value.length == 11 ||
                      "BVN must be exactly 11 characters long",
                  })}
                  placeholder="BVN"
                />
                <button
                  type="submit"
                  className="absolute bg-green-500 text-white rounded-e-lg inset-y-0 end-0 grid place-content-center px-4"
                  disabled={isSubmitting}
                >
                  <Search
                    className=""
                    size={20}
                    // onClick={() => {
                    //   setShowSearchLoading(true);
                    //   setShowSearchResults(false);
                    // }}
                  />
                </button>
              </div>
              <p className="text-red-500 text-small text-start">
                {errors.number?.message}
              </p>
            </form>
          )}
        </div>
        {isLoading && (
          <div className="h-[200px] flex items-center justify-center flex-col">
            <RingLoader color="green" />
            <p className="text-green-500">Please wait...</p>
          </div>
        )}
        {showEligiblityResult && (
          <div className="max-w-md mx-auto text-center">
            {!isEligible ? (
              <>
                You are not eligible for a loan that high from a traditional
                bank due to your low credit score. To apply for this loan
                through us please visit our{" "}
                <Link href="/apply-loan">
                  <button className="bg-green-500 text-white py-1 px-3 rounded-xl">
                    Apply Loan
                  </button>{" "}
                  page.
                </Link>
              </>
            ) : (
              <>
                You are eligible for the loan amount you requested for from most
                traditional banks.
              </>
            )}
          </div>
        )}
      </main>
    </>
  );
}

export default BvnSearch;
