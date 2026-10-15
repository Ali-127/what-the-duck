"use client";

import { Product } from "@/app/api/products/route";
import { ProductForm } from "@/components/product-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        }
        else{
          console.log("Somehting went wrong");
        }
      } catch {
        console.log("Somehting went wrong");
      }
    }
    fetchProduct();
  }, [params.id]);

  function onSubmit() {
    // Implement updating
    console.log("Submitting");
  }

  if(!product){
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex h-64 items-center justify-center">
          <div className="text-muted-foreground">Loading product...</div>
        </div>
      </div>
    );
  }
  const { id, ...initialValues } = product;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit: {product.title}</h1>
        <p className="text-muted-foreground">
          Edit a product.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm
            initial={initialValues}
            onSubmit={onSubmit}
            submitLabel="Update Product"
          />
        </CardContent>
      </Card>
    </div>
  );
}
