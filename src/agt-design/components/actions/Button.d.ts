/**
 * AGT button. One primary per view; accent (sienna) reserved for the single money-moving action.
 * @startingPoint section="Actions" subtitle="Primary, accent, secondary, ghost, danger" viewport="700x260"
 */
export interface ButtonProps{ variant?:'primary'|'accent'|'secondary'|'ghost'|'danger'; size?:'s'|'m'|'l'; /** lucide name */ icon?:string; iconRight?:string; disabled?:boolean; fullWidth?:boolean; type?:'button'|'submit'; onClick?:(e:any)=>void; children?:React.ReactNode; style?:React.CSSProperties; }
export declare function Button(props:ButtonProps):JSX.Element;