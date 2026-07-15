import {
  Database,
  Server,
  PlugZap,
  Trash2,
  CheckCircle2,
  Pencil,
} from "lucide-react";

const ConnectionCard = ({
  connection,
  onDelete,
  onSelect,
  onEdit,
}) => {
  return (
    <div
      className={`rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg ${
        connection.is_active
          ? "border-green-500 ring-2 ring-green-100"
          : "border-slate-200"
      }`}
    >
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-800">
            {connection.connection_name}
          </h3>

          <div
            className={`mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
              connection.is_active
                ? "bg-green-100 text-green-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            <CheckCircle2 size={16} />

            {connection.is_active
              ? "Active Connection"
              : "Available"}
          </div>
        </div>
      </div>

      {/* Details */}

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3">
          <Server
            size={18}
            className="text-blue-600"
          />

          <span>{connection.host}</span>
        </div>

        <div className="flex items-center gap-3">
          <Database
            size={18}
            className="text-indigo-600"
          />

          <span>{connection.database_name}</span>
        </div>

        <div className="flex items-center gap-3">
          <PlugZap
            size={18}
            className="text-orange-500"
          />

          <span>Port {connection.port}</span>
        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 flex gap-3">

        <button
          onClick={() => onEdit(connection)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 font-medium text-white transition hover:bg-amber-600"
        >
          <Pencil size={18} />
          Edit
        </button>

        <button
          onClick={() => onDelete(connection.id)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-medium text-white transition hover:bg-red-600"
        >
          <Trash2 size={18} />
          Delete
        </button>

      </div>

      <button
        onClick={() => onSelect(connection.id)}
        disabled={connection.is_active}
        className={`mt-4 w-full rounded-xl py-3 font-semibold text-white transition ${
          connection.is_active
            ? "cursor-default bg-green-600"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {connection.is_active
          ? "✓ Active Database"
          : "Select Database"}
      </button>
    </div>
  );
};

export default ConnectionCard;