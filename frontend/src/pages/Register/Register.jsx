import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthLayout from "../../layouts/AuthLayout";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Backend registration will be added later.
  };

  return (
    <AuthLayout>
      <div className="min-h-screen flex">

        {/* Left Section */}

        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white items-center justify-center p-16">

          <div className="max-w-md">

            <h1 className="text-5xl font-bold mb-6">
              Join Querix
            </h1>

            <p className="text-xl leading-8 text-blue-100">
              Build smarter business decisions using AI-powered analytics.
            </p>

            <div className="mt-12 space-y-5 text-lg">
              <p>✔ Natural Language to SQL</p>
              <p>✔ Interactive Dashboards</p>
              <p>✔ AI Business Insights</p>
              <p>✔ Download Reports</p>
            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex w-full lg:w-1/2 items-center justify-center bg-slate-50 p-8">

          <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

            <h2 className="text-3xl font-bold text-slate-800">
              Create Account
            </h2>

            <p className="mt-2 text-slate-500">
              Create your Querix account
            </p>

            <form className="mt-8" onSubmit={handleSubmit}>

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create password"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>

                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Confirm Password
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition"
              >
                Create Account
              </button>

            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 hover:underline"
              >
                Sign In
              </Link>
            </p>

          </div>

        </div>

      </div>
    </AuthLayout>
  );
};

export default Register;