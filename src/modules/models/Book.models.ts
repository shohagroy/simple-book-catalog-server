import { Document, model, Model, Schema } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  price: number;
  rating: number;
  addedBy: string;
}

const bookSchema: Schema<IBook> = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    publicationDate: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    addedBy: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book: Model<IBook> = model<IBook>("Book", bookSchema);

export default Book;
