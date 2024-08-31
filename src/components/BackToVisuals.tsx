"use client";

import paths from "@/paths";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoveLeft } from "lucide-react";

export default function BackToVisuals() {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("/risks/") && (
        <Link
          href={paths.visualPage()}
          className="flex items-center gap-1 hover:underline text-xl font-semibold color-primary/20"
        >
          <MoveLeft />
          Back to Visuals
        </Link>
      )}
    </>
  );
}
