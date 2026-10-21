/** Modal dialog with Mincho title and footer action row. `inline` renders without scrim (for docs). */
export interface DialogProps{ open:boolean; title:string; eyebrow?:string; children?:React.ReactNode; footer?:React.ReactNode; onClose?:()=>void; width?:number; inline?:boolean; }
export declare function Dialog(props:DialogProps):JSX.Element|null;