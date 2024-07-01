"use client";

import React, { useState, useEffect } from "react";
import { hostColumns } from "../../../components/ui/columns";
import { DataTable } from "../../../components/ui/data-table";

const Hosts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/hosts"); // Endpoint should be relative
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log(response)
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error state if needed
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Hosts - {data.length}</h2>
      {data && <DataTable columns={hostColumns} data={data} />}
    </div>
  );
};

export default Hosts;
