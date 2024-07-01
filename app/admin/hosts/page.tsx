import React from "react";
import { Host, hostColumns } from "../../../components/ui/columns";
import axios from "axios";
import { DataTable } from "../../../components/ui/data-table";

async function getData(): Promise<Host[]> {
  const apiUrl = `${process.env.BACKEND_URL}/admin/get-hosts`;
  console.log(apiUrl)

  const response = await axios.get(apiUrl);
  return response.data;
}

const Hosts = async () => {
  const data = await getData();
  const apiStatus = data ? "success" : "error";
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Hosts - {data.length}</h2>
      {apiStatus === "error" && <div>Loading...</div>}
      {apiStatus === "success" && <DataTable columns={hostColumns} data={data} />}
    </div>
  );
};

export default Hosts;
