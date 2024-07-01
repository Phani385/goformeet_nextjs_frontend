import { NextRequest, NextResponse } from "next/server";

export default async function getHosts(req: NextRequest, res: NextResponse) {
    const apiUrl = `${process.env.BACKEND_URL}/admin/get-hosts`;
    const response = await fetch(apiUrl, { cache: "no-cache" });
}