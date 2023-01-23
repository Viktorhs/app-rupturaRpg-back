import { Request, Response } from "express";
import httpStatus from "http-status";
import userService from "@/services/user-service";

export async function userPost(req: Request, res: Response) {
  const { email, nickname, password } = req.body;

  try {
    const user = await userService.createUser({ nickname, email, password });
    return res.status(httpStatus.CREATED).send({
      ...user
    });
  } catch (error) {
    if(error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST);
  }
}
