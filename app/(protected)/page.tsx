"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Dashboard from "@/components/dashboard/dashboard";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-stone-100">
      {/* mobile header */}
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center gap-3 bg-white border-b p-4 md:hidden">
        <button onClick={() => setSidebarOpen(true)}>☰</button>
        <span>Dashboard</span>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <section className="pt-16 md:pt-0 md:ml-64 p-4 md:p-6">
        <Dashboard />
      </section>
    </main>
  );
}
