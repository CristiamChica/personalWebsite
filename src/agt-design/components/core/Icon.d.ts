/** Lucide icon (outline, 1.5px stroke). Loads lucide UMD from CDN on first use. */
export interface IconProps{ /** kebab-case lucide name, e.g. "sprout" */ name:string; size?:number; strokeWidth?:number; color?:string; style?:React.CSSProperties; }
export declare function Icon(props:IconProps):JSX.Element;