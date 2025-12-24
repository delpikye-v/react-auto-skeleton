import React from "react";
import { TRuleEntry } from "./types";
export type SkeletonPlugin = {
    name: string;
    rules?: TRuleEntry[];
    /**
     * Hook trước khi resolve rule
     */
    beforeResolve?: (el: React.ReactElement) => TRuleEntry[] | void;
    /**
     * Hook render skeleton custom
     */
    renderSkeleton?: (el: React.ReactElement) => React.ReactNode | null;
};
export declare function createSkeletonPlugin(plugin: SkeletonPlugin): SkeletonPlugin;
