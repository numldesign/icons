import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TShirtFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    style: styleCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M16.998 10.751a3.182 3.182 0 0 0 3.182-3.22h2.992c-.817 6.294-.541 10.071-.103 16.083l.103 1.42H10.748l.052-.571c.584-6.414.926-10.181-.052-16.931h3.068v.037a3.182 3.182 0 0 0 3.182 3.182Z"
        clipRule="evenodd"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M20.18 7.532v-1a1 1 0 0 0-1 1.011l1-.011Zm2.992 0 .992.128a1 1 0 0 0-.992-1.128v1Zm-.103 16.082.997-.073-.997.073Zm.103 1.42v1a1 1 0 0 0 .997-1.072l-.997.072Zm-12.424 0-.995-.09a1 1 0 0 0 .995 1.09v-1Zm.052-.571-.995-.09.995.09Zm-.052-16.931v-1a1 1 0 0 0-.99 1.143l.99-.143Zm3.068 0 1 .011a1 1 0 0 0-1-1.011v1Zm5.364.037a2.182 2.182 0 0 1-2.182 2.182v2A4.182 4.182 0 0 0 21.18 7.57h-2Zm0-.026v.026h2V7.52l-2 .023Zm1 .989h2.992v-2H20.18v2Zm2-1.129c-.83 6.4-.547 10.263-.108 16.284l1.994-.146c-.437-6.003-.705-9.694.098-15.88l-1.984-.258Zm-.108 16.284.103 1.418 1.994-.143-.103-1.42-1.994.145Zm1.1.347H10.748v2h12.424v-2Zm-11.428 1.09.052-.57-1.991-.182-.052.572 1.991.18Zm.052-.57c.585-6.429.938-10.294-.058-17.166l-1.98.287c.96 6.628.628 10.298.047 16.697l1.991.181ZM10.75 8.532h3.067v-2h-3.068v2Zm4.067-.963v-.026l-2-.023v.05h2Zm2.182 2.182a2.182 2.182 0 0 1-2.182-2.182h-2a4.182 4.182 0 0 0 4.182 4.182v-2Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4.96 10.452 5.788-2.92c.458 3.399.575 5.26.514 8.495H7.88l-2.92-5.575ZM28.96 10.452l-5.788-2.92c-.398 3.543-.564 5.464-.382 8.495h3.25l2.92-5.575Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

TShirtFill.displayName = "TShirtFill";

export default TShirtFill;
