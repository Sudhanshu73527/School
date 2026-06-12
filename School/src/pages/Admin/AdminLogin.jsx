import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://school-backend-o5im.onrender.com/api/admin/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      navigate("/admin-dashboard");
    } catch (error) {
      alert("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-emerald-500 px-4">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-green-900 text-white p-10">
          <div className="bg-white/20 p-5 rounded-full mb-6">
            <ShieldCheck size={60} />
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Admin Portal
          </h2>

          <p className="text-center text-green-100 leading-7">
            Welcome to School Management System.
            Securely access your dashboard,
            manage students, teachers and school activities.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mt-2">
              Login to your admin account
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="admin@gmail.com"
                className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="absolute right-4 top-4 text-gray-500"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <button
                type="button"
                className="text-green-700 font-medium"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-800 hover:bg-green-900 transition text-white py-3 rounded-xl font-semibold shadow-lg"
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;