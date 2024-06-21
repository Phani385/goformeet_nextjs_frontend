import { cn } from "@/lib/utils";
import { Arimo } from "next/font/google";
import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "experimental-edge";

const arimoRegularFontP = fetch(
  new URL("../../../public/assets/Arimo-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const [arimoRegularFont] = await Promise.all([arimoRegularFontP]);

    const hasName = searchParams.has("name");
    const name = hasName
      ? searchParams.get("name")?.slice(0, 100)
      : "My default name";

    const hasUsername = searchParams.has("username");
    const username = hasUsername ? searchParams.get("username") : "username";

    const imageUrl = `https://goformeet.s3.ap-south-1.amazonaws.com/${username}/${username}_1.png`;
    

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 40,
            color: "black",
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            fontFamily: "Arimo",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            src={`${process.env.FRONTEND_URL}/assets/images/ogImage.png`}
            tw="w-full h-full absolute top-0 left-0"
          />
          <h2 tw="absolute font-bold top-48 left-[465px] z-10"> {name} </h2>
          <img
            src={imageUrl}
            alt="og-image"
            tw="w-[329px] h-[472px] absolute top-20 left-21 rounded-lg"
          />
          <h4 tw="pt-30 pl-20 text-normal">{`goformeet.co/${username}`}</h4>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Arimo",
            data: arimoRegularFont,
            style: "normal",
          },
        ],
      }
    );
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
