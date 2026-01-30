export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl bg-white border border-stone-200 p-4 ${className}`}
    >
      {children}
    </div>
  );
}
