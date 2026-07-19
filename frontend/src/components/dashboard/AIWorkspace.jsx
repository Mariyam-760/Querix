
/* eslint-disable react-hooks/immutability */

import { useEffect, useState } from "react";

import {
  getTables,
  getColumns,
} from "../../api/schema";

import SchemaSidebar from "./SchemaSidebar";
import PromptPanel from "./PromptPanel";

const AIWorkspace = () => {
  const [tables, setTables] = useState([]);
  const [expandedTable, setExpandedTable] = useState(null);
  const [columns, setColumns] = useState({});
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState("");
  const [databaseName, setDatabaseName] = useState("");

  useEffect(() => {
    fetchTables();
  }, []);

  async function fetchTables() {
    try {
      const res = await getTables();
      setTables(res.data.tables);
      setDatabaseName(res.data.database);
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
<SchemaSidebar
  loading={loading}
  tables={tables}
  expandedTable={expandedTable}
  columns={columns}
  toggleTable={toggleTable}
  databaseName={databaseName}
  onRefresh={fetchTables}
/>

      <PromptPanel
        question={question}
        setQuestion={setQuestion}
      />
    </div>
  );
};

export default AIWorkspace;