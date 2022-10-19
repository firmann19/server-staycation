const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, //validation mongoose
  },
  price: {
    type: Number,
    required: true, //validation mongoose
  },
  country: {
    type: String,
    default: "Indonesia", //validation mongoose
  },
  city: {
    type: String,
    required: true, //validation mongoose
  },
  isPopular: {
    type: Boolean,
    default: false,
    required: true, //validation mongoose
  },
  description: {
    type: String,
    required: true, //validation mongoose
  },
  categoryId: {
    type: ObjectId,
    ref: "Category",
  },
  imageId: [
    {
      type: ObjectId,
      ref: "Image", //validation mongoose
    },
  ],
  featureId: [
    {
      type: ObjectId,
      ref: "Feature", //validation mongoose
    },
  ],
  activityId: [
    {
      type: ObjectId,
      ref: "Activity", //validation mongoose
    },
  ],
});

module.exports = mongoose.model("Item", itemSchema);
