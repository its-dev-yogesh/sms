import { cn } from '@/utils/cn';

export default function CardContainer({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('p-4 bg-white shadow-md rounded-lg', className)}>
      {children}
    </section>
  );
}
