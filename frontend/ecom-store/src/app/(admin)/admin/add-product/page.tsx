"use client";

import { ProductForm } from "@/components/product-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import * as z from "zod";

const productSchema = z.object({
  title: z.string().min(1, "Product title is required"),
  price: z.string().min(1, "Price is required"),
  image: z.string().url("Please enter a valid URL").optional(),
  description: z.string().optional(),
  category: z.string().optional(),
});

const initialValues = {
  title: "",
  price: "",
  image: "",
  description: "",
  category: "",
};

type ProductFormData = z.infer<typeof productSchema>;

export default function AddProductPage() {
  const router = useRouter();

  const onSubmit = async (data: ProductFormData) => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/admin/products");
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
        <p className="text-muted-foreground">
          Create a new product for your store.
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
            submitLabel="Add Product"
          />
        </CardContent>
      </Card>
    </div>
  );
}
