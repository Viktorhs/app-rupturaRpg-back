import { users } from "@prisma/client";
import bcrypt from "bcrypt";
import userRepository from "@/repositories/user-repository";
import jwt from "jsonwebtoken";

type user = Omit<users, "id" | "createdAt" | "updatedAt">

const invalidCredentialsError = {
  name: "InvalidCredentialsError",
  message: "email or password are incorrect"
};

async function createUser({ nickname, email, password }: user): Promise<users> {
  await validUniqueEmail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  const data = {
    nickname,
    email,
    password: hashedPassword,
  };
  
  return await userRepository.createUser(data);
}

async function signIn({ email, password }: Omit<user, "nickname">) {
  const user = await getUserOrFail(email);
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw invalidCredentialsError;
  }

  const token = await createSession(user.id);

  return {
    email: user.email,
    nickname: user.nickname,
    token
  };
}

async function validUniqueEmail(email: string) {
  const isValid = await userRepository.findByEmail(email);
  
  if(isValid) {
    throw {
      name: "DuplicatedEmailError",
      message: "There is already an user with given email",
    };
  }
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await userRepository.createSessionToken({
    token,
    userId,
  });

  return token;
}

async function getUserOrFail(email: string) {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw invalidCredentialsError;
  }

  return user;
}

const userService = {
  createUser,
  signIn
};
  
export default userService;
  
