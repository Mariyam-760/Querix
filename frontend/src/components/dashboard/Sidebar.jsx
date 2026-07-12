import {
  LayoutDashboard,
  Database,
  MessageSquare,
  BarChart3,
  History,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Database, label: "Database" },
  { icon: MessageSquare, label: "AI Chat" },
  { icon: BarChart3, label: "Analytics" },
  { icon: History, label: "History" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="h-screen w-72 bg-[#111827] text-white flex flex-col">

      {/* Logo */}

      <div className="border-b border-slate-700 p-6">

        <h1 className="text-3xl font-bold text-cyan-400">
          Querix
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Business Intelligence
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="mb-2 flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition hover:bg-slate-800"
            >
              <Icon size={20} />

              <span>{item.label}</span>
            </button>
          );
        })}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-700 p-4">

        <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-red-500">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;