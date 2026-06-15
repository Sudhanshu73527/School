import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  Bell,
  Image,
  BookOpen,
  GraduationCap,
  CalendarDays,
  Settings,
  LogOut,
  Plus,
} from "lucide-react";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      title: "Notice",
      icon: Bell,
      path: "/admin-notice",
    },
    {
      title: "Events",
      icon: CalendarDays,
      path: "/admin/events",
    },
    {
      title: "Admission",
      icon: GraduationCap,
      path: "/admin/admission",
    },
    {
      title: "Gallery",
      icon: Image,
      path: "/admin/gallery",
    },
    {
      title: "Homework",
      icon: BookOpen,
      path: "/admin/homework",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static z-50
        h-screen w-72
        bg-[#020617]
        border-r border-slate-800
        transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >
        <div className="h-20 border-b border-slate-800 flex items-center justify-between px-6">
          <h2 className="font-bold text-2xl">
            Admin Panel
          </h2>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X />
          </button>
        </div>

        <div className="p-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link key={index} to={item.path}>
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-800 transition mb-2">
                  <Icon size={20} />
                  <span>{item.title}</span>
                </div>
              </Link>
            );
          })}
<Link to={"/admin-login"}>
          <button className="w-full mt-10 bg-red-500 hover:bg-red-600 rounded-2xl px-4 py-3 flex items-center gap-3 transition">
            <LogOut size={20} />
            Logout
          </button>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1">
        {/* Header */}
        <header className="h-20 border-b border-slate-800 bg-[#0F172A]/90 backdrop-blur-lg px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu />
            </button>

            <div>
              <h1 className="text-2xl font-bold">
                Dashboard
              </h1>

              <p className="text-slate-400 text-sm">
                Manage your school website
              </p>
            </div>
          </div>

          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center font-bold">
            A
          </div>
        </header>

        <div className="p-6 lg:p-8">
          {/* Welcome Card */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="text-white/80 mt-2">
              Manage notices, events, gallery, homework and admissions from one place.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
            {[
              "Notices",
              "Events",
              "Admissions",
              "Gallery",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-indigo-500 transition"
              >
                <p className="text-slate-400 text-sm">
                  {item}
                </p>

                <h3 className="text-4xl font-bold mt-3">
                  --
                </h3>

                <p className="text-slate-500 text-sm mt-2">
                  Connect API to display data
                </p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/admin-notice">
                <button className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500 transition">
                  <Plus className="mx-auto mb-2" />
                  Notice
                </button>
              </Link>

              <Link to="/admin/events">
                <button className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500 transition">
                  <Plus className="mx-auto mb-2" />
                  Event
                </button>
              </Link>

              <Link to="/admin/gallery">
                <button className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500 transition">
                  <Plus className="mx-auto mb-2" />
                  Gallery
                </button>
              </Link>

              <Link to="/admin/homework">
                <button className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500 transition">
                  <Plus className="mx-auto mb-2" />
                  Homework
                </button>
              </Link>
            </div>
          </div>

          {/* Activity Section */}
          <div className="mt-8 bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-xl font-semibold mb-4">
              Recent Activity
            </h2>

            <div className="text-center py-12">
              <p className="text-slate-400">
                No recent activity found.
              </p>

              <p className="text-slate-600 text-sm mt-2">
                Activities will appear here automatically.
              </p>
            </div>
          </div>

          {/* System Info */}
          <div className="mt-8 bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-xl font-semibold mb-4">
              System Status
            </h2>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <span className="text-slate-300">
                Dashboard Running Normally
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;