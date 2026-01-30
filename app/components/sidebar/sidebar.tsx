"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createBrowserSupabaseClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
    });
  }, [supabase]);

  const logout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setLoading(false);
    onClose(); // close sidebar on mobile
    router.replace("/login");
  };

  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64
          bg-stone-50 border-r border-stone-200
          transition-transform duration-300
          md:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col px-4 py-5">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-stone-900 text-white flex items-center justify-center text-sm font-bold">
              TBL
            </div>
            <span className="font-semibold text-stone-800">
              The Barber’s Lounge
            </span>
          </div>

          {/* User */}
          <div className="mb-6 rounded-lg bg-white border border-stone-200 p-3">
            <p className="text-xs text-stone-500">Logged in as</p>
            <p className="text-sm font-medium text-stone-800">
              {email ?? "Loading…"}
            </p>
          </div>

          {/* Nav */}
          <nav className="flex-1 space-y-1 text-sm">
            {[
              "Dashboard",
              "Appointments",
              "Employees",
              "Services",
              "Reports",
              "Settings",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg px-3 py-2 text-stone-600 hover:bg-stone-200/60 hover:text-stone-900 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </nav>

          {/* Logout */}
          <div className="mt-4">
            <Button variant="secondary" loading={loading} onClick={logout}>
              Logout
            </Button>
          </div>

          <div className="mt-4 text-xs text-stone-400 text-center">
            © TBL System
          </div>
        </div>
      </aside>
    </>
  );
}
