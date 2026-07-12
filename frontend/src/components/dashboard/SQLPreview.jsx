import { Copy, Database } from "lucide-react";

const sampleSQL = `SELECT customer_name,
SUM(revenue) AS total_revenue
FROM orders
GROUP BY customer_name
ORDER BY total_revenue DESC
LIMIT 10;`;

const SQLPreview = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">

        <div className="flex items-center gap-3">

          <Database className="text-blue-600" size={22} />

          <div>

            <h2 className="font-bold text-slate-800">
              SQL Preview
            </h2>

            <p className="text-sm text-slate-500">
              Generated query will appear here
            </p>

          </div>

        </div>

        <button className="rounded-lg border border-slate-200 p-2 transition hover:bg-slate-100">

          <Copy size={18} />

        </button>

      </div>

      {/* SQL Code */}

      <div className="bg-[#0F172A] p-6">

        <pre className="overflow-x-auto text-sm text-green-400 font-mono leading-7">

{sampleSQL}

        </pre>

      </div>

      {/* Footer */}

      <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">

        <span className="text-sm text-slate-500">
          Status:
          <span className="ml-2 font-semibold text-yellow-600">
            Waiting for AI
          </span>
        </span>

        <button
          disabled
          className="rounded-xl bg-slate-300 px-5 py-2 text-sm font-semibold text-white cursor-not-allowed"
        >
          Execute SQL
        </button>

      </div>

    </div>
  );
};

export default SQLPreview;