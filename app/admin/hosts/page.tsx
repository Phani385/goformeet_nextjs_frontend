"use client";

import React from "react";
import { Host, User, hostColumns } from "../../../components/ui/columns";
import axios from "axios";
import { DataTable } from "../../../components/ui/data-table";

async function getData(): Promise<Host[]> {
  const apiUrl = `${process.env.BACKEND_URL}/admin/get-hosts`;

  const response = await fetch(apiUrl, { cache: "no-cache" });
  const data = response.json();
  return data;
}

const Users = async () => {
  const data = await getData();
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Hosts - {data.length}</h2>
      {!data && <div>Loading...</div>}
      {data && <DataTable columns={hostColumns} data={data} />}
    </div>
  );
};

export default Users;
