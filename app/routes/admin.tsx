import React from "react";
import { Container } from "~/components/container";
import { getSession } from "./sessions";
import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const user = session.get("currentUser");
  console.log(session.data.currentUser);

  console.log(user?.email);
  return { props: {} };
}

export default function Admin() {
  return <Container className="mx-w-3xl">admin page</Container>;
}
