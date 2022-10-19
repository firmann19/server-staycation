const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, //validation mongoose
  },
  qty: {
    type: Number,
    required: true, //validation mongoose
  },
  imageUrl: {
    type: String,
    required: true, //validation mongoose
  },
  itemId: {
    type: ObjectId,
    ref: Item,
  },
});

module.exports = mongoose.model("Feature", featureSchema);
