import { NextResponse } from "next/server";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
}

const API_URL = process.env.API_URL;

export async function GET() {
  // Simulate API delay
  // await new Promise((resolve) => setTimeout(resolve, 50));
  try {
    // fetch products from api
    const res = await fetch(`${API_URL}/products`);

    const products = await res.json();

    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({
      error: err,
      status: 502,
    });
  }
}

// export async function POST(request: Request) {
// const body = await request.json();

// // Generate new ID
// const newId = Math.max(...dummyProducts.map((p) => p.id)) + 1;

// const newProduct: Product = {
//   id: newId,
//   title: body.title,
//   price: parseFloat(body.price),
//   image:
//     body.image ||
//     "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop&crop=center",
//   description: body.description,
//   category: body.category,
// };

// // In a real app, you'd save to database
// // dummyProducts.push(newProduct);

// return NextResponse.json(newProduct, { status: 201 });
// }
