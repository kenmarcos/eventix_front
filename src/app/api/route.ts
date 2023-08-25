import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.searchParams.get("input");

  const result = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&language=pt_BR&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
  );

  const data = await result.json();

  return NextResponse.json(data);
};
