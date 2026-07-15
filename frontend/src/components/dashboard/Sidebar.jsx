import {
  LayoutDashboard,
  Database,
  BrainCircuit,
  BarChart3,
  History,
  FileText,
  Settings,
  LogOut,
  Circle,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: Database,
    label: "Database",
    path: "/database",
  },
  {
    icon: BrainCircuit,
    label: "AI Workspace",
    path: "/workspace",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: History,
    label: "History",
    path: "/history",
  },
  {
    icon: FileText,
    label: "Reports",
    path: "/reports",
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  };

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-[#0F172A] text-white">

      {/* Logo */}

      <div className="border-b border-slate-800 p-6">

        <h1 className="text-3xl font-bold tracking-tight text-cyan-400">
          Querix
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          AI Business Intelligence
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `mb-2 flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.label}
              </span>
            </NavLink>
          );
        })}

      </nav>

      {/* Connected Database */}

      <div className="mx-4 mb-4 rounded-2xl border border-slate-700 bg-slate-800 p-4">

        <div className="mb-2 flex items-center gap-2">

          <Circle
            size={10}
            fill="#22c55e"
            className="text-green-500"
          />

          <span className="text-sm font-semibold">
            Connected
          </span>

        </div>

        <p className="text-sm text-slate-300">
          Production MySQL
        </p>

        <p className="text-xs text-slate-500">
          localhost:3306
        </p>

      </div>

      {/* Logout */}

      <div className="border-t border-slate-800 p-4">

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-red-500 hover:text-white"
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;