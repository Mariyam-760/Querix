const BrandingPanel = () => {
  return (
    <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden bg-gradient-to-br from-[#131B3D] via-[#243B8A] to-[#4A5FE7] text-white p-12 items-center justify-center">

      {/* Background Glow */}

      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-300/10 blur-3xl"></div>

      <div className="relative max-w-lg">

        {/* Logo */}

        <div className="flex items-center gap-3 mb-8">

          <div className="h-14 w-14 rounded-2xl bg-cyan-400 flex items-center justify-center text-[#131B3D] text-2xl font-bold shadow-xl">
            Q
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              Querix
            </h1>

            <p className="text-indigo-100">
              AI Business Intelligence Platform
            </p>
          </div>

        </div>

        {/* Heading */}

        <h2 className="text-2xl font-semibold mb-4">
          Ask Questions. Get Insights.
        </h2>

        <p className="text-indigo-100 leading-7 mb-8">
          Transform natural language into SQL queries, execute them securely,
          visualize business data and receive AI-powered insights.
        </p>

        {/* SQL Preview */}

        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-5 shadow-xl">

          <div className="flex items-center gap-2 mb-4">

            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>

            <span className="ml-3 text-sm text-cyan-300">
              SQL Preview
            </span>

          </div>

          <div className="rounded-lg bg-[#0B1030] p-3 font-mono text-sm mb-4">
            Show top 5 customers by revenue
          </div>

          <pre className="text-xs text-green-300 whitespace-pre-wrap">
{`SELECT customer_name,
SUM(revenue)
FROM orders
GROUP BY customer_name
ORDER BY SUM(revenue) DESC
LIMIT 5;`}
          </pre>

        </div>

        {/* Workflow */}

        <div className="mt-8 space-y-4">

          {[
            "Ask in Natural Language",
            "AI Generates SQL",
            "Validate Query",
            "Execute Securely",
            "Visualize Results",
            "AI Business Insights",
          ].map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 text-[#131B3D] font-bold">
                {index + 1}
              </div>

              <span>{step}</span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default BrandingPanel;