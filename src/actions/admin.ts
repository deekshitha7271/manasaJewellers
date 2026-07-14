"use server";

import { revalidatePath } from "next/cache";
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import Category from "@/models/Category";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  await connectDB();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const collectionName = formData.get("collectionName") as string;
  const category = formData.get("category") as string;
  const inStock = formData.get("inStock") === "on";
  const isFeatured = formData.get("isFeatured") === "on";
  
  // For now, handling images as comma-separated URLs
  const imagesString = formData.get("images") as string;
  const images = imagesString.split(",").map((i) => i.trim()).filter(Boolean);

  try {
    const product = new Product({
      title,
      description,
      price,
      collectionName,
      category,
      inStock,
      isFeatured,
      images: images.length > 0 ? images : ["https://placehold.co/600x800?text=No+Image"],
    });

    await product.save();
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Failed to create product");
  }

  revalidatePath("/admin");
  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function deleteProduct(productId: string) {
  await connectDB();
  
  try {
    await Product.findByIdAndDelete(productId);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Failed to delete product");
  }

  revalidatePath("/admin");
  revalidatePath("/admin/products");
}

export async function createCategory(formData: FormData) {
  await connectDB();

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;

  try {
    const category = new Category({ name, description });
    await category.save();
  } catch (error) {
    console.error("Error creating category:", error);
    throw new Error("Failed to create category");
  }

  revalidatePath("/admin/categories");
  revalidatePath("/admin/products/new");
  redirect("/admin/categories");
}

export async function deleteCategory(categoryId: string) {
  await connectDB();
  
  try {
    await Category.findByIdAndDelete(categoryId);
  } catch (error) {
    console.error("Error deleting category:", error);
    throw new Error("Failed to delete category");
  }

  revalidatePath("/admin/categories");
  revalidatePath("/admin/products/new");
}
