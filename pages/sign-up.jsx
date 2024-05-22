import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signUp } from "@/api/requests";
import { Eye, EyeOff, Mail } from "react-feather";
import { useState } from "react";
import { ClipLoader, RingLoader } from "react-spinners";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitData = async (data) => {
    try {
      const { data: res } = await signUp(data);
      toast.success("Account created successfully");
      Cookies.set("accessToken", res.token, { expires: 90 });
      const queryParams = router.query;
      const {
        data: { user },
      } = res;
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = queryParams?.cb || "/";
    } catch (error) {
      toast.error(
        error?.data?.error ||
          error?.message ||
          "Something went wrong, please try again later."
      );
      console.error(error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Sign Up!</h1>
          <p className="mt-4 text-gray-500">
            Already have an account?{" "}
            <Link className="text-purple-500 underline" href={"/sign-in"}>
              Sign In{" "}
            </Link>
          </p>
        </div>
        {/* Form starts here */}
        <form
          action="#"
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          onSubmit={handleSubmit(submitData)}
        >
          <div className="flex gap-3">
            <div>
              <label>First Name</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="John"
                  {...register("firstname", {
                    required: "First name is required",
                  })}
                />
              </div>
              <p className="text-red-500 text-sm text-start">
                {errors.firstname?.message}
              </p>
            </div>
            <div>
              <label>Last Name</label>
              <div className="relative">
                <input
                  {...register("lastname", {
                    required: "Last name is required",
                  })}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Doe"
                />
              </div>
              <p className="text-red-500 text-sm text-start">
                {errors.lastName?.message}
              </p>
            </div>
          </div>
          <div>
            <label>Email</label>
            <div className="relative">
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <Mail className="text-slate-400" size={18} />
              </span>
            </div>
            <p className="text-red-500 text-sm text-start">
              {errors.email?.message}
            </p>
          </div>
          <div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute inset-y-0 end-0 grid place-content-center px-4"
                >
                  {showPassword ? (
                    <EyeOff className="text-slate-400" size={18} />
                  ) : (
                    <Eye className="text-slate-400" size={18} />
                  )}
                </button>
              </div>
            </div>
            <p className="text-red-500 text-sm text-start">
              {errors.password?.message}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={`rounded-lg bg-green-500 px-5 py-3 text-sm font-medium text-white 
              w-full flex gap-2 items-center justify-center ${
                isSubmitting ? "hover:cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              Sign Up
              {isSubmitting && (
                <span>
                  <ClipLoader color="white" size={15} />
                </span>
              )}
            </button>
          </div>
        </form>
        {/* Form Ends here */}
      </div>
    </>
  );
}
