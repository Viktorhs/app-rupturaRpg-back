import { users } from "@prisma/client";
import bcrypt from "bcrypt";
import userRepository from "@/repositories/user-repository";

type user = Omit<users, "id" | "createdAt" | "updatedAt">

export async function createUser({ nickname, email, password }: user): Promise<users> {
  await validUniqueEmail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    nickname,
    email,
    password: hashedPassword,
  });
}

async function validUniqueEmail(email: string) {
  const isValid = await userRepository.findByEmail(email);
  if(isValid.email) {
    throw {
      name: "DuplicatedEmailError",
      message: "There is already an user with given email",
    };
  }
}

const userService = {
  createUser,
};
  
export default userService;
  
