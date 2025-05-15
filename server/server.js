const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
const cors = require("cors");

const app = express();
const PORT = 5172;

app.use(
  cors({
    origin: "http://localhost:5173", // 프론트엔드 주소
    credentials: true, // 쿠키 전송 필요 시 true
  })
);
app.use(bodyParser.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
