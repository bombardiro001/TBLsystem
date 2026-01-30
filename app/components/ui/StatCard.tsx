import Card from "./Card";

export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <Card>
      <p className="text-sm text-stone-500">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-stone-800">{value}</p>
    </Card>
  );
}
