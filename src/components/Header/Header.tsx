"use client";

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import { useAuthDispatch, useAuthState } from "@/providers/auth";
import { useCallback, useMemo } from "react";
import { ImExit } from "react-icons/im";
import Link from "next/link";
import { logout } from "@/lib/auth";

const Header = () => {
  const { loading, authenticated, user } = useAuthState();
  const pathname = usePathname();
  const dispatch = useAuthDispatch();
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
  const handleSignOut = useCallback(() => {
    dispatch({ type: "START_LOADING" });
    logout();
  }, [dispatch]);

  return (
    <div className="border-b shadow-sm sticky top-0 z-40 w-full bg-white">
      <header className="flex justify-between items-center px-10 mx-auto h-16">
        <h1 className="text-2xl font-bold">{title}</h1>
        {!loading && (
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
                  <p className="text-[#9AA8BD] md:block hidden">
                    Welcome {user?.name}
                  </p>
                  <Link href={"/"} onClick={handleSignOut}>
                    <ImExit className="text-2xl text-[#D64979] md:block hidden  cursor-pointer" />
                  </Link>
                </>
              )}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
