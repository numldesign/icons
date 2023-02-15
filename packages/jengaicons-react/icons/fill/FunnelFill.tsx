import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FunnelFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M26.78 5.524H7.153a1 1 0 0 0-.755 1.656l7.338 8.448a1 1 0 0 1 .245.656v8.882a1 1 0 0 0 1.557.83l4.041-2.712a1 1 0 0 0 .443-.83v-6.172a1 1 0 0 1 .242-.653l7.274-8.452a1 1 0 0 0-.758-1.653Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

FunnelFill.displayName = "FunnelFill";

export default FunnelFill;
