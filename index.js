const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

const updateRouter = require("./Routes/UpdateRouter");
const getRouter = require("./Routes/GetRouter");
const loginRouter = require("./Routes/LoginRouter");

dotenv.config();

const Port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use("/update", updateRouter);
app.use("/get", getRouter);
app.use("/login", loginRouter);

app.listen(Port, () => {
  console.log(`Server running on port: ${Port}`);
});
