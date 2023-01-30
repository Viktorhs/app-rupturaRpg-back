import { Prisma, users } from "@prisma/client";
import { prisma } from "@/config";

async function findByEmail(email: string,) {
  return prisma.users.findUnique({
    where: {
      email
    }
  });
}

async function create(data: Omit<users, "id" | "createdAt" | "updatedAt">) {
  return prisma.users.create({
    data,
  });
}

async function createSessionToken(data: Prisma.sessionsUncheckedCreateInput) {
  return prisma.sessions.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  create,
  createSessionToken
};

export default userRepository;
