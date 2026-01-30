"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export function useRequireAuth(redirectTo = "/login") {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();

    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace(redirectTo);
      } else {
        setChecking(false);
      }
    });
  }, [router, redirectTo]);

  return { checking }; // 👈 THIS was missing
}
