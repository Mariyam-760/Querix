import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 450 },
  { month: "Feb", revenue: 620 },
  { month: "Mar", revenue: 590 },
  { month: "Apr", revenue: 780 },
  { month: "May", revenue: 910 },
  { month: "Jun", revenue: 1020 },
];

const categoryData = [
  { name: "Electronics", value: 40 },
  { name: "Furniture", value: 25 },
  { name: "Fashion", value: 20 },
  { name: "Others", value: 15 },
];

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F97316",
  "#8B5CF6",
];

const BusinessCharts = () => {
  return (
    <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">

      {/* Revenue Chart */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-bold text-slate-800">
          Revenue Trend
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563EB"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Pie Chart */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-bold text-slate-800">
          Sales Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              outerRadius={110}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default BusinessCharts;