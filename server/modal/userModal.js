const mongoose = require("mongoose");

const userModal = mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  price: {
    type: String,
    required: [true, "price  is required"],
  },
  description: {
    type: String,
    required: [true, "Description  is required"],
  },
});
// userModal.plugin(mongoosePaginate);

const User = mongoose.model("Socket", userModal);

module.exports = { User };
