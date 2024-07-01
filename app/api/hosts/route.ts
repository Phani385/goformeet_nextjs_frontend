import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: "experimental-edge", // Use Edge runtime
};

export default async function getHosts(
  res: NextApiResponse
) {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/admin/get-hosts`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
