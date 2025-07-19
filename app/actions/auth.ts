"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setAuthCookie(token: string) {
  (await cookies()).set("sessionToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function clearAuthCookie() {
  (await cookies()).delete("sessionToken");
  redirect("/login");
}
