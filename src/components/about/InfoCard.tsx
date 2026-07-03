import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <article className="rounded-[2rem] border border-subtle bg-surface p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-inverse text-on-primary">
        <Icon className="size-5" aria-hidden="true" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-primary">
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-secondary">{description}</p>
    </article>
  );
}
