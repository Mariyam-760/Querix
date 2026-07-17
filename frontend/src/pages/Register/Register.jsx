import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthLayout from "../../layouts/AuthLayout";
import BrandingPanel from "../../components/auth/BrandingPanel";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const response = await registerUser({
      full_name: formData.fullName,
      email: formData.email,
      password: formData.password,
    });

    alert(response.data.message);

    navigate("/login");
  } catch (error) {
    alert(
      error.response?.data?.detail ||
      "Registration failed."
    );
  }
};

  return (
    <AuthLayout>
      <div className="min-h-screen flex">
        <BrandingPanel />

        {/* Right Panel */}

        <div className="w-full lg:w-[55%] flex items-center justify-center bg-slate-50 px-6 py-10">
          <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200 shadow-2xl p-10">

            <h2 className="text-3xl font-bold text-slate-900">
              Create Account 🚀
            </h2>

            <p className="mt-2 text-slate-500">
              Create your Querix account to start analyzing business data.
            </p>

            <form
              className="mt-8"
              onSubmit={handleSubmit}
            >
              {/* Full Name */}

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>

              {/* Email */}

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>

              {/* Password */}

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create password"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
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

              {/* Confirm Password */}

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#4A5FE7] py-3 text-white font-semibold hover:bg-[#3d50d6] transition"
              >
                Create Account →
              </button>
            </form>

            <div className="my-8 flex items-center">
              <div className="flex-1 border-t"></div>
              <span className="px-4 text-sm text-slate-400">
                OR
              </span>
              <div className="flex-1 border-t"></div>
            </div>

            <button className="w-full rounded-xl border border-slate-300 py-3 hover:bg-slate-100 transition">
              Continue with Google
            </button>

            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#4A5FE7] hover:underline"
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