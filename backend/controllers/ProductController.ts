import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const response = await prisma.pRODUCT_DATA.findMany();
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
  try {
    const response = await prisma.pRODUCT_DATA.findMany({
      where: {
        BRAND: {
          contains: pattern,
        },
      },
    });
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};
