import { Sparkles, Send } from "lucide-react";

const PromptPanel = ({
  question,
  setQuestion,
}) => {
  return (
    <div className="col-span-8 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-3 text-white">
          <Sparkles size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            AI Business Assistant
          </h2>

          <p className="text-sm text-slate-500">
            Ask questions in natural language.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <textarea
          rows={6}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={`Example:
Show total sales by month`}
          className="w-full rounded-2xl border p-4"
        />
      </div>

      <div className="mt-5 flex justify-end">
        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white">
          <Send size={18} />
          Generate SQL
        </button>
      </div>
    </div>
  );
};

export default PromptPanel;