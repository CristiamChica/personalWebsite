/** Native select styled to AGT. */
export interface SelectProps{ label?:string; hint?:string; error?:string; options:(string|{value:string;label:string})[]; value?:string; defaultValue?:string; disabled?:boolean; id?:string; onChange?:(e:any)=>void; style?:React.CSSProperties; }
export declare function Select(props:SelectProps):JSX.Element;