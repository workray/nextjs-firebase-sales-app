"use client";

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import { useAuthState } from "@/providers/auth";
import { useMemo } from "react";

const Header = () => {
  const { authenticated } = useAuthState();
  const pathname = usePathname();
  const title = useMemo(() => {
    if (!authenticated) return "";
    switch (pathname) {
      case "/sales":
        return "Sales";
      case "/products":
        return "Products";
      case "/categories":
        return "Categories";
      default:
        return "Dashboard";
    }
  }, [authenticated, pathname]);
  return (
    <div className="border-b shadow-sm sticky top-0 z-40 w-full bg-white">
      <header className="flex justify-between items-center px-10 mx-auto">
        <h1>{title}</h1>
        <div>
          <ul className="flex space-x-10">
            {!authenticated && (
              <>
                <NavItem label="Login" route="/login" />
                <NavItem label="Register" route="/signup" />
              </>
            )}
            {authenticated && (
              <>
                <NavItem label="Profile" route="/profile" />
              </>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
