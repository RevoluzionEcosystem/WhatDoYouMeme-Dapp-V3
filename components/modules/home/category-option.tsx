import { Suspense } from "react";
import { Skeleton } from "../../ui/skeleton";

export default function CategoryOption({name, image, description, className}) {
    return (
        <div className="relative block rounded-xl overflow-hidden">

            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <Suspense fallback={
                    <Skeleton className="h-6 w-1/4 mb-3 mx-auto"/>
                }>
                    <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={image} alt={name} />
                </Suspense>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className={className}>
                    {description}
                </div>
            </div>

        </div>
    )
}