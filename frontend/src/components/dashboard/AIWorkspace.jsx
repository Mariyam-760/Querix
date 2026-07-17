/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import {
  Sparkles,
  Send,
  Database,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import {
  getTables,
  getColumns,
} from "../../api/schema";

const AIWorkspace = () => {
  const [tables, setTables] = useState([]);
  const [expandedTable, setExpandedTable] = useState(null);
  const [columns, setColumns] = useState({});
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    fetchTables();
  }, []);

  async function fetchTables() {
    try {
      const res = await getTables();
      setTables(res.data.tables);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function toggleTable(table) {
    if (expandedTable === table) {
      setExpandedTable(null);
      return;
    }

    setExpandedTable(table);

    if (!columns[table]) {
      const res = await getColumns(table);

      setColumns((prev) => ({
        ...prev,
        [table]: res.data.columns,
      }));
    }
  }

  return (
    <div className="grid grid-cols-12 gap-6">

      {/* LEFT PANEL */}

      <div className="col-span-4 rounded-3xl border bg-white p-6 shadow-sm">

        <div className="flex items-center gap-2 mb-5">

          <Database size={22} />

          <h2 className="text-lg font-bold">
            Database Schema
          </h2>

        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          tables.map((table) => (
            <div
              key={table}
              className="mb-2 rounded-xl border"
            >
              <button
                onClick={() => toggleTable(table)}
                className="flex w-full items-center justify-between p-3"
              >
                <span>{table}</span>

                {expandedTable === table ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {expandedTable === table && (
                <div className="border-t bg-slate-50 p-3">
                  {columns[table]?.map((col) => (
                    <div
                      key={col.name}
                      className="mb-1 flex justify-between text-sm"
                    >
                      <span>{col.name}</span>

                      <span className="text-slate-500">
                        {col.type}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}

      </div>

      {/* RIGHT PANEL */}

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
            onChange={(e) =>
              setQuestion(e.target.value)
            }
            placeholder="Example:
Show total sales by month"
            className="w-full rounded-2xl border p-4"
          />

        </div>

        <div className="mt-5 flex justify-end">

          <button
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white"
          >
            <Send size={18} />

            Generate SQL
          </button>

        </div>

      </div>

    </div>
  );
};

export default AIWorkspace;