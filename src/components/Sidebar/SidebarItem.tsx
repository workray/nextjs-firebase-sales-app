import Link from "next/link";
import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { SidebarItemProps } from "./types";

export default function SidebarItem({
  icon: Icon,
  label,
  href,
  onClick,
}: SidebarItemProps) {
  return (
    <div className="w-full flex items-center">
      <Icon className="text-[#9AA8BD] hover:text-white mr-2" />
      <Link
        href={href}
        className="text-[#9AA8BD] hover:text-white"
        onClick={onClick}
      >
        {label}
      </Link>
    </div>
  );
}
