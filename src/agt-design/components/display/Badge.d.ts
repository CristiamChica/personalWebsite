/** Status pill (loan state, crop health, verification). */
export interface BadgeProps{ tone?:'positive'|'caution'|'critical'|'info'|'accent'|'neutral'; dot?:boolean; children?:React.ReactNode; style?:React.CSSProperties; }
export declare function Badge(props:BadgeProps):JSX.Element;