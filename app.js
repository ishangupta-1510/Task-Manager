const connectDB = require("./db/connect");
const express = require("express");
const tasks = require("./routes/tasks");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("get running");
});

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, console.log(`Port is running on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
