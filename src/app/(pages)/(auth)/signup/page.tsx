"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { signUp } from "@/lib/auth";
import { FormEventHandler, useState } from "react";

export default function SignupPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignup: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signUp(email, password, name);
    setLoading(false);
  };

  return (
    <div className="mt-32 max-w-xs w-full">
      <h2 className="text-3xl font-bold mb-6">Sign up</h2>
      <form className="form-control w-full mb-4" onSubmit={handleSignup}>
        <Input
          type="text"
          name="name"
          id="name"
          label="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Oleksii Shushkevych"
          disabled={loading}
        />
        <Input
          type="email"
          name="email"
          id="email"
          label="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@test.com"
          disabled={loading}
        />
        <Input
          type="password"
          name="password"
          id="password"
          label="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="admin123"
          disabled={loading}
        />
        <Button type="submit" className="btn-primary w-full" loading={loading}>
          SIGN UP
        </Button>
      </form>
    </div>
  );
}
