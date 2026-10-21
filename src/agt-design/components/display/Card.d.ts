/**
 * Content container: hairline border, 6px radius, no shadow by default.
 * @startingPoint section="Display" subtitle="Default, tint, raised and inverse cards" viewport="700x340"
 */
export interface CardProps{ eyebrow?:string; title?:string; action?:React.ReactNode; variant?:'default'|'raised'|'tint'|'inverse'; padding?:number|string; children?:React.ReactNode; style?:React.CSSProperties; }
export declare function Card(props:CardProps):JSX.Element;