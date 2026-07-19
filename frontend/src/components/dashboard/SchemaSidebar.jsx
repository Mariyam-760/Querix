import { useMemo, useState } from "react";
import {
  Database,
  ChevronDown,
  ChevronRight,
  Search,
  RefreshCw,
  Table2,
} from "lucide-react";

const SchemaSidebar = ({
  loading,
  tables,
 expandedTable,
  columns,
  toggleTable,
  databaseName,
  onRefresh,
}) => {
  const [search, setSearch] = useState("");

  const filteredTables = useMemo(() => {
    return tables.filter((table) =>
      table.toLowerCase().includes(search.toLowerCase())
    );
  }, [tables, search]);

  return (
    <div className="col-span-4 rounded-3xl border bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database size={22} />
          <h2 className="text-lg font-bold">
            Database Schema
          </h2>
        </div>

        <button
          onClick={onRefresh}
          disabled={loading}
          className={`rounded-lg border p-2 transition ${
            loading
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-slate-100"
          }`}
        >
          <RefreshCw
            size={18}
            className={loading ? "animate-spin" : ""}
          />
        </button>
      </div>

      {/* Database Card */}
      <div className="mb-5 rounded-2xl border bg-gradient-to-r from-blue-50 to-indigo-50 p-4">

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500"></span>

          <span className="font-medium text-green-700">
            Connected
          </span>
        </div>

        <h3 className="mt-2 text-xl font-bold">
          {databaseName || "Database"}
        </h3>

        <p className="text-sm text-slate-500">
          {tables.length} Tables Available
        </p>

      </div>

      {/* Search */}
      <div className="relative mb-5">

        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search tables..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border py-2 pl-10 pr-3 outline-none transition focus:border-blue-500"
        />

      </div>

      {/* Loading */}
      {loading ? (
        <div className="space-y-3">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-xl border p-4"
            >
              <div className="h-4 w-40 rounded bg-slate-200"></div>

              <div className="mt-3 h-3 w-24 rounded bg-slate-100"></div>
            </div>
          ))}
        </div>
      ) : filteredTables.length === 0 ? (
        <div className="rounded-xl border border-dashed p-6 text-center text-slate-500">
          No matching tables found.
        </div>
      ) : (
        <div className="space-y-2">
          {filteredTables.map((table) => {
            const isOpen = expandedTable === table;

            return (
              <div
                key={table}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleTable(table)}
                  className="flex w-full items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">

                    <Table2
                      size={18}
                      className={
                        isOpen
                          ? "text-blue-600"
                          : "text-slate-500"
                      }
                    />

                    <div className="text-left">

                      <div className="font-medium">
                        {table}
                      </div>

                      <div className="text-xs text-slate-500">
                        {columns[table]?.length || 0} Columns
                      </div>

                    </div>
                  </div>

                  {isOpen ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "max-h-96"
                      : "max-h-0"
                  }`}
                >
                  <div className="border-t bg-white p-3">

                    {columns[table]?.map((column) => (
                      <div
                        key={column.name}
                        className="mb-2 flex items-center justify-between rounded-lg p-2 hover:bg-slate-50"
                      >
                        <span className="font-medium">
                          {column.name}
                        </span>

                        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                          {column.type}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SchemaSidebar;