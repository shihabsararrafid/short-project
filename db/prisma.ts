import { PrismaClient } from "@prisma/client";
// import  {PrismaClient}  from "@prisma/client";
const globalForPrisma = global as unknown as { prisma: PrismaClient };
// const prisma = global.prisma || new PrismaClient();

// if (process.env.NODE_ENV === "development") global.prisma = prisma;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
