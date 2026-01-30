"use client";

import { useRequireAuth } from "@/lib/auth/useRequireAuth";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { checking } = useRequireAuth();

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center text-stone-500">
        Checking authentication…
      </div>
    );
  }

  return <>{children}</>;
}
