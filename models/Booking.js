const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bookingStartDate: {
    type: Date,
    required: true, //validation mongoose
  },
  bookingEndDate: {
    type: Date,
    required: true, //validation mongoose
  },
  itemId: [
    {
      type: ObjectId,
      ref: "Item",
      required: true, //validation mongoose
    },
  ],
  price: {
    type: Number,
    required: true, //validation mongoose
  },
  night: {
    type: Number,
    required: true, //validation mongoose
  },
  MemberId: [
    {
      type: ObjectId,
      ref: "Member", //validation mongoose
    },
  ],
  bankId: [
    {
      type: ObjectId,
      ref: "Bank", //validation mongoose
    },
  ],
  proofPayment: {
    type: String,
    required: true, //validation mongoose
  },
  bankFrom: {
    type: String,
    required: true, //validation mongoose
  },
  accountHolder: {
    type: String,
    required: true, //validation mongoose
  },
  status: {
    type: String,
    required: true, //validation mongoose
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
