import {
  Search,
  Bell,
  Moon,
  UserCircle,
  Database,
} from "lucide-react";

const TopNavbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm">

      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Querix
        </h1>

        <p className="text-sm text-slate-500">
          AI Business Intelligence Platform
        </p>
      </div>

      {/* Search */}

      <div className="relative hidden w-96 lg:block">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Active Database */}

        <div className="hidden items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-2 lg:flex">

          <Database
            size={18}
            className="text-green-600"
          />

          <div>

            <p className="text-xs text-slate-500">
              Connected
            </p>

            <p className="text-sm font-semibold text-green-700">
              MySQL
            </p>

          </div>

        </div>

        {/* Theme */}

        <button className="rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200">
          <Moon size={18} />
        </button>

        {/* Notifications */}

        <button className="relative rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200">

          <Bell size={18} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* User */}

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2">

          <UserCircle
            size={40}
            className="text-blue-600"
          />

          <div>

            <p className="font-semibold">
              {user?.name || "User"}
            </p>

            <p className="text-xs text-slate-500">
              Business Analyst
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default TopNavbar;