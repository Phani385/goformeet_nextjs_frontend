"use client";

import { ColumnDef } from "@tanstack/react-table";

export type User = {
  slNo: number;
  mobileNumber: string;
  createdAt: Date;
  AccountCreated: boolean;
  hostActivated: boolean;
};

export const userColumns: ColumnDef<User>[] = [
  {
    header: "Sl No",
    accessorKey: "slNo",
  },
  {
    header: "Mobile Number",
    accessorKey: "mobileNumber",
  },
  {
    header: "Created On",
    accessorKey: "createdAt",
  },
  {
    header: "Account Created",
    cell: ({ row }) => {
      return row.getValue("hasCreatedAccount") ? (
        <div className="px-5 py-2 bg-[#1bcfb4] text-white font-semibold w-fit mx-auto">
          Yes
        </div>
      ) : (
        <div className="px-5 py-2 bg-[#e33200] text-white font-semibold w-fit mx-auto">
          No
        </div>
      );
    },
    accessorKey: "hasCreatedAccount",
  },
  {
    header: "Host Activated",
    cell: ({ row }) => {
        return row.getValue("isHost") ? (
          <div className="px-5 py-2 bg-[#1bcfb4] text-white font-semibold w-fit mx-auto">
            Yes
          </div>
        ) : (
          <div className="px-5 py-2 bg-[#e33200] text-white font-semibold w-fit mx-auto">
            No
          </div>
        );
      },
    accessorKey: "isHost",
  },
];
