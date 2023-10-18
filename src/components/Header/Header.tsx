"use client";
import Link from "next/link";
import NavItem from "./NavItem";
import { useAuthState } from "@/providers/auth";

const Header = () => {
  const { authenticated } = useAuthState();
  return (
    <div className="border-b shadow-sm sticky top-0 z-40 w-full">
      <header className="flex justify-between items-center px-10 mx-auto">
        <Link href={"/"}>
          <h1>Sales App</h1>
        </Link>
        <div>
          <ul className="flex space-x-10">
            {!authenticated && (
              <>
                <NavItem label="Login" route="/login" />
                <NavItem label="Register" route="/signup" />
              </>
            )}
            {authenticated && <NavItem label="Profile" route="/profile" />}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
