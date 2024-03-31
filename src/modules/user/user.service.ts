import { z } from "zod";
import { userCreateSchema } from "../../schemas/user";
import bcrypt from "bcrypt";
import prisma from "../../../db/prisma";

export const LogInUserService = async (
  data: z.infer<typeof userCreateSchema>["body"],
) => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
    // select: { password: false },
  });
  if (user) {
    const { password, ...others } = user;
    // const encrypted = bcrypt.hashSync(data.password, 12);
    const check = await bcrypt.compare(data.password, password);
    // console.log(check, password);
    if (!check) {
      throw new Error("User Not Authorized");
    }

    return others;
  } else throw new Error("User Not Found");
};
export const RegisterUserService = async (
  data: z.infer<typeof userCreateSchema>["body"],
) => {
  const encryptedPassword = bcrypt.hashSync(data.password, 12);
  const user = await prisma.user.create({
    data: { ...data, password: encryptedPassword },
  });
  return user;
};
