"use client";

import Spinner from "@/components/Spinner";
import { useAuthState } from "@/providers/auth";
import { usePathname, useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { loading, authenticated } = useAuthState();
  const router = useRouter();
  const pathname = usePathname();
  const prevAuth = useRef(authenticated);

  const isAuthPath = useMemo(
    () => pathname === "/login" || pathname === "/signup",
    [pathname]
  );
  const changeRouter = useCallback(() => {
    if (loading) return;
    if (authenticated) {
      isAuthPath && router.replace("/");
    } else {
      !isAuthPath && router.replace("/login");
    }
  }, [authenticated, isAuthPath, loading, router]);

  useLayoutEffect(() => {
    if (prevAuth.current === authenticated) return;
    prevAuth.current = authenticated;

    changeRouter();
  }, [loading, authenticated, router, changeRouter, isAuthPath]);

  useEffect(() => {
    changeRouter();
  }, [loading, authenticated, router, changeRouter, isAuthPath]);

  return (
    <main className="flex w-full min-h-[100vh] relative">
      {!isAuthPath && <Sidebar />}
      <div className="flex flex-col flex-grow items-center justify-start bg-gray-100 h-[100vh]">
        <Header />
        {children}
      </div>
      {loading && <Spinner />}
    </main>
  );
};

export default PageLayout;
