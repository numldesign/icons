import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SidebarFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 5.533a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-20a1 1 0 0 0-1-1h-24Zm1 14h2a1 1 0 0 0 0-2h-2v-2h2a1 1 0 0 0 0-2h-2v-2h2a1 1 0 0 0 0-2h-2v-2h6v18h-6v-6Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

SidebarFill.displayName = "SidebarFill";

export default SidebarFill;
