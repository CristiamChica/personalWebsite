/** Transient confirmation on dark artemisia ground. Bottom-left, 5s. */
export interface ToastProps{ tone?:'positive'|'caution'|'critical'|'info'; title:string; message?:string; action?:React.ReactNode; onClose?:()=>void; style?:React.CSSProperties; }
export declare function Toast(props:ToastProps):JSX.Element;