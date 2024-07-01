import React from "react";
import { Host, hostColumns } from "../../../components/ui/columns";
import { DataTable } from "../../../components/ui/data-table";
import { URLSearchParams } from "url";

interface SearchParams {
  page?: string;
  limit?: string;
}

const Hosts = async ({ searchParams }: { searchParams: SearchParams }) => {
  let { page = "1", limit = "10" } = searchParams;

  const response = await fetch(
    `${process.env.BACKEND_URL}/admin/get-hosts?page=${page}&limit=${limit}`,
    {
      cache: "no-cache",
    }
  );

  const data = await response.json();

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Hosts - {data.length}</h2>
      {data && <DataTable columns={hostColumns} data={data} />}
    </div>
  );
};

export default Hosts;
