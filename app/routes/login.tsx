import { Form } from "@remix-run/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import college from "~/Assets/college.jpg";
import { Input } from "~/components/ui/input";
import { Container } from "~/components/container";
import { Button } from "~/components/ui/button";

export default function Login() {
  return (
    <Container className="bg-1 bg-no-repeat bg-cover min-h-screen">
      <div className="max-w-md mx-auto pt-12">
        <Card className="">
          <CardHeader className="flex items-center justify-between">
            <img src={college} alt="College" className="h-20 w-36" />
            <div>
              <CardTitle className="text-center">Register</CardTitle>
              <CardDescription>TranxHub Registration</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Form method="POST">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="mt-4"
              />
              <Input
                type="password"
                name="name"
                placeholder="Password"
                className="mt-4"
              />

              <Button type="submit" className="mt-8 self-end">
                Log in
              </Button>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
