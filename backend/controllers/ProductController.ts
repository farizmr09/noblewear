import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const response = await prisma.PRODUCT_DATA.findMany();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductsByName = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const pattern: string = req.query.pattern as string;
  const max: number = parseInt(req.query.max as string);
  const min: number = parseInt(req.query.min as string);
  const size: string = req.query.size as string;
  const color: string = req.query.color as string;
  try {
    const response = await prisma.PRODUCT_DATA.findMany({
      where: {
        BRAND: {
          contains: pattern,
        },
        PRICE: {
          lte: !isNaN(max) ? max : undefined,
          gte: !isNaN(min) ? min : undefined,
        },
        SIZE: size,
        COLOR: color,
        // pagination
      },
    });
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};
