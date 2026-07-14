import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  collectionName: string; // e.g. "Bridal", "Everyday"
  category: string;       // e.g. "Necklaces", "Rings"
  images: string[];
  inStock: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    collectionName: { type: String, required: true, index: true },
    category: { type: String, required: true, index: true },
    images: { type: [String], required: true },
    inStock: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Prevent re-compilation of model in Next.js development
const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
