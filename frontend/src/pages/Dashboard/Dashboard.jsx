const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-lg text-slate-600">
          Welcome to Querix — Your AI-Powered Business Intelligence Platform.
        </p>

      </div>

      {/* Welcome Card */}

      <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">

        <h2 className="text-2xl font-semibold text-slate-800">
          🚀 Welcome to Querix
        </h2>

        <p className="mt-4 leading-8 text-slate-600">
          This dashboard will soon allow you to:
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="rounded-2xl border border-slate-200 p-5">
            🤖 Ask business questions in plain English
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            🧠 Generate SQL using AI
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            📊 Visualize data using interactive charts
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            💡 Receive AI-powered business insights
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;