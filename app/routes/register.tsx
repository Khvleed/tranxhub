import { Container } from "~/components/container";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import college from "~/Assets/college.jpg";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { prisma } from "~/libs/prisma";
import { Label } from "@radix-ui/react-label";
import { commitSession, getSession } from "./sessions";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const firstname = formData.get("first-name") as string;
  const surname = formData.get("surname") as string;
  const othername = formData.get("other-name") as string;
  const email = formData.get("email") as string;
  const regno = formData.get("reg-no") as string;
  const dob = formData.get("dob") as string;
  const phone = Number(formData.get("phone-no"));
  const address = formData.get("address") as string;
  const password = formData.get("password") as string;

  try {
    const session = await getSession(request.headers.get("Cookie"));

    const user = await prisma.user.create({
      data: {
        firstname,
        surname,
        othername,
        email,
        regno,
        dob,
        phone,
        address,
        password,
      },
      select: {
        id: true,
        email: true,
        firstname: true,
        surname: true,
      },
    });
    const commitSessionOptions = {
      headers: {
        "Set-Cookie": await commitSession(session, {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        }),
      },
    };

    if (user) {
      session.set("currentUser", user);
      return redirect("/admin", commitSessionOptions);
    }
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while creating user");
  }

  //   return null;
}

export default function Register() {
  return (
    <Container className="bg-1 bg-no-repeat bg-cover min-h-screen">
      <div className="max-w-xl mx-auto pt-12">
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
              <Label htmlFor="first-name">First Name</Label>
              <Input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First name"
                className="mb-4"
                required
              />
              <Label htmlFor="surname">Surname</Label>
              <Input
                type="text"
                name="surname"
                placeholder="Surname"
                className="mb-4"
                required
              />
              <Label htmlFor="other-name">Other Name</Label>
              <Input
                type="text"
                name="other-name"
                placeholder="Other name"
                className="mb-4"
              />
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="mb-4"
                required
              />
              <Label htmlFor="reg-no">Reg. No.</Label>
              <Input
                type="text"
                name="reg-no"
                placeholder="Reg. No."
                className="mb-4"
                required
              />{" "}
              <Label htmlFor="dob">DOB</Label>
              <Input
                type="date"
                name="dob"
                placeholder="DOB"
                className="mb-4"
                required
              />
              <Label htmlFor="phone-no">Phone No.</Label>
              <Input
                type="tel"
                name="phone-no"
                placeholder="Phone No."
                className="mb-4"
                required
              />{" "}
              <Label htmlFor="address">Address</Label>
              <Input
                type="address"
                name="address"
                placeholder="Address"
                className="mb-4"
                required
              />
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                className="mb-4"
                required
              />
              <Button type="submit" className="mt-8 self-end">
                Register
              </Button>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
