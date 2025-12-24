import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="flex flex-col h-full">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-5 w-8 rounded-full" />
            </div>
            <Skeleton className="h-4 w-1/2 mt-2" />
          </CardHeader>
          <CardContent className="flex-1">
            <Skeleton className="h-8 w-24" />
          </CardContent>
          <div className="p-6 pt-4 border-t">
            <Skeleton className="h-10 w-full" />
          </div>
        </Card>
      ))}
    </div>
  );
}
