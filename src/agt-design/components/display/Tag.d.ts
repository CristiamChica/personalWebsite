/** Filter chip / label; selectable and optionally removable. */
export interface TagProps{ children?:React.ReactNode; selected?:boolean; icon?:string; onClick?:()=>void; onRemove?:()=>void; style?:React.CSSProperties; }
export declare function Tag(props:TagProps):JSX.Element;