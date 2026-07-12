import { Download } from "lucide-react";

const sampleData = [
  {
    customer: "Amazon",
    revenue: "₹8,50,000",
    orders: 245,
    city: "Hyderabad",
  },
  {
    customer: "Flipkart",
    revenue: "₹7,10,000",
    orders: 211,
    city: "Bangalore",
  },
  {
    customer: "Reliance",
    revenue: "₹6,42,000",
    orders: 198,
    city: "Mumbai",
  },
  {
    customer: "Myntra",
    revenue: "₹5,95,000",
    orders: 184,
    city: "Pune",
  },
];

const ResultsTable = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Query Results
          </h2>

          <p className="text-sm text-slate-500">
            Results returned from the database
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100 transition">
          <Download size={18} />
          Export CSV
        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Revenue
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Orders
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                City
              </th>

            </tr>

          </thead>

          <tbody>

            {sampleData.map((row) => (
              <tr
                key={row.customer}
                className="border-t border-slate-100 hover:bg-slate-50"
              >
                <td className="px-6 py-4">{row.customer}</td>
                <td className="px-6 py-4 font-semibold text-green-600">
                  {row.revenue}
                </td>
                <td className="px-6 py-4">{row.orders}</td>
                <td className="px-6 py-4">{row.city}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ResultsTable;