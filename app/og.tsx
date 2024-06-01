import { ImageResponse } from 'next/og';    
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'url(/images/og-image.jpg)',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',

        }}
      >
        👋 Hey
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}