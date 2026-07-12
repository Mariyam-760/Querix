import {
  DollarSign,
  ShoppingCart,
  Users,
  Bot,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";
import AIWorkspace from "../../components/dashboard/AIWorkspace";
import SQLPreview from "../../components/dashboard/SQLPreview";
import ResultsTable from "../../components/dashboard/ResultsTable";
import BusinessCharts from "../../components/dashboard/BusinessCharts";
import AIInsights from "../../components/dashboard/AIInsights";
const Dashboard = () => {
  return (
    <div>

      {/* Header */}

      <div className="mb-10">

  <h1 className="text-4xl font-bold text-slate-800">
    Welcome Back 👋
  </h1>

  <p className="mt-2 text-slate-500">
    Here's what's happening in your business today.
  </p>

</div>

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  <StatCard
    title="Revenue"
    value="₹12.5L"
    icon={DollarSign}
    color="bg-blue-600"
    change="+12%"
  />

  <StatCard
    title="Orders"
    value="2,485"
    icon={ShoppingCart}
    color="bg-green-600"
    change="+8%"
  />

  <StatCard
    title="Customers"
    value="1,326"
    icon={Users}
    color="bg-purple-600"
    change="+18%"
  />

  <StatCard
    title="AI Queries"
    value="94"
    icon={Bot}
    color="bg-orange-500"
    change="+42%"
  />

</div>
 <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">

    <AIWorkspace />

    <SQLPreview />

  </div>
   {/* Results Table */}

  <div className="mt-8">
    <ResultsTable />
  </div>

  {/* Business Charts */}

  <div className="mt-8">
    <BusinessCharts />
  </div>
  
  <div className="mt-8">
  <AIInsights />
</div>
</div>




  
  );
};

export default Dashboard;