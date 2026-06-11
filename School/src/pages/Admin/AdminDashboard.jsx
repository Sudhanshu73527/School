import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-72 bg-green-800 text-white p-6 shadow-xl">
        <h2 className="text-3xl font-bold mb-10 border-b border-green-700 pb-4">
          Admin Panel
        </h2>

        <ul className="space-y-3">
          <li>
            <button
              onClick={() => setActiveMenu("dashboard")}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                activeMenu === "dashboard"
                  ? "bg-white text-green-800 font-semibold"
                  : "hover:bg-green-700"
              }`}
            >
              📊 Dashboard
            </button>
          </li>

<Link to={"/admin-notice"}>
          <li>
            <button
              onClick={() => setActiveMenu("notice")}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                activeMenu === "notice"
                  ? "bg-white text-green-800 font-semibold"
                  : "hover:bg-green-700"
              }`}
            >
              📢 Notice Management
            </button>
          </li>
          </Link>

<Link to={"/admin/events"}>
          <li>
            <button
              onClick={() => setActiveMenu("gallery")}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                activeMenu === "gallery"
                  ? "bg-white text-green-800 font-semibold"
                  : "hover:bg-green-700"
              }`}
            >
              🖼️ Event Management
            </button>
          </li>
          </Link>

<Link to={"/admin/admission"}>
          <li>
            <button
              onClick={() => setActiveMenu("infrastructure")}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                activeMenu === "infrastructure"
                  ? "bg-white text-green-800 font-semibold"
                  : "hover:bg-green-700"
              }`}
            >
              🏫 Admission
            </button>
          </li>
          </Link>

          <Link to={"/admin/gallery"}>
          <li>
            <button
              onClick={() => setActiveMenu("infrastructure")}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                activeMenu === "infrastructure"
                  ? "bg-white text-green-800 font-semibold"
                  : "hover:bg-green-700"
              }`}
            >
             🏫 Gallary
            </button>
          </li>
          </Link>  


           <Link to={"/admin/homework"}>
          <li>
            <button
              onClick={() => setActiveMenu("infrastructure")}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                activeMenu === "infrastructure"
                  ? "bg-white text-green-800 font-semibold"
                  : "hover:bg-green-700"
              }`}
            >
             🏫 Home Work
            </button>
          </li>
          </Link>  


          <li>
            <button
              onClick={() => setActiveMenu("settings")}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                activeMenu === "settings"
                  ? "bg-white text-green-800 font-semibold"
                  : "hover:bg-green-700"
              }`}
            >
              ⚙️ Settings
            </button>
          </li>

          <li className="pt-6">
            <button className="w-full text-left px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition">
              🚪 Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8">
        {activeMenu === "dashboard" && (
          <>
            <h1 className="text-4xl font-bold text-green-700 mb-8">
              Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-gray-500 font-medium">
                  Total Notices
                </h3>
                <p className="text-4xl font-bold text-green-700 mt-2">
                  12
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-gray-500 font-medium">
                  Gallery Images
                </h3>
                <p className="text-4xl font-bold text-green-700 mt-2">
                  48
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-gray-500 font-medium">
                  Infrastructure
                </h3>
                <p className="text-4xl font-bold text-green-700 mt-2">
                  8
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                Welcome Back Admin 👋
              </h2>
              <p className="text-gray-600">
                Manage notices, gallery, infrastructure and website settings
                using the sidebar menu.
              </p>
            </div>
          </>
        )}

        {activeMenu === "notice" && (
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-green-700">
              📢 Notice Management
            </h2>
          </div>
        )}

        {activeMenu === "gallery" && (
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-green-700">
              🖼️ Gallery Management
            </h2>
          </div>
        )}

        {activeMenu === "infrastructure" && (
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-green-700">
              🏫 Infrastructure
            </h2>
          </div>
        )}

        {activeMenu === "settings" && (
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-green-700">
              ⚙️ Settings
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;