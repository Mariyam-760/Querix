import { Sparkles, Send } from "lucide-react";

const AIWorkspace = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

          <Sparkles size={24} />

        </div>

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            AI Business Assistant
          </h2>

          <p className="text-sm text-slate-500">
            Ask questions in natural language.
          </p>

        </div>

      </div>

      {/* Example Questions */}

      <div className="mt-6 flex flex-wrap gap-3">

        {[
          "Show monthly revenue",
          "Top 10 customers",
          "Highest selling products",
          "Sales by region",
        ].map((question) => (
          <button
            key={question}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm transition hover:bg-blue-50 hover:border-blue-500"
          >
            {question}
          </button>
        ))}

      </div>

      {/* Input */}

      <div className="mt-8">

        <textarea
          rows={5}
          placeholder="Ask anything about your business..."
          className="w-full resize-none rounded-2xl border border-slate-300 p-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

      </div>

      {/* Button */}

      <div className="mt-5 flex justify-end">

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1">

          <Send size={18} />

          Generate SQL

        </button>

      </div>

    </div>
  );
};

export default AIWorkspace;