import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/admin/get-hosts`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error fetching hosts:", error);
    return NextResponse.json({
      error: "An error occurred while fetching the hosts.",
    });
  }
}
