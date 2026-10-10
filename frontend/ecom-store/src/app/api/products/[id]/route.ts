import { NextResponse } from "next/server";

const API_URL = process.env.API_URL;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productId = parseInt(id);

    const res = await fetch(`${API_URL}/products/${productId}`);

    const product = await res.json();

    if (res.status === 404) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch product" },
        { status: res.status }
      );
    }

    return NextResponse.json(product);
  } catch (err) {
    NextResponse.json({ error: err }, { status: 502 });
  }
}
