import { Router } from "express";

import { createUserSchema, userSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { userPost, sessionPost } from "@/controllers";

const usersRouter = Router();

usersRouter.post("/sign-up", validateBody(createUserSchema), userPost);
usersRouter.post("/sign-in", validateBody(userSchema), sessionPost);

export { usersRouter };
