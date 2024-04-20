import type { MetaFunction } from "@remix-run/node";
import { Container } from "~/components/container";
import { Header } from "~/components/header";
import { Nav } from "~/components/nav";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Container className="bg-1 bg-no-repeat bg-cover">
      <Nav />
      <Header />
    </Container>
  );
}
