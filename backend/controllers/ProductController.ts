import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProductsByName = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const brand: string = req.query.brand as string;
  const max: number = parseInt(req.query.max as string);
  const min: number = parseInt(req.query.min as string);
  const size: string = req.query.size as string;
  const color: string = req.query.color as string;
  const page: number = parseInt(req.query.page as string);
  try {
    const response = await prisma.PRODUCT_DATA.findMany({
      skip: !isNaN(page) ? page * 10 : 0,
      take: 10,
      where: {
        BRAND: {
          contains: brand,
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
