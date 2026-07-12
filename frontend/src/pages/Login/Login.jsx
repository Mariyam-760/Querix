import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // Backend authentication will be added later.
  };

  return (
    <AuthLayout>
      <div className="min-h-screen flex">
        {/* Left Branding Section */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white items-center justify-center p-16">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-6">
              Querix
            </h1>

            <p className="text-xl leading-8 text-blue-100">
              AI-Powered Natural Language to SQL Business Analytics Platform
            </p>

            <div className="mt-12 space-y-5 text-lg">
              <p>✔ Convert Natural Language into SQL</p>
              <p>✔ Visualize Business Data Instantly</p>
              <p>✔ AI Generated Business Insights</p>
              <p>✔ Download Reports (PDF / Excel / CSV)</p>
            </div>
          </div>
        </div>

        {/* Right Login Section */}
        <div className="flex w-full lg:w-1/2 items-center justify-center bg-slate-50 p-8">
          <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

            <h2 className="text-3xl font-bold text-slate-800">
              Welcome Back 👋
            </h2>

            <p className="mt-2 text-slate-500">
              Sign in to continue to Querix
            </p>

            <form
              className="mt-8"
              onSubmit={handleSubmit}
            >
              {/* Email */}

              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Password */}

              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>

                </div>
              </div>

              {/* Remember Me */}

              <div className="mb-6 flex items-center justify-between">

                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded"
                  />
                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
              >
                Sign In
              </button>

            </form>

            {/* Register */}

            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-blue-600 hover:underline"
              >
                Create Account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;