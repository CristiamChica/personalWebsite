/** On/off toggle for settings that apply immediately. */
export interface SwitchProps{ label?:React.ReactNode; checked?:boolean; defaultChecked?:boolean; disabled?:boolean; onChange?:(e:any)=>void; style?:React.CSSProperties; }
export declare function Switch(props:SwitchProps):JSX.Element;