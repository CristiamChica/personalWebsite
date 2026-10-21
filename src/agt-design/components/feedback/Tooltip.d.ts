/** Hover/focus hint for icons and abbreviated data (NDVI, LTV). */
export interface TooltipProps{ content:React.ReactNode; children:React.ReactNode; placement?:'top'|'bottom'; open?:boolean; }
export declare function Tooltip(props:TooltipProps):JSX.Element;