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

    router.replace("/");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div className="w-full max-w-sm">
        <Card className="space-y-4">
          <h1 className="text-2xl font-bold">Login</h1>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
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

            <Button type="submit" loading={loading}>
              Login
            </Button>
          </form>
        </Card>

        <p className="mt-4 text-sm text-center text-white">
          No account?{" "}
          <a href="/register" className="underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}
