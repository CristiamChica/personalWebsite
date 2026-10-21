/** Label + hint/error wrapper used by Input and Select. */
export interface FieldProps{ label?:string; hint?:string; error?:string; htmlFor?:string; children?:React.ReactNode; style?:React.CSSProperties; }
export declare function Field(props:FieldProps):JSX.Element;