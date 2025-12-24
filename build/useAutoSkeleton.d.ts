import React from "react";
import { TRuleEntry } from "./core/types";
import { SkeletonPlugin } from "./core/plugin";
type TOptions = {
    loading?: boolean;
    rules?: TRuleEntry[];
    plugins?: SkeletonPlugin[];
};
export declare function useAutoSkeleton(element: React.ReactElement, options?: TOptions): React.ReactNode;
export {};
