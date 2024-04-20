import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full flex flex-col min-h-[600px] items-center justify-center">
      <h1 className="text-5xl text-slate-600 capitalize">
        {"-->>"} Your transcript journey starts here.{" <<--"}
      </h1>
      <Button className="mt-8" size="lg">
        Get Started
      </Button>
    </header>
  );
}
