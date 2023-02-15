import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GitMergeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M9.936 11.74a3.82 3.82 0 0 0-1.158-7.457 3.818 3.818 0 0 0-.999 7.504 1.003 1.003 0 0 0-.01.148v8.72c0 .042.002.084.007.124a3.82 3.82 0 0 0 1.002 7.504 3.818 3.818 0 0 0 .983-7.509 1.01 1.01 0 0 0 .007-.119V14.55l.93 1.036a11 11 0 0 0 8.19 3.66h2.417a1 1 0 0 0 .244-.03 3.82 3.82 0 0 0 7.411-1.297 3.818 3.818 0 0 0-7.577-.671 1.038 1.038 0 0 0-.078-.003H18.89a9 9 0 0 1-6.702-2.993l-2.25-2.511Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

GitMergeFill.displayName = "GitMergeFill";

export default GitMergeFill;
