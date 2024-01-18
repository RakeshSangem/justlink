import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      max: 256,
      index: true,
    },
    url: {
      type: String,
      trim: true,
      required: true,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],
    type: {
      type: String,
      default: 'Free',
    },
    clicks: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Link || mongoose.model('Link', linkSchema);
