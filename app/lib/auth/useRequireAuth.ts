"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export function useRequireAuth(redirectTo = "/login") {
  const router = useRouter();

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();

    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace(redirectTo);
      }
    });
  }, [router, redirectTo]);
}
