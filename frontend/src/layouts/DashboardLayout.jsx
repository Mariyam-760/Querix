import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Sidebar will come here */}

      {/* Navbar will come here */}

      <main className="min-h-screen">
        <Outlet />
      </main>

    </div>
  );
};

export default DashboardLayout;