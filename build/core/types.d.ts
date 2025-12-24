/// <reference types="react" />
export type TSkeletonRule = "text" | "rect" | "circle" | "none";
export type TRuleMatcher = string | RegExp | ((el: React.ReactElement) => boolean);
export type TRuleEntry = {
    match: TRuleMatcher;
    skeleton: TSkeletonRule;
};
