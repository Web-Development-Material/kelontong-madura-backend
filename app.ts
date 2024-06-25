import express, { Application } from "express";
import { productRouter } from "./src/routes/productRouter.ts";

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/warung_kelontong/", productRouter);

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
