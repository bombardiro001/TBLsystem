"use client";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  loading?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "button",
  loading = false,
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) {
  const base = "w-full rounded-lg px-4 py-2 text-sm font-medium transition";

  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-50",
    secondary: "border border-stone-200 text-stone-700 hover:bg-stone-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
