const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db");
const movieRouter = require("./routes/movies.routes");
const userRouter = require("./routes/user.routes");

const app = express();
// * middleware
app.use(cors());
app.use(express.json());

// * routes

app.get("/", (req, res) => {
	res.send("Home page");
});

app.use("/movies", movieRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
	console.log("server listening on port " + process.env.PORT);
	connectDB();
});
