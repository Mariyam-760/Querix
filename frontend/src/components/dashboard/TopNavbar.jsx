import {
  Search,
  Bell,
  Moon,
  UserCircle,
} from "lucide-react";

const TopNavbar = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm">

      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back to Querix
        </p>
      </div>

      {/* Search */}

      <div className="hidden lg:flex items-center relative w-96">

        <Search
          size={18}
          className="absolute left-4 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button className="rounded-xl bg-slate-100 p-3 hover:bg-slate-200 transition">
          <Moon size={18} />
        </button>

        <button className="rounded-xl bg-slate-100 p-3 hover:bg-slate-200 transition">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-2">

          <UserCircle size={38} className="text-blue-600" />

          <div>

            <p className="font-semibold">
              Mariyam
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