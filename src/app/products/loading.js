// app/products/loading.jsx

import ProtectedRoute from "@/components/ProtectedRoute";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <ProtectedRoute>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border bg-card p-4 shadow-sm"
                    >
                        {/* Image */}
                        <div className="flex justify-center">
                            <Skeleton className="h-[200px] w-[180px] rounded-xl" />
                        </div>

                        {/* Content */}
                        <div className="mt-4 space-y-3">
                            {/* Title */}
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-3/4" />

                            {/* Description */}
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />

                            {/* Price + Category */}
                            <div className="flex items-center justify-between pt-2">
                                <Skeleton className="h-8 w-20" />
                                <Skeleton className="h-7 w-24 rounded-full" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ProtectedRoute>
    );
}