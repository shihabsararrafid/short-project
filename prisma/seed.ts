import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("admin", 12);
  const user = await prisma.user.upsert({
    where: { email: "admin@gizantech.com" },
    update: {},
    create: {
      email: "admin@rafid.com",
      password,
      role: "superadmin",
    },
  });
  console.log({ user });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
