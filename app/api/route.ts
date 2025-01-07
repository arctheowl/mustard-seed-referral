import { NextResponse } from "next/server";

// export async function GET() {
//   let viewCount = 0;
//   viewCount += 1;
//   return Response.json({ viewCount: viewCount });
// }

// To handle a GET request to /api
export async function GET(viewCount: number) {
  viewCount += 1;
  return NextResponse.json({ viewCount: viewCount });

  // return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
