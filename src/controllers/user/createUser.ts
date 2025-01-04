import { db } from "@/db/connect";
import { userSchema } from "@/db/schema/user";
import { CreateUserBody } from "@/types";
import { encryptPassword } from "@/utils/encryptPassword";
import { type Request, type Response } from "express";

export async function newUser(
  request: Request<object, object, CreateUserBody, object>,
  response: Response
): Promise<void> {
  const { email, passwordHash, role, fullName } = request.body;

  try {
    const encryptPass = await encryptPassword(passwordHash);
    await db
      .insert(userSchema)
      .values({ email, passwordHash: encryptPass, role, fullName });
    response.status(200);
  } catch (error) {
    response.status(500);
  }
}
