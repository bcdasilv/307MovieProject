const mongoose = require("mongoose");
const db = require("../db.js");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Reviews" }],
    // favorite_pun
  },
  { collection: "users_list" }
);

const Users = db.getDbConnection().model("Users", UserSchema);

exports.Users = Users;
exports.UserSchema = UserSchema;
