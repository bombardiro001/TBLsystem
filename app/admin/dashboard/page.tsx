"use client";

import { useRequireAuth } from "@/lib/auth/useRequireAuth";

export default function AdminDashboardPage() {
  useRequireAuth("/login");

  return <h1>Admin Dashboard</h1>;
}
