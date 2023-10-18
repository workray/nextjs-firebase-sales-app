"use client";

import Spinner from "@/components/Spinner";
import { useAuthState } from "@/providers/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import { logout } from "@/lib/auth";
import { Header } from "@/components/Header";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { loading, authenticated } = useAuthState();
  const router = useRouter();
  const pathname = usePathname();
  const prevAuth = useRef(authenticated);

  useLayoutEffect(() => {
    if (prevAuth.current === authenticated) return;
    prevAuth.current = authenticated;

    if (!loading) router.replace(authenticated ? "/dashboard" : "/login");
    logout();
  }, [loading, authenticated, router]);

  useEffect(() => {
    if (loading) return;
    if (pathname === "/login" || pathname === "/signup") {
      authenticated && router.replace("/dashboard");
    } else if (!authenticated) {
      router.replace("/login");
    }
  }, [authenticated, loading, pathname, router]);

  if (loading) return <Spinner />;

  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      {children}
    </main>
  );
};

export default PageLayout;
