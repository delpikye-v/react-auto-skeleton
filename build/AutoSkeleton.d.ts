import React from "react";
import { TRuleEntry } from "./core/types";
type TAutoSkeletonProps = {
    loading: boolean;
    children: React.ReactNode;
    rules?: TRuleEntry[];
    plugins?: any[];
};
export declare function AutoSkeleton({ loading, children, rules, plugins, }: TAutoSkeletonProps): React.JSX.Element;
export {};
