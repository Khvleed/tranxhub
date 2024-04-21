import { Nav } from "./nav";
import { Outlet } from "@remix-run/react";

export function RootLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
