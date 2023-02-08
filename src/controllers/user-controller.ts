import { createUserSchema, userSchema } from "./../schemas/user-schemas";
import { Request, Response } from "express";
import httpStatus from "http-status";
import userService from "@/services/user-service";

export async function userPost(req: Request, res: Response) {
  const { email, nickname, password } = req.body;
  const isValid = createUserSchema.validate({
    email,
    nickname,
    password
  });

  if(isValid.error) {
    res.send(httpStatus.UNPROCESSABLE_ENTITY); 
  }

  try {
    const user = await userService.createUser({ nickname, email, password });
    return res.status(httpStatus.CREATED).send({
      ...user
    });
  } catch (error) {
    if(error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function sessionPost(req: Request, res: Response) {
  const { email, password } = req.body;
  const isValid = userSchema.validate({
    email,
    password
  });
  
  if(isValid.error) {
    res.send(httpStatus.UNPROCESSABLE_ENTITY); 
  }

  try {
    const session = await userService.signIn({ email, password });
    return res.status(httpStatus.OK).send(session);
  } catch (error) {
    return res.sendStatus(httpStatus.UNAUTHORIZED);
  }
}
