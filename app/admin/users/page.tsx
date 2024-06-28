import React from "react";
import { User, userColumns } from "../../../components/ui/columns";
import axios from "axios";
import { DataTable } from "../../../components/ui/data-table";

async function getData(): Promise<User[]> {
  const apiUrl = `${process.env.BACKEND_URL}/admin/get-users`;

  const response = await axios.get(apiUrl);
  const data = response.data;
  const modifiedData = data.map((user: User) => {
    return {
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString("en-GB"),
    };
  });
  return modifiedData;
}

const Users = async () => {
  const data = await getData();
  return (
    <div className="p-5">
        <h2 className="text-2xl font-bold">Users - {data.length}</h2>
      <DataTable columns={userColumns} data={data} />
    </div>
  );
};

export default Users;
