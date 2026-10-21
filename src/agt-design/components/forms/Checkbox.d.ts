/** Checkbox with inline label. Controlled or uncontrolled. */
export interface CheckboxProps{ label?:React.ReactNode; checked?:boolean; defaultChecked?:boolean; disabled?:boolean; onChange?:(e:any)=>void; style?:React.CSSProperties; }
export declare function Checkbox(props:CheckboxProps):JSX.Element;