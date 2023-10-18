import Link from "next/link";
import { RiDashboardFill } from "react-icons/ri";
import { BsFillBarChartFill, BsPersonFillLock } from "react-icons/bs";
import { MdShoppingCart, MdCategory } from "react-icons/md";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import { SidebarItemProps } from "./types";
import SidebarItem from "./SidebarItem";

const items: SidebarItemProps[] = [
  { icon: RiDashboardFill, label: "Dashboard", href: "/" },
  { icon: BsFillBarChartFill, label: "Sales", href: "/sales" },
  { icon: MdShoppingCart, label: "Products", href: "/products" },
  { icon: MdCategory, label: "Categories", href: "/categories" },
  {
    icon: BsPersonFillLock,
    label: "Log Out",
    href: "#",
    onClick: () => logout,
  },
];
export default function SideNav() {
  return (
    <div className="w-60 md:block hidden relative">
      <nav className="w-60 fixed left-0 h-[100vh] bg-[#160F3F]">
        <div className="flex flex-col w-full p-8 space-y-8">
          <Link
            href="/"
            className="hover:text-white mt-4 mb-8 font-bold text-xl text-gray-300"
          >
            InStock
          </Link>
          {items.map((item: SidebarItemProps) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      </nav>
    </div>
  );
}
