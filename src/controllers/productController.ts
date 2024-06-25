import { Request, Response } from "express";
import madura from "../../dummy/madura.json" assert { type: "json" };

export const getProducts = (res: Response) => {
  return res.send(madura);
};

export const getProductById = (req: Request, res: Response) => {
  const { id } = req.params;
  const product = madura.productsData.find(
    (productid) => productid.id === parseInt(id)
  );
  if (!product) {
    res.status(404).send("product tak di temukan");
  }
  res.send(product);
};

export const createProduct = (req: Request, res: Response) => {
  const prod = req.body;
  const newProduct = { ...prod, id: madura.productsData.length + 1 };
  madura.productsData.push(newProduct);
  return res.status(201).send(newProduct);
};

export const updateProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const updateStock = req.body;
  const index = madura.productsData.findIndex(
    (madura) => madura.id === parseInt(id)
  );
  if (index !== -1) {
    madura.productsData[index] = {
      ...madura.productsData[index],
      ...updateStock,
    };
    return res.status(200).send(madura.productsData[index]);
  }
  return res.status(404).send("Product not found");
};

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = madura.productsData.findIndex(
    (madura) => madura.id === parseInt(id)
  );
  if (index !== -1) {
    const [deleteProduct] = madura.productsData.splice(index, 1);
    return res.status(200).send(deleteProduct);
  }
};
