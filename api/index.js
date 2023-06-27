import express from "express";
import customerRoutes from "./routes/customer.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/customer", customerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
