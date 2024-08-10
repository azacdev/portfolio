import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <>
      {Array.from({ length: 6 }, (_, i) => (
        <div
          className="flex flex-col space-y-5 border border-dark dark:border-light p-1 rounded-md"
          key={i}
        >
          <Skeleton className="h-[225px] w-full max-w-[350px] rounded-md bg-dark/50 dark:bg-light/50" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-full max-w-[350px] bg-dark/50 dark:bg-light/50" />
            <Skeleton className="h-5 w-full max-w-[310px] bg-dark/50 dark:bg-light/50" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full max-w-[350px] bg-dark/50 dark:bg-light/50" />
            <Skeleton className="h-4 w-full max-w-[300px] bg-dark/50 dark:bg-light/50" />
            <Skeleton className="h-4 w-full max-w-[300px] bg-dark/50 dark:bg-light/50" />
            <Skeleton className="h-4 w-full max-w-[300px] bg-dark/50 dark:bg-light/50" />
          </div>
        </div>
      ))}
    </>
  );
}
