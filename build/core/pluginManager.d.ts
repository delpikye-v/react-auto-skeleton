/// <reference types="react" />
import { SkeletonPlugin } from "./plugin";
import { TRuleEntry } from "./types";
export declare class PluginManager {
    private plugins;
    use(plugin: SkeletonPlugin): void;
    getRules(baseRules: TRuleEntry[]): TRuleEntry[];
    renderFromPlugin(el: React.ReactElement): {} | null;
}
