/* @ds-bundle: {"format":4,"namespace":"AGTDesignSystem_48f3d6","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Plate","sourcePath":"components/display/Plate.jsx"},{"name":"Progress","sourcePath":"components/display/Progress.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"d01d17644ba2","components/actions/IconButton.jsx":"da1035f5b0cf","components/core/Icon.jsx":"5b9c15171419","components/display/Badge.jsx":"47eb1fc6d946","components/display/Card.jsx":"4e2efedd20ba","components/display/Plate.jsx":"58cdbf4954b2","components/display/Progress.jsx":"33a57000af8d","components/display/Stat.jsx":"e6e7793b98b0","components/display/Tag.jsx":"20d333f2c4a5","components/feedback/Dialog.jsx":"29a426c20d40","components/feedback/Toast.jsx":"bd24af2ff253","components/feedback/Tooltip.jsx":"4b8abe85686f","components/forms/Checkbox.jsx":"de057106495f","components/forms/Field.jsx":"08b3ccf4ee68","components/forms/Input.jsx":"976f1390d229","components/forms/Radio.jsx":"a9cf52fde95b","components/forms/Select.jsx":"3bb4ab704fb3","components/forms/Switch.jsx":"dcaf26063c03","components/navigation/Tabs.jsx":"82444e4dbdbe","ui_kits/platform/Dashboard.jsx":"9bdd5ea09992","ui_kits/platform/FieldScreen.jsx":"9ffb0791dcf5","ui_kits/platform/Loan.jsx":"0613c49bcb0f","ui_kits/platform/Login.jsx":"95cfa03b0cfd","ui_kits/platform/Report.jsx":"73a160cdddb5","ui_kits/platform/Shell.jsx":"2364855cb71f","ui_kits/platform/data.js":"f32e04da1bfd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AGTDesignSystem_48f3d6 = window.AGTDesignSystem_48f3d6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = 'https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js';
let loading = null;
const subs = new Set();
function ensure() {
  if (typeof window === 'undefined' || window.lucide) return;
  if (!loading) {
    loading = document.createElement('script');
    loading.src = SRC;
    loading.onload = () => subs.forEach(f => f());
    document.head.appendChild(loading);
  }
}
const pascal = n => n.replace(/(^|-)([a-z0-9])/g, (_, a, b) => b.toUpperCase());
function Icon({
  name,
  size = 18,
  strokeWidth = 1.5,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [, force] = React.useState(0);
  React.useEffect(() => {
    if (window.lucide) return;
    const f = () => force(x => x + 1);
    subs.add(f);
    ensure();
    return () => subs.delete(f);
  }, []);
  const lib = typeof window !== 'undefined' && window.lucide;
  let node = lib && (lib.icons[pascal(name)] || lib.icons[name]);
  if (node && node[0] === 'svg') node = node[2];
  const kids = (node || []).map(([t, a], i) => React.createElement(t, {
    ...a,
    key: i
  }));
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    }
  }, rest), kids);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    bg: 'var(--action-primary)',
    hv: 'var(--action-primary-hover)',
    pr: 'var(--action-primary-press)',
    fg: 'var(--text-on-primary)',
    bd: 'transparent'
  },
  accent: {
    bg: 'var(--action-accent)',
    hv: 'var(--action-accent-hover)',
    pr: 'var(--action-accent-press)',
    fg: '#fff',
    bd: 'transparent'
  },
  secondary: {
    bg: 'var(--stone-25)',
    hv: 'var(--stone-100)',
    pr: 'var(--stone-200)',
    fg: 'var(--text-primary)',
    bd: 'var(--border-strong)'
  },
  ghost: {
    bg: 'transparent',
    hv: 'var(--stone-100)',
    pr: 'var(--stone-200)',
    fg: 'var(--text-primary)',
    bd: 'transparent'
  },
  danger: {
    bg: 'var(--stone-25)',
    hv: 'var(--crimson-100)',
    pr: 'var(--crimson-100)',
    fg: 'var(--crimson-500)',
    bd: 'var(--crimson-500)'
  }
};
const S = {
  s: {
    h: 'var(--control-h-s)',
    px: 10,
    fs: 13,
    ic: 14
  },
  m: {
    h: 'var(--control-h-m)',
    px: 14,
    fs: 14,
    ic: 16
  },
  l: {
    h: 'var(--control-h-l)',
    px: 20,
    fs: 15,
    ic: 18
  }
};
function Button({
  variant = 'primary',
  size = 'm',
  icon,
  iconRight,
  disabled,
  fullWidth,
  children,
  style,
  type = 'button',
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false);
  const v = V[variant] || V.primary,
    s = S[size] || S.m;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      font: `var(--weight-semibold) ${s.fs}px/1 var(--font-sans)`,
      letterSpacing: '0.01em',
      color: v.fg,
      background: disabled ? undefined : p ? v.pr : h ? v.hv : v.bg,
      border: `1px solid ${v.bd}`,
      borderRadius: 'var(--radius-m)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...(disabled ? {
        background: v.bg
      } : {}),
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'm',
  disabled,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const d = {
      s: 28,
      m: 36,
      l: 44
    }[size] || 36,
    ic = {
      s: 14,
      m: 18,
      l: 20
    }[size] || 18;
  const bg = variant === 'secondary' ? h ? 'var(--stone-100)' : 'var(--stone-25)' : variant === 'primary' ? h ? 'var(--action-primary-hover)' : 'var(--action-primary)' : h ? 'var(--stone-100)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      background: disabled ? 'transparent' : bg,
      color: variant === 'primary' ? '#fff' : 'var(--text-primary)',
      border: variant === 'secondary' ? '1px solid var(--border-strong)' : '1px solid transparent',
      borderRadius: 'var(--radius-m)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: ic
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const T = {
  positive: ['var(--midori-50)', 'var(--midori-700)', 'var(--midori-500)'],
  caution: ['var(--ochre-100)', 'var(--ochre-700)', 'var(--ochre-500)'],
  critical: ['var(--crimson-100)', 'var(--crimson-700)', 'var(--crimson-500)'],
  info: ['var(--artemisia-50)', 'var(--artemisia-700)', 'var(--artemisia-500)'],
  accent: ['var(--sienna-50)', 'var(--sienna-700)', 'var(--sienna-500)'],
  neutral: ['var(--stone-100)', 'var(--stone-700)', 'var(--stone-500)']
};
function Badge({
  tone = 'neutral',
  dot = true,
  children,
  style
}) {
  const [bg, fg, d] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      font: 'var(--weight-semibold) 12px/1 var(--font-sans)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: d
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  default: {
    bg: 'var(--surface-card)',
    bd: 'var(--border-hairline)',
    fg: 'var(--text-body)'
  },
  raised: {
    bg: 'var(--surface-raised)',
    bd: 'var(--border-hairline)',
    fg: 'var(--text-body)'
  },
  tint: {
    bg: 'var(--surface-tint)',
    bd: 'var(--byakuroku-200)',
    fg: 'var(--text-body)'
  },
  inverse: {
    bg: 'var(--surface-inverse)',
    bd: 'transparent',
    fg: 'var(--text-inverse)'
  }
};
function Card({
  eyebrow,
  title,
  action,
  children,
  variant = 'default',
  padding = 24,
  style,
  ...rest
}) {
  const t = T[variant] || T.default;
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-l)',
      padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxShadow: variant === 'raised' ? 'var(--shadow-2)' : 'none',
      ...style
    }
  }, rest), (eyebrow || title || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      padding: padding === 0 || padding === '0' ? '20px 24px 0' : 0,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--size-overline)/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: variant === 'inverse' ? 'var(--byakuroku-300)' : 'var(--text-muted)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--weight-semibold) var(--size-h3)/1.25 var(--font-sans)',
      color: variant === 'inverse' ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, title)), action), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Plate.jsx
try { (() => {
function Plate({
  size = 160,
  style
}) {
  const w = size,
    u = w / 2.0;
  const b = (bg, l, t, ww) => ({
    position: 'absolute',
    left: l,
    top: t,
    width: ww,
    height: u * 0.5,
    background: bg
  });
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: w,
      height: u * 1.5 + u * 0.5 * 0,
      minHeight: u * 1.5,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: b('var(--sienna-500)', w * 0.25, 0, u)
  }), /*#__PURE__*/React.createElement("div", {
    style: b('var(--byakuroku-300)', 0, u * 0.5, u)
  }), /*#__PURE__*/React.createElement("div", {
    style: b('var(--artemisia-500)', u, u * 0.5, u)
  }), /*#__PURE__*/React.createElement("div", {
    style: b('var(--midori-500)', w * 0.25, u, u)
  }));
}
Object.assign(__ds_scope, { Plate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Plate.jsx", error: String((e && e.message) || e) }); }

// components/display/Progress.jsx
try { (() => {
const C = {
  primary: 'var(--midori-500)',
  accent: 'var(--sienna-500)',
  structure: 'var(--artemisia-500)',
  caution: 'var(--ochre-500)',
  critical: 'var(--crimson-500)'
};
function Progress({
  value = 0,
  max = 100,
  tone = 'primary',
  label,
  valueLabel,
  height = 6,
  inverse,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, (label || valueLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      font: '500 12px/1.2 var(--font-sans)',
      color: inverse ? 'var(--artemisia-200)' : 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, valueLabel ?? Math.round(pct) + '%')), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      height,
      background: inverse ? 'var(--artemisia-700)' : 'var(--stone-100)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: C[tone] || C.primary,
      borderRadius: 'inherit',
      transition: 'width var(--duration-slow) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Progress.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function Stat({
  label,
  value,
  unit,
  delta,
  deltaTone,
  caption,
  size = 'm',
  style
}) {
  const tone = deltaTone || (delta && String(delta).trim().startsWith('-') ? 'critical' : 'positive');
  const c = {
    positive: 'var(--midori-600)',
    critical: 'var(--crimson-500)',
    caution: 'var(--ochre-700)',
    neutral: 'var(--text-secondary)'
  }[tone];
  const fs = {
    s: 22,
    m: 32,
    l: 48
  }[size] || 32;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--size-overline)/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-medium) ${fs}px/1 var(--font-display)`,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, unit)), (delta || caption) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '500 12px/1.2 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      color: c,
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: tone === 'critical' ? 'arrow-down-right' : 'arrow-up-right',
    size: 13
  }), delta), caption));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  selected,
  onClick,
  onRemove,
  icon,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: onRemove ? '0 6px 0 10px' : '0 10px',
      borderRadius: 'var(--radius-s)',
      border: `1px solid ${selected ? 'var(--byakuroku-500)' : 'var(--border-strong)'}`,
      background: selected ? 'var(--surface-selected)' : h && onClick ? 'var(--stone-100)' : 'var(--surface-raised)',
      color: selected ? 'var(--byakuroku-800)' : 'var(--text-body)',
      font: 'var(--weight-medium) 13px/1 var(--font-sans)',
      cursor: onClick ? 'pointer' : 'default',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  eyebrow,
  children,
  footer,
  onClose,
  width = 480,
  inline
}) {
  if (!open) return null;
  const box = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-l)',
      boxShadow: 'var(--shadow-3)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      padding: '20px 20px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '500 22px/1.25 var(--font-display)',
      color: 'var(--text-primary)'
    }
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "s",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px 24px',
      font: '400 14px/1.55 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '14px 24px',
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)'
    }
  }, footer));
  if (inline) return box;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 100
    }
  }, box);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  positive: ['circle-check', 'var(--midori-300)'],
  caution: ['triangle-alert', 'var(--ochre-500)'],
  critical: ['circle-alert', 'var(--sienna-300)'],
  info: ['info', 'var(--byakuroku-300)']
};
function Toast({
  tone = 'info',
  title,
  message,
  action,
  onClose,
  style
}) {
  const [ic, c] = T[tone] || T.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 360,
      maxWidth: '100%',
      padding: '14px 14px 14px 16px',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      borderRadius: 'var(--radius-l)',
      boxShadow: 'var(--shadow-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 18,
    color: c,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.3 var(--font-sans)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.45 var(--font-sans)',
      color: 'var(--artemisia-200)'
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      padding: 2,
      color: 'var(--artemisia-300)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top',
  open: forced
}) {
  const [o, setO] = React.useState(false);
  const open = forced ?? o;
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      padding: '6px 9px',
      background: 'var(--stone-900)',
      color: 'var(--stone-25)',
      font: '500 12px/1.35 var(--font-sans)',
      borderRadius: 'var(--radius-s)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`,
      background: on ? 'var(--action-primary)' : 'var(--surface-raised)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast)',
      flexShrink: 0
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    strokeWidth: 2.5,
    color: "#fff"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--weight-semibold) 12px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-secondary)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-regular) 12px/1.4 var(--font-sans)',
      color: error ? 'var(--status-critical)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  mono,
  id,
  disabled,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const uid = id || React.useId();
  const bc = error ? 'var(--status-critical)' : f ? 'var(--border-focus)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 'var(--control-h-m)',
      padding: '0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-raised)',
      border: `1px solid ${bc}`,
      borderRadius: 'var(--radius-m)',
      boxShadow: f ? '0 0 0 3px var(--midori-50)' : 'none',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      font: '14px/1 var(--font-sans)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      color: 'var(--text-primary)',
      font: mono ? '500 14px/1 var(--font-mono)' : '400 14px/1 var(--font-sans)',
      padding: 0,
      height: '100%'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      font: '500 12px/1 var(--font-mono)'
    }
  }, suffix)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const ref = React.useRef();
  const [, f] = React.useState(0);
  const on = checked ?? (ref.current ? ref.current.checked : !!defaultChecked);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: e => {
      f(x => x + 1);
      document.querySelectorAll('input[name="' + name + '"]').forEach(i => i.dispatchEvent(new Event('agt-sync')));
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: `1.5px solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`,
      background: 'var(--surface-raised)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--action-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  id,
  disabled,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    disabled: disabled,
    style: {
      appearance: 'none',
      width: '100%',
      height: 'var(--control-h-m)',
      padding: '0 36px 0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-raised)',
      border: `1px solid ${error ? 'var(--status-critical)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-m)',
      font: '400 14px/1 var(--font-sans)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v.value,
      value: v.value
    }, v.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--text-secondary)",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--text-body)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--action-primary)' : 'var(--stone-300)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 16 : 2,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-1)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style
}) {
  const [h, setH] = React.useState(null);
  const seg = variant === 'segmented';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: seg ? 2 : 24,
      padding: seg ? 2 : 0,
      background: seg ? 'var(--stone-100)' : 'transparent',
      borderRadius: seg ? 'var(--radius-m)' : 0,
      borderBottom: seg ? 'none' : '1px solid var(--border-hairline)',
      width: seg ? 'fit-content' : undefined,
      ...style
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? {
      value: it,
      label: it
    } : it;
    const on = v.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v.value),
      onMouseEnter: () => setH(v.value),
      onMouseLeave: () => setH(null),
      style: seg ? {
        height: 28,
        padding: '0 12px',
        border: 0,
        borderRadius: 'var(--radius-s)',
        background: on ? 'var(--surface-raised)' : 'transparent',
        boxShadow: on ? 'var(--shadow-1)' : 'none',
        color: on || h === v.value ? 'var(--text-primary)' : 'var(--text-secondary)',
        font: 'var(--weight-semibold) 13px/1 var(--font-sans)',
        cursor: 'pointer'
      } : {
        height: 40,
        padding: 0,
        border: 0,
        borderBottom: `2px solid ${on ? 'var(--midori-500)' : 'transparent'}`,
        marginBottom: -1,
        background: 'transparent',
        color: on || h === v.value ? 'var(--text-primary)' : 'var(--text-secondary)',
        font: 'var(--weight-semibold) 14px/1 var(--font-sans)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, v.label, v.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 11px/1 var(--font-mono)',
        color: 'var(--text-muted)'
      }
    }, v.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Dashboard.jsx
try { (() => {
function Dashboard({
  go
}) {
  const {
    Card,
    Stat,
    Badge,
    Button,
    Progress,
    Icon
  } = window.AGTDesignSystem_48f3d6;
  const D = AGT_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 40px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-l)'
    }
  }, [['Credit available', '$31,000', null, '+$11,000 after report'], ['Outstanding', '$61,400', null, '2 active loans'], ['Area monitored', '421.3', 'ha', '4 fields'], ['Avg. NDVI', '0.63', null, '+0.02 · 14 days']].map(([l, v, u, c], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: 24,
      borderLeft: i ? '1px solid var(--border-hairline)' : 0
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: l,
    value: v,
    unit: u,
    caption: c
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Fields",
    eyebrow: "2026/27 season",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => go('field')
    }, "All fields"),
    padding: 0,
    style: {
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px'
    }
  }, D.fields.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f.id,
    onClick: () => go('field'),
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr .8fr .6fr .6fr auto',
      alignItems: 'center',
      gap: 12,
      padding: '14px 0',
      borderTop: i ? '1px solid var(--border-hairline)' : '0',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '12px/1.3 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, f.crop, " \xB7 ", f.stage)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, f.ha, " ha"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px var(--font-mono)',
      color: 'var(--text-primary)'
    }
  }, f.ndvi.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px var(--font-mono)',
      color: f.delta.startsWith('-') ? 'var(--crimson-500)' : 'var(--midori-600)'
    }
  }, f.delta), /*#__PURE__*/React.createElement(Badge, {
    tone: f.status
  }, f.statusLabel)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "tint",
    eyebrow: "To do",
    title: "Unlock your next disbursal"
  }, D.tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.tone === 'caution' ? 'clock' : 'file-up',
    size: 18,
    color: t.tone === 'caution' ? 'var(--ochre-700)' : 'var(--artemisia-600)',
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, t.t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '13px/1.4 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, t.d)))), /*#__PURE__*/React.createElement(Button, {
    icon: "upload",
    onClick: () => go('report')
  }, "Submit planting report")), /*#__PURE__*/React.createElement(Card, {
    title: "Loans",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => go('loan')
    }, "Details")
  }, D.loans.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, l.id), /*#__PURE__*/React.createElement(Badge, {
    tone: l.status
  }, l.statusLabel)), /*#__PURE__*/React.createElement(Progress, {
    value: l.repaid,
    label: money(l.amount) + ' · ' + l.rate + '% APR',
    valueLabel: l.repaid + '% repaid',
    tone: "accent"
  })))))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/FieldScreen.jsx
try { (() => {
function FieldView({
  go
}) {
  const {
    Card,
    Stat,
    Badge,
    Button,
    Tabs,
    Switch,
    Tooltip,
    IconButton
  } = window.AGTDesignSystem_48f3d6;
  const f = AGT_DATA.fields[0];
  const [layer, setLayer] = React.useState('NDVI');
  const [tab, setTab] = React.useState('Vigor');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 40px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, AGT_DATA.fields.map((x, i) => /*#__PURE__*/React.createElement(Badge, {
    key: x.id,
    tone: i === 0 ? 'positive' : 'neutral',
    dot: i === 0
  }, x.id))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "segmented",
    items: ['NDVI', 'True colour', 'Moisture'],
    value: layer,
    onChange: setLayer
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Cloud mask",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "layers",
    label: "Layers",
    variant: "secondary",
    size: "s"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "maximize-2",
    label: "Expand",
    variant: "secondary",
    size: "s"
  }))), layer === 'NDVI' ? /*#__PURE__*/React.createElement(NdviGrid, null) : /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '22/14',
      borderRadius: 'var(--radius-m)',
      background: 'repeating-linear-gradient(135deg,var(--stone-100) 0 10px,var(--stone-50) 10px 20px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '500 12px var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, layer, " imagery \xB7 Sentinel-2 tile placeholder"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 16px',
      justifyContent: 'space-between',
      font: '500 11px var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Sentinel-2 \xB7 10 Oct 2026 \xB7 4% cloud"), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, "\u221231.4135, \u221264.1811"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: f.crop + ' · ' + f.stage,
    title: f.name,
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: "positive"
    }, f.statusLabel)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: /*#__PURE__*/React.createElement(Tooltip, {
      content: "Normalized Difference Vegetation Index"
    }, /*#__PURE__*/React.createElement("span", null, "NDVI")),
    value: f.ndvi.toFixed(2),
    delta: f.delta,
    caption: "14 days"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Yield estimate",
    value: f.yield,
    unit: "t/ha",
    delta: "+4.8%",
    caption: "vs. 5-yr avg"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Area",
    value: f.ha,
    unit: "ha",
    size: "s"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Collateral value",
    value: "$64,200",
    size: "s"
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Evidence on file",
    padding: 20
  }, [['Planting report', 'Verified 2 Sep', 'positive'], ['Seed invoice', 'Verified 28 Aug', 'positive'], ['Mid-season photos', 'Due 20 Oct', 'caution']].map(([a, b, t]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      font: '14px var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, a), /*#__PURE__*/React.createElement(Badge, {
    tone: t
  }, b)))))), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Vigor', 'Rainfall', 'Temperature'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(Button, {
    size: "s",
    variant: "secondary",
    icon: "download"
  }, "Export CSV")), /*#__PURE__*/React.createElement(NdviChart, {
    data: AGT_DATA.ndviSeries
  })));
}
window.FieldView = FieldView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/FieldScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Loan.jsx
try { (() => {
function Loan({
  go,
  toast
}) {
  const {
    Card,
    Stat,
    Badge,
    Button,
    Dialog,
    Progress
  } = window.AGTDesignSystem_48f3d6;
  const [open, setOpen] = React.useState(false);
  const sched = [['Disbursal 1', '12 Sep 2026', '$24,000', 'positive', 'Paid out'], ['Disbursal 2', 'On report', '$11,000', 'caution', 'Awaiting data'], ['Disbursal 3', '15 Dec 2026', '$13,000', 'neutral', 'Scheduled'], ['Repayment', 'Mar 2027', '$52,420', 'info', 'At harvest']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 40px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    eyebrow: "AGT-2291 \xB7 Soybean",
    title: "Harvest-backed loan",
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 48px/1 var(--font-display)',
      color: '#fff'
    }
  }, "$48,000"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 12,
      font: '13px/1.4 var(--font-sans)',
      color: 'var(--artemisia-200)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "APR", /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 16px var(--font-mono)',
      color: '#fff'
    }
  }, "9.2%")), /*#__PURE__*/React.createElement("div", null, "LTV", /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 16px var(--font-mono)',
      color: '#fff'
    }
  }, "58%")), /*#__PURE__*/React.createElement("div", null, "Term", /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 16px var(--font-mono)',
      color: '#fff'
    }
  }, "6 mo"))), /*#__PURE__*/React.createElement(Progress, {
    inverse: true,
    value: 50,
    tone: "accent",
    label: "Disbursed",
    valueLabel: "$24,000 of $48,000"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: "arrow-right",
    onClick: () => setOpen(true)
  }, "Request next disbursal")), /*#__PURE__*/React.createElement(Card, {
    title: "Schedule",
    padding: 0,
    style: {
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 8px'
    }
  }, sched.map(([a, b, c, t, l], i) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto auto',
      gap: 16,
      alignItems: 'center',
      padding: '14px 0',
      borderTop: i ? '1px solid var(--border-hairline)' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '13px/1.3 var(--font-sans)',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, b)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px var(--font-mono)',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap'
    }
  }, c), /*#__PURE__*/React.createElement(Badge, {
    tone: t
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Collateral",
    value: "270.1",
    unit: "ha",
    caption: "F-14, F-21 \xB7 Soybean"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Projected harvest value",
    value: "$214k",
    delta: "+3.2%",
    caption: "CBOT Nov-27"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Data score",
    value: "94",
    unit: "/100",
    delta: "+6",
    caption: "Reports match imagery"
  }))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    eyebrow: "AGT-2291",
    title: "Request $11,000 disbursal?",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => {
        setOpen(false);
        toast('Disbursal requested', 'Funds arrive once the Field 9 report verifies.');
      }
    }, "Request disbursal"))
  }, "This needs a verified planting report for Field 9. Funds go to your account ending 4471 within one business day of verification."));
}
window.Loan = Loan;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Loan.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Login.jsx
try { (() => {
function Login({
  onLogin
}) {
  const {
    Button,
    Input,
    Plate
  } = window.AGTDesignSystem_48f3d6;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      padding: 56,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 28px/1 var(--font-display)',
      letterSpacing: '.06em'
    }
  }, "AGT"), /*#__PURE__*/React.createElement(Plate, {
    size: 320
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 36px/1.15 var(--font-display)'
    }
  }, "Credit that grows with the crop."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '15px/1.55 var(--font-sans)',
      color: 'var(--artemisia-200)'
    }
  }, "Your field data and our satellite passes, together, decide what you can borrow."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 56
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    },
    style: {
      width: 360,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '500 28px/1.2 var(--font-display)',
      color: 'var(--text-primary)'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    defaultValue: "lucia@laferreyra.com.ar"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "l",
    fullWidth: true
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '13px/1.4 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, "New to AGT? ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Register your farm")))));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Report.jsx
try { (() => {
function Report({
  go,
  toast
}) {
  const {
    Card,
    Input,
    Select,
    Checkbox,
    Radio,
    Button,
    Progress,
    Tag
  } = window.AGTDesignSystem_48f3d6;
  const [m, setM] = React.useState('drill');
  const [ok, setOk] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 40px 48px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Planting report",
    eyebrow: "Field 9 \xB7 El Bajo \xB7 Maize"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Hybrid",
    options: ['DK 72-10', 'AX 7784', 'NK 897']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Planting date",
    defaultValue: "18 Sep 2026",
    mono: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Seeding rate",
    defaultValue: "78,000",
    suffix: "seeds/ha",
    mono: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Planted area",
    defaultValue: "86.0",
    suffix: "ha",
    mono: true,
    hint: "Satellite estimate: 85.6 ha"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px var(--font-sans)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-secondary)'
    }
  }, "Method"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "m",
    value: "drill",
    label: "No-till drill",
    checked: m === 'drill',
    onChange: () => setM('drill')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "m",
    value: "conv",
    label: "Conventional",
    checked: m === 'conv',
    onChange: () => setM('conv')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px var(--font-sans)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-secondary)'
    }
  }, "Attachments"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    icon: "file",
    onRemove: () => {}
  }, "seed-invoice.pdf"), /*#__PURE__*/React.createElement(Tag, {
    icon: "image",
    onRemove: () => {}
  }, "planter-01.jpg"), /*#__PURE__*/React.createElement(Tag, {
    icon: "plus",
    onClick: () => {}
  }, "Add file"))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I confirm this report reflects what was planted on this field.",
    checked: ok,
    onChange: e => setOk(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('dashboard')
  }, "Save draft"), /*#__PURE__*/React.createElement(Button, {
    icon: "upload",
    disabled: !ok,
    onClick: () => {
      toast();
      go('dashboard');
    }
  }, "Submit report"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "tint",
    eyebrow: "What this unlocks",
    title: "$11,000 second disbursal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '14px/1.55 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, "We check your report against the satellite pass from 9 October. Matching reports usually verify within a day."), /*#__PURE__*/React.createElement(Progress, {
    label: "Report completeness",
    value: ok ? 92 : 78
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Satellite check",
    padding: 20
  }, /*#__PURE__*/React.createElement(NdviGrid, null))));
}
window.Report = Report;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Report.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Shell.jsx
try { (() => {
const {
  Icon,
  IconButton,
  Badge
} = window.AGTDesignSystem_48f3d6;
function Sidebar({
  route,
  go
}) {
  const items = [['dashboard', 'Overview', 'layout-grid'], ['field', 'Fields', 'map'], ['loan', 'Loans', 'landmark'], ['report', 'Field reports', 'file-check'], ['docs', 'Documents', 'folder']];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-width)',
      flexShrink: 0,
      background: 'var(--surface-nav)',
      color: 'var(--artemisia-100)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 12px 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 24px/1 var(--font-display)',
      letterSpacing: '.06em',
      color: '#fff'
    }
  }, "AGT")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(([k, l, ic]) => {
    const on = route === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => go(k),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        height: 38,
        padding: '0 12px',
        border: 0,
        borderRadius: 'var(--radius-m)',
        background: on ? 'var(--artemisia-700)' : 'transparent',
        color: on ? '#fff' : 'var(--artemisia-200)',
        font: '500 14px/1 var(--font-sans)',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18,
      color: on ? 'var(--byakuroku-300)' : 'currentColor'
    }), l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 12,
      borderTop: '1px solid var(--artemisia-700)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px/1.3 var(--font-sans)',
      color: '#fff'
    }
  }, AGT_DATA.farmer.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '12px/1.3 var(--font-sans)',
      color: 'var(--artemisia-300)'
    }
  }, AGT_DATA.farmer.farm)));
}
function Topbar({
  title,
  eyebrow,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      padding: '28px 40px 20px',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '500 32px/1.1 var(--font-display)',
      color: 'var(--text-primary)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, actions, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    variant: "secondary"
  })));
}
function NdviGrid({
  cols = 22,
  cell = 14,
  gap = 1
}) {
  const c = v => v < .2 ? 'var(--ndvi-0)' : v < .35 ? 'var(--ndvi-1)' : v < .5 ? 'var(--ndvi-2)' : v < .62 ? 'var(--ndvi-3)' : v < .75 ? 'var(--ndvi-4)' : 'var(--ndvi-5)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols},1fr)`,
      gap,
      background: 'var(--artemisia-900)',
      padding: gap,
      borderRadius: 'var(--radius-m)'
    }
  }, AGT_DATA.grid.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '1',
      background: c(v)
    }
  })));
}
function NdviChart({
  data,
  height = 160
}) {
  const w = 600,
    h = height,
    p = 24,
    max = 1;
  const pts = data.map((v, i) => [p + i * (w - 2 * p) / (data.length - 1), h - p - v / max * (h - 2 * p)]);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    style: {
      width: '100%',
      height
    },
    preserveAspectRatio: "none"
  }, [0, .25, .5, .75, 1].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: p,
    x2: w - p,
    y1: h - p - g * (h - 2 * p),
    y2: h - p - g * (h - 2 * p),
    stroke: "var(--border-hairline)"
  })), /*#__PURE__*/React.createElement("polyline", {
    points: pts.map(q => q.join(',')).join(' '),
    fill: "none",
    stroke: "var(--midori-500)",
    strokeWidth: "2"
  }), pts.map((q, i) => i === pts.length - 1 && /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: q[0],
    cy: q[1],
    r: "4",
    fill: "var(--sienna-500)"
  })));
}
const money = n => '$' + n.toLocaleString('en-US');
Object.assign(window, {
  Sidebar,
  Topbar,
  NdviGrid,
  NdviChart,
  money
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/data.js
try { (() => {
window.AGT_DATA = {
  farmer: {
    name: 'Lucía Ferreyra',
    farm: 'Estancia La Ferreyra',
    region: 'Córdoba, AR'
  },
  fields: [{
    id: 'F-14',
    name: 'Field 14 · Los Álamos',
    crop: 'Soybean',
    ha: 128.4,
    ndvi: 0.74,
    delta: '+0.06',
    status: 'positive',
    statusLabel: 'Healthy',
    stage: 'R3 · Pod set',
    season: 62,
    yield: 4.2
  }, {
    id: 'F-09',
    name: 'Field 9 · El Bajo',
    crop: 'Maize',
    ha: 86.0,
    ndvi: 0.58,
    delta: '-0.09',
    status: 'caution',
    statusLabel: 'Water stress',
    stage: 'V12',
    season: 48,
    yield: 8.9
  }, {
    id: 'F-03',
    name: 'Field 3 · La Loma',
    crop: 'Wheat',
    ha: 64.2,
    ndvi: 0.31,
    delta: '+0.02',
    status: 'info',
    statusLabel: 'Emerging',
    stage: 'Tillering',
    season: 22,
    yield: 3.4
  }, {
    id: 'F-21',
    name: 'Field 21 · Ruta 9',
    crop: 'Soybean',
    ha: 142.7,
    ndvi: 0.69,
    delta: '+0.03',
    status: 'positive',
    statusLabel: 'Healthy',
    stage: 'R2 · Flowering',
    season: 58,
    yield: 3.9
  }],
  loans: [{
    id: 'AGT-2291',
    amount: 48000,
    rate: 9.2,
    collateral: 'Soybean · F-14, F-21',
    repaid: 18,
    status: 'accent',
    statusLabel: 'Disbursed',
    due: 'Mar 2027'
  }, {
    id: 'AGT-2340',
    amount: 22000,
    rate: 10.1,
    collateral: 'Maize · F-09',
    repaid: 0,
    status: 'caution',
    statusLabel: 'Data due',
    due: 'Jun 2027'
  }],
  ndviSeries: [0.18, 0.21, 0.27, 0.34, 0.42, 0.5, 0.57, 0.62, 0.66, 0.68, 0.71, 0.7, 0.74],
  tasks: [{
    t: 'Planting report for Field 9',
    d: 'Due in 3 days — unlocks $11,000',
    tone: 'caution'
  }, {
    t: 'Upload seed invoice',
    d: 'Field 3 · Wheat',
    tone: 'info'
  }]
};
(function () {
  const r = [];
  let s = 7;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let y = 0; y < 14; y++) for (let x = 0; x < 22; x++) {
    const cx = (x - 11) / 11,
      cy = (y - 7) / 7;
    let v = 0.78 - 0.25 * (cx * cx + cy * cy) + (rnd() - .5) * .18;
    if (x > 15 && y > 8) v -= .3;
    r.push(Math.max(0, Math.min(.95, v)));
  }
  window.AGT_DATA.grid = r;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Plate = __ds_scope.Plate;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
