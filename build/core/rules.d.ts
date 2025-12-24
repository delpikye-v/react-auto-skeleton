import React from "react";
import { TRuleEntry, TSkeletonRule } from "./types";
export declare const defaultRules: TRuleEntry[];
export declare function resolveRule(el: React.ReactElement, rules?: TRuleEntry[]): TSkeletonRule | null;
