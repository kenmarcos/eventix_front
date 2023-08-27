import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const input = req.nextUrl.searchParams.get("input");
  const placeId = req.nextUrl.searchParams.get("placeId");

  if (placeId) {
    const result = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&language=pt_BR&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );

    const data = await result.json();

    return NextResponse.json(data);
  }

  if (input) {
    const result = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&language=pt_BR&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );

    const data = await result.json();

    return NextResponse.json(data);
  }
};
