/** Radio option; group by shared `name`. Prefer controlled `checked`. */
export interface RadioProps{ label?:React.ReactNode; name:string; value:string; checked?:boolean; defaultChecked?:boolean; disabled?:boolean; onChange?:(e:any)=>void; style?:React.CSSProperties; }
export declare function Radio(props:RadioProps):JSX.Element;