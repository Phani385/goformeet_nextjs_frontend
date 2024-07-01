import React, { useState, useEffect } from "react";
import { hostColumns } from "../../../components/ui/columns";
import { DataTable } from "../../../components/ui/data-table";

const Hosts = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/admin/get-hosts`, { cache: "no-cache" });
  const data = await response.json();
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Hosts - {data.length}</h2>
      {data && <DataTable columns={hostColumns} data={data} />}
    </div>
  );
};

export default Hosts;
