const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AllClients = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("clients", AllClients);
