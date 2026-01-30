"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const register = async () => {
    setLoading(true);
    setError(null);

    const supabase = createBrowserSupabaseClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    // optional: email confirmation may be required
    router.replace("/login");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div className="w-full max-w-sm rounded bg-white p-6 space-y-4">
        <h1 className="text-2xl font-bold">Register</h1>

        <input
          className="w-full border p-2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          onClick={register}
          disabled={loading}
          className="w-full bg-black py-2 text-white"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="underline">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
