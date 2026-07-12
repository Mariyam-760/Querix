import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import TopNavbar from "../components/dashboard/TopNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <TopNavbar />

        <main className="flex-1 overflow-y-auto p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;