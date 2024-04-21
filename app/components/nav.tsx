import { Link } from "@remix-run/react";
import { Button } from "./ui/button";

export function Nav() {
  return (
    <nav className="flex bg-sky-400/50 text-cyan-900 justify-between w-full items-center p-8 text-xl">
      <Button variant="link" className="text-3xl" asChild>
        <Link to="/">TranxHub</Link>
      </Button>
      <ul className="flex gap-6">
        <li>
          <Button variant="link" className="text-lg" asChild>
            <Link to="/">Home</Link>
          </Button>
        </li>
        <li>
          <Button variant="link" className="text-lg" asChild>
            <Link to="/about">About</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
