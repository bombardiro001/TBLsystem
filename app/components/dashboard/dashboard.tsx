import PageHeader from "@/components/ui/PageHeader";
import StatCard from "@/components/ui/StatCard";
import Card from "@/components/ui/Card";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" subtitle="Overview of your barber shop" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Appointments Today" value="12" />
        <StatCard title="Active Barbers" value="5" />
        <StatCard title="Monthly Revenue" value="₱ 48,200" />
      </div>

      <Card className="p-6">
        <p className="text-sm font-medium text-stone-600">Activity</p>
        <div className="mt-4 h-40 rounded-lg bg-stone-100 flex items-center justify-center text-stone-400">
          Chart placeholder
        </div>
      </Card>
    </div>
  );
}
