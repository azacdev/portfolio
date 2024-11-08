import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full h-full space-y-7 inline-block z-0 bg-light dark:bg-dark px-4 sm:px-8 lg:px-36 xl:px-60 py-32 md:py-40">
        <div className="flex flex-col space-y-5">
          <div className="space-y-5">
            <Skeleton className="h-3 w-full max-w-[350px] bg-dark/50 dark:bg-light/50" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-full max-w-[550px] bg-dark/50 dark:bg-light/50" />
              <Skeleton className="h-4 w-full max-w-[300px] bg-dark/50 dark:bg-light/50" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <div className="flex gap-3 items-center">
              <Skeleton className="h-6 w-16 bg-dark/50 dark:bg-light/50 roundedn-full" />
              <Skeleton className="h-6 w-16 bg-dark/50 dark:bg-light/50 roundedn-full" />
              <Skeleton className="h-6 w-16 bg-dark/50 dark:bg-light/50 roundedn-full" />
            </div>

            <div className="flex gap-3 justify-between items-center md:justify-normal">
              <Skeleton className="h-6 w-6 bg-dark/50 dark:bg-light/50 roundedn-[50%]" />
              <Skeleton className="h-6 w-6 bg-dark/50 dark:bg-light/50 roundedn-[50%]" />
              <Skeleton className="h-6 w-6 bg-dark/50 dark:bg-light/50 roundedn-[50%]" />
            </div>
          </div>

          <Skeleton className="h-[300px] md:h-[420px] w-full bg-dark/50 dark:bg-light/50 rounded-md" />

          <div className="space-y-3">
            <Skeleton className="h-4 w-full bg-dark/50 dark:bg-light/50" />
            <Skeleton className="h-4 w-full bg-dark/50 dark:bg-light/50" />
            <Skeleton className="h-4 w-full bg-dark/50 dark:bg-light/50" />
            <Skeleton className="h-4 w-full bg-dark/50 dark:bg-light/50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
