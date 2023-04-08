import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const loginOne = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const username: string = req.body.USERNAME as string;
  try {
    const response = await prisma.USER_DATA.findMany({
      where: {
        USERNAME: username,
      },
    });
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

// export const registerOne = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     await userServices.register(req.body);
//     res.status(200).send("Inserted successfully");
//   } catch (error) {
//     return res.status(500).send(getErrorMessage(error));
//   }
// };
