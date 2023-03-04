const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	score: { type: Number, required: true, default: 0 },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
