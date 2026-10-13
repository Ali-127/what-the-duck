import { NextResponse } from "next/server";

const API_URL = process.env.API_URL;

// Get single product from database
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

// Delete one product from database
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  const productId = Number(id);

  // check for correct ID
  if (!Number.isInteger(productId) || productId <= 0)
    return NextResponse.json({ detail: "Invalid product ID" }, { status: 400 });

  // Send DELETE request
  let res: Response;
  try {
    res = await fetch(`${API_URL}/products/${productId}`, {
      method: "DELETE",
    });
  } catch {
    return NextResponse.json(
      { detail: "Couldn't delete product" },
      { status: 404 }
    );
  }

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return NextResponse.json(
      { detail: data?.detail ?? "Couldn't delete product" },
      { status: res.status }
    );
  }

  // 204 - No body
  return new NextResponse(null, { status: 204 });
}
