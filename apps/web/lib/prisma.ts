import { Prisma, PrismaClient } from "@everything/database";

let prisma: PrismaClient;
declare global {
  // eslint-disable-next-line no-unused-vars
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  // In production mode, create a new instance of PrismaClient
  prisma = new PrismaClient();
} else {
  // In development, use a global variable to ensure only one instance is used
  // This prevents a common issue where hot-reloading creates new instances of PrismaClient
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
