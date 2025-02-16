import React from "react";
import { Skeleton } from "./skeleton";

const SkeletonCard: React.FC = () => {
  return [...Array(2)].map((_, index) => (
    <div key={index}>
      <div className="space-y-2 mb-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-3 w-[200px]" />
      </div>
    </div>
  ));
};

export default SkeletonCard;
