"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth-store";

export function MessageAuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  useEffect(() => {
    if (hasHydrated && !user) {
      toast.info("Please log in first to access messages.", {
        id: "message-auth-required",
      });
      router.replace("/login");
    }
  }, [hasHydrated, router, user]);

  if (!hasHydrated || !user) return null;

  return children;
}
