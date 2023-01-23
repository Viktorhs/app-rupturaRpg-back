import { users } from "@prisma/client";
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

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;
