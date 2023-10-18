"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { login } from "@/lib/auth";
import React, { FormEventHandler, useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  console.log("login");
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login(email, password);
    setLoading(false);
  };

  return (
    <div className="mt-32 max-w-xs w-full">
      <h2 className="text-3xl font-bold mb-6">Sign in</h2>
      <form className="form-control w-full mb-4" onSubmit={handleSubmit}>
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
          LOG IN
        </Button>
      </form>
      <p className="text-gray-400 text-center text-sm">
        &copy; Copyright {new Date().getFullYear()} by{" "}
        <a
          href="https://github.com/dha-stix"
          target="_blank"
          className="text-blue-300 text-sm"
        >
          Olesii Shushkevych
        </a>
      </p>
    </div>
  );
}
