/** Square icon-only button; always pass an accessible label. */
export interface IconButtonProps{ icon:string; label:string; variant?:'ghost'|'secondary'|'primary'; size?:'s'|'m'|'l'; disabled?:boolean; onClick?:(e:any)=>void; style?:React.CSSProperties; }
export declare function IconButton(props:IconButtonProps):JSX.Element;