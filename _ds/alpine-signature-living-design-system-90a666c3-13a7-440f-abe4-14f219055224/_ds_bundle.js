/* @ds-bundle: {"format":3,"namespace":"AlpineSignatureLivingDesignSystem_90a666","components":[{"name":"GoldRule","sourcePath":"components/brand/GoldRule.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"SectionLabel","sourcePath":"components/brand/SectionLabel.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/brand/GoldRule.jsx":"e66dd5e356bf","components/brand/Logo.jsx":"0ea055a05958","components/brand/SectionLabel.jsx":"aee3afa0647f","components/core/Badge.jsx":"b63ba252033b","components/core/Button.jsx":"f5637ccd806a","components/core/Card.jsx":"dd7dde08387d","components/core/Input.jsx":"d00996e4a00f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AlpineSignatureLivingDesignSystem_90a666 = window.AlpineSignatureLivingDesignSystem_90a666 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GoldRule.jsx
try { (() => {
/**
 * A thin gold rule — the brand's primary divider. Centred or left, short by
 * default. Use to separate a headline from supporting copy or sections.
 */
function GoldRule({
  length = 48,
  align = 'left',
  // 'left' | 'center'
  thickness = 1,
  className = '',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width: length,
      height: thickness,
      background: 'var(--signature-gold)',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { GoldRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GoldRule.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/**
 * Alpine Signature Living — the brand mark and its lockups.
 * The mark is a fine-line mountain ridge inside a thin gold ring, resting on a
 * signature baseline. Rendered inline so colour follows `tone`.
 */
function Logo({
  variant = 'stacked',
  // 'mark' | 'stacked' | 'horizontal' | 'monogram'
  tone = 'dark',
  // 'dark' (on light bg) | 'light' (reversed, on Alpine Green)
  size = 64,
  className = '',
  style = {}
}) {
  const ridge = tone === 'light' ? 'var(--stone)' : 'var(--alpine-green)';
  const ink = tone === 'light' ? 'var(--stone)' : 'var(--alpine-green)';
  const muted = tone === 'light' ? 'var(--text-on-dark-muted)' : 'var(--slate-sage)';
  const gold = 'var(--signature-gold)';
  const Mark = ({
    s
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 120 120",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "58",
    r: "44",
    stroke: gold,
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26 72 L40 56 L48 63 L60 43 L72 60 L80 53 L94 72",
    stroke: ridge,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "24",
    y1: "72",
    x2: "96",
    y2: "72",
    stroke: gold,
    strokeWidth: "1.4"
  }));
  const Monogram = ({
    s
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 120 120",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "44",
    stroke: gold,
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("text", {
    x: "60",
    y: "60",
    textAnchor: "middle",
    dominantBaseline: "central",
    fontFamily: "var(--font-display)",
    fontSize: "56",
    fontWeight: "500",
    fill: ink
  }, "A"));
  const wordmark = (lines, align) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align,
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      color: ink,
      fontSize: size * 0.34,
      lineHeight: 1.04,
      letterSpacing: 'var(--tracking-wordmark)',
      textTransform: 'uppercase',
      textAlign: align === 'center' ? 'center' : 'left'
    }
  }, lines.map(l => /*#__PURE__*/React.createElement("div", {
    key: l
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--rule-length)',
      height: 1,
      background: gold
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      color: muted,
      fontSize: Math.max(9, size * 0.105),
      letterSpacing: 'var(--tracking-label-tight)',
      textTransform: 'uppercase'
    }
  }, "Consulting \xB7 Planning \xB7 Coordination"));
  if (variant === 'mark') return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(Mark, {
    s: size
  }));
  if (variant === 'monogram') return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(Monogram, {
    s: size
  }));
  if (variant === 'horizontal') {
    return /*#__PURE__*/React.createElement("span", {
      className: className,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.32,
        ...style
      }
    }, /*#__PURE__*/React.createElement(Mark, {
      s: size
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: size * 0.7,
        background: 'var(--divider-on-dark)'
      }
    }), wordmark(['Alpine', 'Signature', 'Living'], 'flex-start'));
  }

  // stacked (primary)
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: size * 0.22,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    s: size
  }), wordmark(['Alpine', 'Signature', 'Living'], 'center'));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionLabel.jsx
try { (() => {
/**
 * Uppercase, wide-tracked descriptor label in Jost — the brand's signature
 * eyebrow. Optionally preceded by a short gold rule.
 */
function SectionLabel({
  children,
  rule = true,
  // show the short gold rule before the text
  tone = 'dark',
  // 'dark' on light bg | 'light' on Alpine Green
  align = 'left',
  // 'left' | 'center'
  as: Tag = 'div',
  className = '',
  style = {}
}) {
  const color = tone === 'light' ? 'var(--text-on-dark-muted)' : 'var(--slate-sage)';
  return /*#__PURE__*/React.createElement(Tag, {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 'var(--label-md)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: 'var(--signature-gold)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Small uppercase marker for status / category. Quiet by default; `gold` for
 * the jewel accent, `solid` for an Alpine Green chip. Hairline outline.
 */
function Badge({
  children,
  variant = 'outline',
  // 'outline' | 'gold' | 'solid'
  className = '',
  style = {}
}) {
  const variants = {
    outline: {
      color: 'var(--slate-sage)',
      border: '1px solid var(--border-strong)',
      background: 'transparent'
    },
    gold: {
      color: 'var(--gold-600)',
      border: '1px solid var(--signature-gold)',
      background: 'rgba(184,145,96,0.07)'
    },
    solid: {
      color: 'var(--stone)',
      border: '1px solid transparent',
      background: 'var(--alpine-green)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 'var(--label-sm)',
      letterSpacing: 'var(--tracking-label-tight)',
      textTransform: 'uppercase',
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary action control. Quiet, letter-spaced Jost label; measured hover.
 * Variants: primary (Alpine Green fill), secondary (gold hairline outline),
 * ghost (text with gold underline). Gold is reserved for accents, never a fill.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  icon = null,
  // optional leading node
  iconAfter = null,
  // optional trailing node
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const pad = {
    sm: '9px 18px',
    md: '13px 26px',
    lg: '17px 34px'
  }[size];
  const fontSize = {
    sm: 'var(--label-sm)',
    md: 'var(--label-md)',
    lg: 'var(--label-md)'
  }[size];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    fontFamily: 'var(--font-sans)',
    fontWeight: 400,
    fontSize,
    letterSpacing: 'var(--tracking-label-tight)',
    textTransform: 'uppercase',
    padding: pad,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    transform: active && !disabled ? 'translateY(0.5px)' : 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    userSelect: 'none'
  };
  const variants = {
    primary: {
      background: hover ? 'var(--alpine-green-700)' : 'var(--alpine-green)',
      color: 'var(--stone)',
      borderColor: 'transparent'
    },
    secondary: {
      background: hover ? 'rgba(184,145,96,0.08)' : 'transparent',
      color: 'var(--alpine-green)',
      borderColor: 'var(--signature-gold)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--alpine-green)',
      borderColor: 'transparent',
      boxShadow: hover ? 'inset 0 -1px 0 var(--signature-gold)' : 'inset 0 -1px 0 transparent',
      borderRadius: 0,
      padding: {
        sm: '6px 2px',
        md: '8px 2px',
        lg: '10px 2px'
      }[size]
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    className: className,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children, iconAfter && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconAfter));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Document-like surface. Warm paper, hairline border, whisper-soft shadow.
 * Optional gold top rule for "signature" cards. Square-ish corners.
 */
function Card({
  children,
  rule = false,
  // gold top rule
  elevated = false,
  // raise shadow on rest
  hoverable = false,
  // lift on hover
  padding = 32,
  as: Tag = 'div',
  className = '',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadow = hoverable && hover ? 'var(--shadow-raised)' : elevated ? 'var(--shadow-card)' : 'var(--shadow-sm)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: shadow,
      padding,
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      transform: hoverable && hover ? 'translateY(-3px)' : 'none',
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: padding,
      width: 36,
      height: 2,
      background: 'var(--signature-gold)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with an uppercase Jost label and a hairline underline that warms
 * to gold on focus. Low-chrome, document-like — no heavy boxes.
 */
function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  multiline = false,
  rows = 4,
  required = false,
  id,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `f-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-sans)',
    fontWeight: 300,
    fontSize: 'var(--text-md)',
    color: 'var(--alpine-green)',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focus ? 'var(--signature-gold)' : 'var(--border-strong)'}`,
    padding: '10px 2px',
    outline: 'none',
    transition: 'border-color var(--duration-fast) var(--ease-standard)',
    resize: multiline ? 'vertical' : 'none',
    lineHeight: 'var(--leading-body)'
  };
  const Field = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 'var(--label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--slate-sage)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--signature-gold)'
    }
  }, " *")), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    type: multiline ? undefined : type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    rows: multiline ? rows : undefined,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GoldRule = __ds_scope.GoldRule;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
