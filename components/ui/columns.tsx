"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "./button";

export type User = {
  slNo: number;
  mobileNumber: string;
  createdAt: Date;
  AccountCreated: boolean;
  hostActivated: boolean;
};

export type Host = {
  slNo: number;
  name: string;
  profession: string;
  createdAt: Date;
  lastLogin: Date;
  mobile: string;
  location: string;
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

export const hostColumns: ColumnDef<Host>[] = [
  {
    header: "Sl No",
    accessorKey: "slNo",
  },
  {
    header: "Name",
    accessorKey: "personalDetails.name",
  },
  {
    header: "Profession",
    accessorKey: "personalDetails.profession",
  },
  {
    header: "Created On",
    cell: ({ row }) => {
      return new Date(row.getValue("createdAt")).toLocaleDateString("en-GB");
    },
    accessorKey: "createdAt",
  },
  {
    header: "Last Login",
    cell: ({ row }) => {
      return new Date(row.getValue("updatedAt")).toLocaleDateString("en-GB");
    },
    accessorKey: "updatedAt",
  },
  {
    header: "Mobile",
    accessorKey: "personalDetails.mobileNumber",
  },
  {
    header: "Location",
    accessorKey: "personalDetails.city",
  },
  {
    id: "userId",
    accessorKey: "userId",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <Link href={`/admin/profile/${row.getValue("userId")}}`}>
          <Button className="border-[#E03320]" variant="outline">
            View Profile
          </button>
        </Link>
      );
    }
  }
];
