const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config({ path: `${__dirname}/config.env` });

// console.log(process.env.U_SECRET_KEY);
const app = express();

// routes
const dataRouter = require("./routes/dataRoutes");
const searchRouter = require("./routes/searchRoutes");

// middleware

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

app.use("/api/v1/data", dataRouter);
app.use("/api/v1/search", searchRouter);

module.exports = app;
