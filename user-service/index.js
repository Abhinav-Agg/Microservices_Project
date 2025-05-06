const express = require("express");
const app = express();
const userRouter = require("./routes/userroute");
const PORT = 5002;
const { connectDB } = require("../common/db"); // Adjust the path based on your file structure

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(PORT, () => {
    console.log(`User Service is listen at ${PORT}`);
});