import type { MetaFunction } from "@remix-run/node";
import { Container } from "~/components/container";
import { Header } from "~/components/header";

export const meta: MetaFunction = () => {
  return [
    { title: "TranxHub" },
    { name: "description", content: "Welcome to TranxHub!" },
  ];
};

export default function Index() {
  return (
    <Container className="bg-1 bg-no-repeat bg-cover">
      <Header />
    </Container>
  );
}
