"use client";
import { login } from "@/lib/auth";
import React, { FormEventHandler, useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Sign in </h2>
      <form
        className="form-control w-full max-w-xs mb-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="label">
          <span className="label-text">Email Address</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input input-bordered mb-4 w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@test.com"
        />
        <label htmlFor="password" className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="input input-bordered mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="admin123"
        />
        <button type="submit" className="btn btn-primary">
          LOG IN
        </button>
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
    </>
  );
}
