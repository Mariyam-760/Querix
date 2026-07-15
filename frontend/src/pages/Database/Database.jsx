import { useState } from "react";

const Database = () => {
  const [form, setForm] = useState({
    connection_name: "",
    host: "",
    port: "3306",
    username: "",
    password: "",
    database_name: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Database Connections
        </h1>

        <p className="mt-2 text-slate-500">
          Connect your MySQL database to Querix.
        </p>

      </div>

      {/* Card */}

      <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8">

        <h2 className="text-2xl font-semibold mb-8">
          New Connection
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            name="connection_name"
            placeholder="Connection Name"
            value={form.connection_name}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <input
            name="host"
            placeholder="Host"
            value={form.host}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <input
            name="port"
            placeholder="Port"
            value={form.port}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

          <input
            name="database_name"
            placeholder="Database Name"
            value={form.database_name}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />

        </div>

        <div className="mt-8 flex gap-4">

          <button className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition">
            Test Connection
          </button>

          <button className="rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition">
            Save Connection
          </button>

        </div>

      </div>

    </div>
  );
};

export default Database;