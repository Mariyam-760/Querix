/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState, useCallback } from "react";

import {
  testConnection,
  saveConnection,
  getConnections,
  deleteConnection,
  activateConnection,
  updateConnection,
} from "../../api/database";

import ConnectionForm from "../../components/database/ConnectionForm";
import ConnectionCard from "../../components/database/ConnectionCard";


const Database = () => {
  const [form, setForm] = useState({
    connection_name: "",
    host: "",
    port: "3306",
    username: "",
    password: "",
    database_name: "",
  });

  const [loading, setLoading] = useState(false);
  const [connections, setConnections] = useState([]);

  const [editingId, setEditingId] = useState(null);
const [isEditing, setIsEditing] = useState(false);
const [showForm, setShowForm] = useState(false);

 const handleChange = (e) => {
  setForm((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
}));
};

 const fetchConnections = useCallback(async () => {
  try {
    const response = await getConnections();
    setConnections(response.data);
  } catch (error) {
    console.error(
      "Failed to fetch connections:",
      error
    );
  }
}, []);

  useEffect(() => {
  fetchConnections();
}, [fetchConnections]);

  const handleTestConnection = async () => {
    try {
      setLoading(true);

      const response = await testConnection(form);

      alert(response.data.message);
    } catch (error) {
      alert(
        error.response?.data?.detail ||
          "Connection Failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSaveConnection = async () => {
    try {
      setLoading(true);

      const response = await saveConnection(form);

      alert(response.data.message);

      setForm({
        connection_name: "",
        host: "",
        port: "3306",
        username: "",
        password: "",
        database_name: "",
      });

      fetchConnections();
      setShowForm(false);

    } catch (error) {
      alert(
        error.response?.data?.detail ||
          "Unable to save connection."
      );
    } finally {
      setLoading(false);
    }
  };

const handleUpdateConnection = async () => {
  try {
    setLoading(true);

    const response = await updateConnection(
      editingId,
      form
    );

    alert(response.data.message);

    setIsEditing(false);
    setEditingId(null);

    setForm({
      connection_name: "",
      host: "",
      port: "3306",
      username: "",
      password: "",
      database_name: "",
    });

    fetchConnections();
    setShowForm(false);

  } catch (error) {
    alert(
      error.response?.data?.detail ||
      "Unable to update connection."
    );
  } finally {
    setLoading(false);
  }
};

  const handleDeleteConnection = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this connection?"
    );

    if (!confirmDelete) return;

    try {
      await deleteConnection(id);

      alert("Connection deleted successfully.");

      fetchConnections();

    } catch (error) {
      alert(
        error.response?.data?.detail ||
          "Unable to delete connection."
      );
    }
  };

  const handleSelectConnection = async (id) => {
  try {
    await activateConnection(id);

    fetchConnections();

    alert("Connection Activated.");

  } catch (error) {
    alert(
      error.response?.data?.detail ||
      "Unable to activate connection."
    );
  }
};

const handleEditConnection = (connection) => {
  setEditingId(connection.id);
  setIsEditing(form);
  setShowForm(true);

  setForm({
    connection_name: connection.connection_name,
    host: connection.host,
    port: connection.port,
    username: connection.username,
    password: connection.password,
    database_name: connection.database_name,
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
  <div>
    <h1 className="text-4xl font-bold text-slate-900">
      Database Connections
    </h1>

    <p className="mt-2 text-slate-500">
      Connect and manage your business databases securely.
    </p>
  </div>

  <button
  onClick={() => {
    setShowForm(true);
    setIsEditing(false);
    setEditingId(null);
    

    setForm({
      connection_name: "",
      host: "",
      port: "3306",
      username: "",
      password: "",
      database_name: "",
    });
  }}
  className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
>
  + Add Connection
</button>
</div>

      {/* Connection Form */}
{showForm && (
  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

    <ConnectionForm
      form={form}
      loading={loading}
      isEditing={isEditing}
      onChange={handleChange}
      onTest={handleTestConnection}
      onSave={
        isEditing
          ? handleUpdateConnection
          : handleSaveConnection
      }
      onCancel={() => {
        setShowForm(false);
        setIsEditing(false);
        setEditingId(null);

        setForm({
          connection_name: "",
          host: "",
          port: "3306",
          username: "",
          password: "",
          database_name: "",
        });
      }}
    />

  </div>
)}

      {/* Saved Connections */}

      <div>

        <h2 className="mb-6 text-2xl font-semibold text-slate-800">
          Saved Connections
        </h2>

        {connections.length === 0 ? (

          <div className="rounded-2xl bg-white p-10 text-center shadow">

            <h3 className="text-xl font-semibold">
              No Connections
            </h3>

            <p className="mt-2 text-slate-500">
              Create your first database connection.
            </p>

          </div>

        ) : (

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

            {connections.map((connection) => (
<ConnectionCard
  key={connection.id}
  connection={connection}
  onDelete={handleDeleteConnection}
  onSelect={handleSelectConnection}
  onEdit={handleEditConnection}
  
/>


            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Database;