const ConnectionForm = ({
  form,
  loading,
  isEditing,
  onChange,
  onTest,
  onSave,
  onCancel,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-semibold text-slate-800">
            {isEditing
              ? "Edit Database Connection"
              : "New Database Connection"}
          </h2>

          <p className="mt-2 text-slate-500">
            {isEditing
              ? "Update your database connection."
              : "Connect your MySQL database to Querix."}
          </p>
        </div>

      </div>

      {/* Form */}

      <div className="grid gap-6 md:grid-cols-2">

        <input
          required
          name="connection_name"
          value={form.connection_name}
          onChange={onChange}
          placeholder="Connection Name"
          className="rounded-xl border border-slate-300 p-3"
        />

        <input
          required
          name="host"
          value={form.host}
          onChange={onChange}
          placeholder="Host"
          className="rounded-xl border border-slate-300 p-3"
        />

        <input
          required
          type="number"
          name="port"
          value={form.port}
          onChange={onChange}
          placeholder="Port"
          className="rounded-xl border border-slate-300 p-3"
        />

        <input
          required
          name="username"
          value={form.username}
          onChange={onChange}
          placeholder="Username"
          className="rounded-xl border border-slate-300 p-3"
        />

        <input
          required
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Password"
          className="rounded-xl border border-slate-300 p-3"
        />

        <input
          required
          name="database_name"
          value={form.database_name}
          onChange={onChange}
          placeholder="Database Name"
          className="rounded-xl border border-slate-300 p-3"
        />

      </div>

      {/* Buttons */}

      <div className="mt-8 flex gap-4">

        <button
          onClick={onTest}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Test Connection
        </button>

        <button
          onClick={onSave}
          disabled={loading}
          className={`rounded-xl px-6 py-3 font-medium text-white ${
            isEditing
              ? "bg-amber-500 hover:bg-amber-600"
              : "bg-emerald-600 hover:bg-emerald-700"
          }`}
        >
          {loading
            ? isEditing
              ? "Updating..."
              : "Saving..."
            : isEditing
            ? "Update Connection"
            : "Save Connection"}
        </button>

        {isEditing && (
          <button
            onClick={onCancel}
            className="rounded-xl border border-slate-300 px-6 py-3 font-medium hover:bg-slate-100"
          >
            Cancel
          </button>
        )}

      </div>

    </div>
  );
};

export default ConnectionForm;