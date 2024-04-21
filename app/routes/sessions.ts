import { createCookieSessionStorage } from "@remix-run/node";
interface ICurrentUser {
  id: number;
  email: string;
  firstname: string;
  surname: string;
}

export interface SessionData {
  currentUser: ICurrentUser;
}

export interface SessionFlashData {
  error: string;
}

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: "__tranxhub_session",
      secrets: ["somesecrets"],
      sameSite: "lax",
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
  });

export { getSession, commitSession, destroySession };
