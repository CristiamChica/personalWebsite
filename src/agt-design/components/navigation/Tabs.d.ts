/** Tabs — underline (page sections) or segmented (view switches). Controlled. */
export interface TabsProps{ items:(string|{value:string;label:string;count?:number})[]; value:string; onChange?:(v:string)=>void; variant?:'underline'|'segmented'; style?:React.CSSProperties; }
export declare function Tabs(props:TabsProps):JSX.Element;