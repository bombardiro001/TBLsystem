export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-stone-800">{title}</h1>
      {subtitle && <p className="text-sm text-stone-500">{subtitle}</p>}
    </div>
  );
}
