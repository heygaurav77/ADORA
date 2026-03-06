"use client";

import Link from "next/link";
import { Search, HelpCircle, User, ShoppingBag, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 text-gray-700">
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden md:flex gap-4 text-xs font-medium uppercase tracking-tight text-gray-500">
            <Link href="#" className="hover:text-black">New In</Link>
            <Link href="#" className="hover:text-black">Clothing</Link>
            <Link href="#" className="hover:text-black">T-Shirts</Link>
            <Link href="#" className="hover:text-black">Shoes</Link>
          </div>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-[0.15em] uppercase">
          ADORA
        </Link>

        <div className="flex items-center gap-1 md:gap-4 text-sm font-medium">
          <button className="hidden md:flex items-center gap-2 hover:text-gray-600">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
          <button className="hidden md:flex items-center gap-2 hover:text-gray-600">
            <HelpCircle className="w-4 h-4" />
            <span>Help</span>
          </button>
          <button className="flex items-center gap-2 hover:text-gray-600">
            <User className="w-4 h-4" />
            <span className="hidden md:inline">My account</span>
          </button>
          <button className="relative p-2 hover:text-gray-600">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
