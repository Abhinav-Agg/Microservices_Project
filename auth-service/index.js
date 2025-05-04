const express = require("express");
const app = express();
const authRouter = require("./routes/authroutes");
const PORT = 5001;

app.use(express.json());

app.use("/api/auth", authRouter); 

app.listen(PORT, () => {
    console.log(`Auth Service is listen at ${PORT}`);
});