import express, { Application } from "express";
import { productRouter } from "./src/routes/productRouter";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/warung_kelontong_madura/", productRouter);

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
