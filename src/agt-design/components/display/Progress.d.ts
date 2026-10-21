/** Linear progress / proportion bar (repayment, data completeness, season). */
export interface ProgressProps{ value:number; max?:number; tone?:'primary'|'accent'|'structure'|'caution'|'critical'; label?:string; valueLabel?:string; height?:number; /** for dark (inverse) grounds */ inverse?:boolean; style?:React.CSSProperties; }
export declare function Progress(props:ProgressProps):JSX.Element;