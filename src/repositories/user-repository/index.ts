import { Prisma, users } from "@prisma/client";
import { prisma } from "@/config";

async function findByEmail(email: string,) {
  return await prisma.users.findFirst({
    where: {
      email
    }
  });
}

async function createUser(data: Omit<users, "id" | "createdAt" | "updatedAt">) {
  return prisma.users.create({
    data: {
      email: data.email,
      password: data.password,
      nickname: data.nickname,
    }
  });
}

async function createSessionToken(data: Prisma.sessionsUncheckedCreateInput) {
  return prisma.sessions.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  createUser,
  createSessionToken
};

export default userRepository;
