import {
  Database,
  Table2,
  Bot,
  FileCode2,
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

  <h1 className="text-4xl font-bold text-slate-900">
    Welcome Back 👋
  </h1>

  <p className="mt-2 text-slate-500">
    Your AI-powered Business Intelligence workspace.
  </p>

</div>

<div className="grid gap-6 lg:grid-cols-4">

  <StatCard
    title="Connected Database"
    value="MySQL"
    icon={Database}
    color="bg-blue-600"
    change="Connected"
  />

  <StatCard
    title="Schema"
    value="Waiting"
    icon={Table2}
    color="bg-violet-600"
    change="Not Scanned"
  />

  <StatCard
    title="AI Status"
    value="Ready"
    icon={Bot}
    color="bg-emerald-600"
    change="Gemini"
  />

  <StatCard
    title="SQL Queries"
    value="0"
    icon={FileCode2}
    color="bg-orange-500"
    change="Today"
  />

</div>
 <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
  <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">

  <h2 className="text-3xl font-bold">
    Ready to explore your data?
  </h2>

  <p className="mt-3 max-w-2xl text-blue-100">
    Connect your database, explore its schema,
    generate SQL using AI and visualize your business insights.
  </p>

  <div className="mt-6 flex gap-4">

    <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700">
      Connect Database
    </button>

    <button className="rounded-xl border border-white/30 px-6 py-3">
      Open AI Workspace
    </button>

  </div>

</div>

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