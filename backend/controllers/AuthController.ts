import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwtAuth from "../utils/jwtAuth";
import createHttpError from "http-errors";

const prisma = new PrismaClient();

// body
export const login = async (
   req: express.Request,
   res: express.Response
): Promise<void> => {
   try {
      const user = await prisma.USER_DATA.findFirst({
         where: {
            USERNAME: req.body.USERNAME,
         },
      });
      const checkPassword = bcrypt.compareSync(
         req.body.PASSWORD,
         user!.PASSWORD
      );
      if (!checkPassword)
         throw createHttpError.Unauthorized(
            "Email address or password is not valid!"
         );
      const accessToken = await jwtAuth.signAccessToken(user);
      res.status(200).json({ ...user, accessToken });
   } catch (error: any) {
      res.status(500).json({ msg: error.message });
   }
};

// body
export const register = async (
   req: express.Request,
   res: express.Response
): Promise<void> => {
   try {
      req.body.PASSWORD = bcrypt.hashSync(req.body.PASSWORD, 8);
      const user = await prisma.USER_DATA.create({
         data: req.body,
      });
      req.body.ACCESS_TOKEN = await jwtAuth.signAccessToken(user);
      res.status(200).json(req.body);
   } catch (error: any) {
      res.status(500).json({ msg: error.message });
   }
};
