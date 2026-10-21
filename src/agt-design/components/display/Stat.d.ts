/** KPI figure: overline label, Mincho numeral, mono unit, delta. */
export interface StatProps{ label:string; value:React.ReactNode; unit?:string; delta?:string; deltaTone?:'positive'|'critical'|'caution'|'neutral'; caption?:string; size?:'s'|'m'|'l'; style?:React.CSSProperties; }
export declare function Stat(props:StatProps):JSX.Element;