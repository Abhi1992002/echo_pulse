import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // get body
    const body = await req.json();
    console.log(body);
    return NextResponse.json(
      {
        success: false,
        error: "chapter not found",
      },
      {
        status: 404,
      }
    );
  } catch (error) {
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function GET(req: Request) {}
