"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    setError(null);

    const supabase = createBrowserSupabaseClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    // redirect AFTER successful login
    router.replace("/"); // change later if needed
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div className="w-full max-w-sm rounded bg-white p-6 space-y-4">
        <Card className="w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-bold">Login</h1>

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <Button loading={loading} onClick={login}>
            Login
          </Button>
        </Card>

        <p className="text-sm text-center">
          No account?{" "}
          <a href="/register" className="underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}
