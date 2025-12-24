import React from "react";
export type TSkeletonBaseProps = {
    width?: number | string;
    height?: number | string;
    radius?: number | string;
    style?: React.CSSProperties;
    className?: string;
};
export declare function SkeletonBase({ width, height, radius, style, className, }: TSkeletonBaseProps): React.JSX.Element;
