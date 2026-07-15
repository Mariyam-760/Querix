import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

import AuthLayout from "../../layouts/AuthLayout";
import BrandingPanel from "../../components/auth/BrandingPanel";
import { loginUser } from "../../api/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await loginUser({
        email,
        password,
      });

      // Save JWT Token
      localStorage.setItem(
        "token",
        response.data.access_token
      );

      // Save Logged-in User
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.detail ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="min-h-screen flex">
        {/* Left Panel */}
        <BrandingPanel />

        {/* Right Panel */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-8 py-12">
          <div className="w-full max-w-lg rounded-[32px] border border-white/70 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-10">

            <h2 className="text-3xl font-bold text-slate-900">
              Welcome Back!
            </h2>

            <p className="mt-2 text-slate-500">
              Access your AI-powered business analytics workspace.
            </p>

            <form onSubmit={handleSubmit} className="mt-8">

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 pr-12 outline-none transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-[#4A5FE7] to-[#5C72F2] py-2.5 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing In..." : "Sign In →"}
              </button>

            </form>

            <div className="my-8 flex items-center">
              <div className="flex-1 border-t"></div>
              <span className="px-4 text-sm text-slate-400">OR</span>
              <div className="flex-1 border-t"></div>
            </div>

            <button className="w-full rounded-xl border border-slate-300 bg-white py-2.5 font-medium transition-all duration-300 hover:border-blue-300 hover:bg-blue-50">
              Continue with Google
            </button>

            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-[#4A5FE7] hover:underline"
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